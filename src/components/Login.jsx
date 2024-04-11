import { useState } from "react";

export default function Login() {
 // const [enteredEmail, SetEnteredEmail] = useState('');
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });
  function handleSummit (event){
    event.preventDefault();
   console.log(enteredValues);
  }
  
  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  function handleEmailChange(event) {
    SetEnteredEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    SetEnteredPassword(event.target.value);
  }

  return ( 
    <form onSubmit={handleSummit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email ">Email</label>
          <input id="email" 
          type="email" 
          name="email" 
           />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" 
          type="password" 
          name="password"
          /> 
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
