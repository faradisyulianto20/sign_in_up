import './App.css';
import React from 'react';
import background from './assets/background.jpg';

function App() {
  return (
    <div className="App my-auto">
      <img src={background} alt='background' className='background'></img>
      <div>
        <Form />
      </div>
    </div>
  );
}

function Form() {
  return(
      <div className='Form'>
      <div className='header'>
        <h1>Login</h1>
        <div>Welcome back! please login to your account</div>
        <form action="#" method="POST">
          <label for="name">User Name</label>
          <input type="text" id="name" name="name" required></input>

          <label for="password">Password</label>
          <input type="password" id="password" name="password" required></input>

          <div className='add-menu'>
            <div className='remember'><input type="checkbox" name="remember-me" value="remember-me" className='checkbox'></input>Remember me?</div>
            <div className='forgot-password'>Forgot password</div>
          </div>
          <button type="submit">Submit</button>
        </form >
      </div>

      <div className='footer-form'>
        <div className='grey'>New User?</div>
        <div className='sign-up'>Signup</div>
      </div>
    </div>
  )
}

export default App;
