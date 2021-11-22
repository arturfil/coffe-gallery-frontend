import { useState } from "react"
import { createBean } from "../services/beanService";

const AddBeanView = () => {
  const [bean, setBean] = useState("");

  const handleName = (event) => setBean(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    createBean({name: bean});
    setBean("");
  }

  return (
    <div className="container">
      <form className="form">
        <input 
          onChange={handleName}
          placeholder="Bean Name" 
          type="text" 
          className="form-control" 
        />
        <button 
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Add Bean
        </button>
      </form>
    </div>
  )
}

export default AddBeanView;