import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({qList,onDeleteQuestion}) {

  console.log(qList)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{qList.map((question,index)=> <QuestionItem key={question.id} question={question} onDeleteQuestion={onDeleteQuestion} index={index+1}/>)}</ul>
    </section>
  );
}

export default QuestionList;
