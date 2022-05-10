import React from "react";

function QuestionItem({ question,onDeleteQuestion, index }) {
  const { prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

    function handleDelete(){
      console.log(question)
      fetch(`http://localhost:4000/questions/${question.id}`,{
        method:"DELETE",
      })
      .then((resp)=> resp.json())
      .then(()=> onDeleteQuestion(question))
    }


  return (
    <li>
      <h4>Question {index}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
