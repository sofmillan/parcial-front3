import CardStyles from "../styles/Card.module.css"

const Card = ({name, author, img}) => {
  
  return (
	<div className={CardStyles.bookCard}>
    <img src={img} alt="Book cover"/>
    <h4>Hi, we know your favorite book is {name} by {author}.</h4>
  </div>
  )
}

export default Card