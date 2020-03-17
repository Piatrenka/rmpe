import React, {Component} from 'react'
import classes from './QuizCreator.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import Select from '../../components/UI/Select/Select'
import {createControl, validate, validateForm} from '../../form/formFramework'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import axios from 'axios'

function createOptionControl(number) {
  return createControl({
    label: `Option ${number}`,
    errorMessage: 'Option haven\' to be empty',
    id : number
  }, {
    required: true
  })
}

function createFormControls() {
  return {
    question: createControl(
      {
        label: "Input question",
        errorMessage: "Question haven't to be empty"
      },
      { required: true }
    ),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4)
  };
}

export default class QuizCreator extends Component {
  state = {
    quiz: [],
    isFormValid: false,
    formControls: createFormControls(),
    rightAnswerId: 1
  }
  // не реагировать на дефолтный submit
  submitHandler = event => {
    event.preventDefault()
  }

  // новый вопрос
  addQuestionHandler = event => {
    event.preventDefault()

    // локальная копия массива quiz из state
    const quiz = this.state.quiz.concat()
    const index = quiz.length + 1

    const {question, option1, option2, option3, option4} = this.state.formControls

    const questionItem = {
      question: question.value,
      id: index,
      rightAnswerId: this.state.rightAnswerId,
      answers: [
        {text: option1.value, id: option1.id},
        {text: option2.value, id: option2.id},
        {text: option3.value, id: option3.id},
        {text: option4.value, id: option4.id},
      ]
    }

    quiz.push(questionItem)
    this.setState({
      quiz,
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControls()
    })
  }

  // новый тест
  createQuizHandler = async event => {
    event.preventDefault()

    // debug
    // console.log(this.state.quiz)

    // TODO: Теперь это надо положить на сервер

    // axios.post("https://quiz-99dcb.firebaseio.com/quizzes.json", this.state.quiz)
    // .then(response => {
    //   console.log(response)
    // })
    // .catch(error => console.log(error))

    // асинхронное чтение бд
    try {
      await axios.post(
        "https://quiz-99dcb.firebaseio.com/quizzes.json",
        this.state.quiz
      );

      this.setState({
        quiz: [],
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControls()
      })
      // debug
      // console.log(response.data)

    } catch (e) {
      console.log(e)
    }
  }

  onChangeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

    control.touched = true
    control.value = value
    control.valid = validate(control.value, control.validation)

    formControls[controlName] = control
    this.setState({
      formControls,
      isFormValid: validateForm(formControls)
    })
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Auxiliary key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={event => this.onChangeHandler(event.target.value, controlName)}
          />
          {index === 0 ? <hr /> : null}
        </Auxiliary>
      )
    })
  }

  selectChangeHandler = event => {
    // debug
    // console.log(event.target.value)
    this.setState({
      rightAnswerId: +event.target.value      // + как способ неявного приведения к number
    })
  }
  render() {

    const select = <Select 
      label='Select right answer'
      value={this.state.rightAnswerId}
      onChange={this.selectChangeHandler}
      options={[
        {text: '1', value: 1},
        {text: '2', value: 2},
        {text: '3', value: 3},
        {text: '4', value: 4}
      ]}
    />
    
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Quiz Creator</h1>
          <form onSubmit={this.submitHandler}>
            {this.renderInputs()}

            {select}

            <Button
              type="primary"
              onClick={this.addQuestionHandler}
              disabled={!this.state.isFormValid}
            >
              Add question
            </Button>

            <Button
              type="success"
              onClick={this.createQuizHandler}
              disabled={this.state.quiz.length === 0}
            >
              Create Quiz
            </Button>
          </form>
        </div>
      </div>
    )
  }
}