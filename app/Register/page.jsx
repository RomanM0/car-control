'use client'
import React, { useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Register = ()  => {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/Main')
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="loginPage">
    <form className="loginComponent" onSubmit={handleSubmit}>
      <div className="panelTitle">
        <h1 className="panelTitleText">Welcome back</h1>
      </div>
      <div className="loginInputs">
        <input type="email" required className="loginInput" placeholder="Your Email..." />
        <input type="password" required className="loginInput" placeholder="Your Password..." />
      </div>
      <div className="main_button_container">
        <button type='submit' className="main_btn login_btn loginpg_btn">Login</button>
        <Link href={'/RecoverAccount'}>Forgot Password?</Link>
      </div>
    </form>
    </div>
  )
}
export default Register