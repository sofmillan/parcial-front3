import { useState } from "react"
import Card from "./Card"
import FormStyles from "../styles/Form.module.css"

const Form = () => {

  const [book, setBook] = useState({
    name:"",
    author:""
  })

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);



  const handleName = (event) =>{
    setBook({...book, name:event.target.value});
  }

  const handleAuthor = (event) =>{
    setBook({...book, author:event.target.value})
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    if(book.name.trim().length>=3 && book.author.length>=6){
      setSuccessMessage(true);
      setErrorMessage(false);
    }else{
      setErrorMessage(true);
  
    }
  }
  return (
	<>
  <form onSubmit={handleSubmit}  className={FormStyles.bookForm}>
    <div>
      <label>Book name</label>
      <input type="text" value={book.name} onChange={handleName}></input>
    </div>

    <div>
      <label>Book author</label>
      <input type="text" value={book.author} onChange={handleAuthor}></input>
    </div>
 
    <button>Submit</button>
  </form>

  {errorMessage && <h2>valida tus datos</h2>}
  {successMessage && <Card name={book.name} author={book.author} />}
  </>
  )
}

export default Form