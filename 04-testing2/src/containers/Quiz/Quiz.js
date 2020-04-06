import React, { Component } from "react";
import classes from "./Quiz.css";

import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz"

class Quiz extends Component {
  state = {
    results: {},    // {[id]: 'success' 'error'}
    isFinished: false,
    currentQuestion: 0,
    answerState: null, // {[id]: 'success' 'error'}
    quiz: [
      {
        question: "The ultimate question of life, the universe, and everything",
        id: 1,
        rightAnswerId: 3,
        answers: [
          { text: "1", id: 1 },
          { text: "13", id: 2 },
          { text: "42", id: 3 },
          { text: "0635", id: 4 }
        ]
      },
      {
        question: "The first animated film in the world",
        id: 2,
        rightAnswerId: 2,
        answers: [
          { text: "The Clown and His Dogs", id: 1 },
          { text: "A Good Beer", id: 2 },
          { text: "Poor Pete", id: 3 }
        ]
      },
      {
        question:
          "Kurią gausime, jei vilksime pažymėto A1 ląstelės užpildo rankenėlę (kvadratėlis dešiniajame apatiniame kampe) žemyn? A1 ląstelėje yra įrašytas skaičius 15.",
        id: 3,
        rightAnswerId: 1,
        answers: [
          { text: "15, 15, 15, 15, 15", id: 1 },
          { text: "15, 14, 15, 14", id: 2 },
          { text: "15, 14, 13", id: 3 }
        ]
      }
    ]
  };

  onAnswerClickHandler = answerId => {
    // console.log(`Answer Id: ${answerId}`)
    // console.log(this.state);

    // Блокирование многократного случайного угадывания правильного ответа в нескольких последовательных вопросах
    if (this.state.answerState) {
      // Получить доступ к ключу элемента объекта с помощью оператора Object.keys
      const key = Object.keys(this.state.answerState)[0]
      if ( this.state.answerState[key] === 'success' ) {
        return
      }
    }

    const question = this.state.quiz[this.state.currentQuestion];
    const results = this.state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }

      this.setState({
        answerState: { [answerId]: "success" },
        // объект, в котором будут содержаться id вопросов(это будет ключем) и результаты ответов (значение ключа)
        results
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizOver()) {
          // console.log(`Quiz is finished`);
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            currentQuestion: this.state.currentQuestion + 1,
            answerState: null
          });
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      // неправильно ответили на вопрос
      results[question.id] = 'error'
      this.setState({
        answerState: { [answerId]: "error" },
        // ключи и значение совпадают и значит можно избавиться от дублирования
        results
      });
    }
  };

  isQuizOver() {
    return this.state.currentQuestion + 1 === this.state.quiz.length;
  }

  // Обработчик клика по кнопке Repeat
  onRetryClickHandler = () => {
    this.setState({
      results: {}, // {[id]: 'success' 'error'}
      isFinished: false,
      currentQuestion: 0,
      answerState: null // {[id]: 'success' 'error'}
    });
  }

  async componentDidMount() {
    // Получить значение переданного параметра
    // console.log(`Quiz ID = ${this.props.match.params.id}`)
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>
          {
            this.state.isFinished
            ? <FinishedQuiz 
                results={this.state.results}
                quiz={this.state.quiz}
                onRetryClick={this.onRetryClickHandler}
              />
            : <ActiveQuiz
                question={this.state.quiz[this.state.currentQuestion].question}
                answers={this.state.quiz[this.state.currentQuestion].answers}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                currentQuestion={this.state.currentQuestion}
                answerState={this.state.answerState}
              />
          }
        </div>
      </div>
    );
  }
}

export default Quiz;
