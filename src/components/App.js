import React, { useState, useEffect} from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [qList, setQList] = useState([])


  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then((resp)=> resp.json())
    .then((questions)=>{
      setQList(questions)
    })
  }, [])


  function handleAddQuestion(newQuestion){
    setQList([...qList, newQuestion])
  }

  const handleDeleteQuestion = (currentQuestion)=>{
    const updatedList = qList.filter((question)=> question.id !== currentQuestion.id)
    setQList(updatedList)
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm  onAddQuestion = {handleAddQuestion}/> : <QuestionList qList = {qList} onDeleteQuestion={handleDeleteQuestion}/>}
    </main>
  );
}

export default App;
