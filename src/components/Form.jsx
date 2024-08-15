import { useState } from "react"
import Card from "./Card"
import FormStyles from "../styles/Form.module.css"

const Form = () => {

  const [book, setBook] = useState({
    name:"",
    author:"",
    img:""
  });

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);


  const handleName = (event) =>{
    setBook({...book, name:event.target.value});
  }

  const handleAuthor = (event) =>{
    setBook({...book, author:event.target.value});
  }

  const handleImg = (event) =>{
    setBook({...book, img:event.target.value});
  }

  const handleSubmit = (event) =>{
    event.preventDefault();

    const imgUrlRegex = /https?:\/\/.*\.(jpg|jpeg|png|gif|bmp|webp|svg)/gi;
 
    if(book.name.trim().length>=3 
      && book.author.length>=6 
      && imgUrlRegex.test(book.img)){

      setSuccessMessage(true);
      setErrorMessage(false);

    }else{
      setErrorMessage(true);
      setSuccessMessage(false);
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

    <div>
      <label>Book cover</label>
      <input type="url" value={book.img} onChange={handleImg}></input>
    </div>
 
    <button type="submit">Submit</button>
  </form>

  {errorMessage && <h2 style={{color:'maroon'}}>Please verify your info</h2>}
  {successMessage && <Card name={book.name} author={book.author} img={book.img}/>}
  </>
  )
}

export default Form;