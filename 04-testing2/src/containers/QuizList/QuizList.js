import React, {Component} from 'react'
import classes from './QuizList.css'
import {NavLink} from 'react-router-dom'
import Loader from '../../components/UI/Loader/Loader'
import axios from 'axios'


export default class QuizList extends Component {
  state = {
    quizzes: [],
    loading: true
  }

  renderQuizzes() {
    return this.state.quizzes.map((quiz) => {
      return (
        <li
          key={quiz.id}
        >
          <NavLink to={'/quiz/' + quiz.id}>
            Quiz {quiz.id}
          </NavLink>
        </li>
      )
    })
  }

  // получить данные с сервера асинхронно после изготовления DOM дерева
  async componentDidMount() {
    // axios.get("https://quiz-99dcb.firebaseio.com/quizzes.json").then(response => {
    //   console.log(response)
    // });

    try {
      const response = await axios.get(
        "https://quiz-99dcb.firebaseio.com/quizzes.json"
      );
      // debug
      // console.log(response.data)

      const quizzes = []
      
      Object.keys(response.data).forEach((key, index) => {
        quizzes.push({
          id: key,
          name: `Quiz ${index + 1}`
        })
      })
      this.setState({
        quizzes, loading: false
      })

    } catch (e) {
      console.log(e)
    }

  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>List of Quizzes</h1>
          {this.state.loading ? <Loader /> : <ul>{this.renderQuizzes()}</ul>}
        </div>
      </div>
    );
  }
}