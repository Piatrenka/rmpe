import React from 'react'
import classes from './ActiveQuiz.css'

import AnswersList from '../AnswersList/AnswersList'

const ActiveQuiz = props => {
  const currentQuestion = props.currentQuestion + 1
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>{currentQuestion}.</strong>&nbsp;
          {props.question}
        </span>
        <small> {currentQuestion} from {props.quizLength}</small>
      </p>

      <AnswersList 
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
        answerState={props.answerState}
      />
    </div>
  );
}

export default ActiveQuiz