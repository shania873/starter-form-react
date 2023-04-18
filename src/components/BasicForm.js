import { useState } from "react";

const BasicForm = (props) => {

const [nameIsEmpty, setNameIsEmpty] = useState(false);
const [emailIsEmpty, setEmailIsEmpty] = useState(false);
const [emailIsValid, setEmailIsValid] = useState(false);
const [emailValue, setEmailValue] = useState(false);
const [nameValue, setNameValue] = useState(false);


  const onSubmitForm = function(e) {
    e.preventDefault();
    (!nameValue)? setNameIsEmpty(true) : setNameIsEmpty(false);
    (!emailValue)? setEmailIsEmpty(true) : setEmailIsEmpty(false);
 
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue))
    {
      return setEmailIsValid(false)
    }
    return setEmailIsValid(true);
  }
console.log(emailValue.length)
  return (
    <form onSubmit={onSubmitForm}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' onChange={(e) => setNameValue(e.target.value)}/>
          {nameIsEmpty && (
            <p>Name don't be empty</p>
          )}
        </div>      
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={(e) => setEmailValue(e.target.value)}/>
   

        {emailIsEmpty && (
            <p>Email don't be empty</p>
          )}

          {emailIsValid && (
            <p>E-mail don't be valid</p>
          )}

      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
