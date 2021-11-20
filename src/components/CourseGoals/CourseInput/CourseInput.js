import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const[isValid,setIsValid]= useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    setEnteredValue("");
  if (enteredValue===0){
    setIsValid(false);
    
    return;
  }
    props.onAddGoal(enteredValue);
  };


  return (
    
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Inter Goal  </label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
      </div>
      <Button style={"background:yellow" }type="submit">Add </Button>
      
    </form>
  );
  
  
  
};

export default CourseInput;
