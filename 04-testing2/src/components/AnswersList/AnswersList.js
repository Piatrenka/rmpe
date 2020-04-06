import React from 'react'
import classes from './AnswersList.css'

import AnswerItem from '../AnswerItem/AnswerItem'

const AnswersList = props => {
  return (
    <div>
      {/* <h4>I'm AnswersList comp</h4> */}
      <ul className={classes.AnswersList}>
        {props.answers.map((answer, index) => {
          return <AnswerItem 
            key={index} 
            answer={answer} 
            onAnswerClick={props.onAnswerClick}
            answerState={props.answerState ? props.answerState[answer.id] : null}
          />;
        })}
      </ul>
    </div>
  );
}

export default AnswersList