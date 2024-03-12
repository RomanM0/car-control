import React from 'react'
import React, { useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
}
export default function Register() {
  return (
    <div className="loginPage">
    <form className="loginComponent">
      <div className="panelTitle">
        <h1 className="panelTitleText">Welcome back</h1>
      </div>
      <div className="loginInputs">
        <input type="email" required className="loginInput" placeholder="Your Email..." />
        <input type="password" required className="loginInput" placeholder="Your Password..." />
      </div>
      <div className="main_button_container">
      <Link href={'/Login'}>
        <button type='submit' className="main_btn login_btn loginpg_btn">Login</button>
        </Link>
        <Link href={'/RecoverAccount'}>Forgot Password?</Link>
      </div>
    </form>
    </div>
  )
}
