'use client'
import React, { useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
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
      Cookies.set('token', user.accessToken, {expires: 7})
      Cookies.set('user', JSON.stringify(user), {expires: 7})
      router.push('/Main')
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="loginPage">
    <form className="loginComponent" onSubmit={handleSubmit}>
      <div className="panelTitle">
        <h1 className="panelTitleText">Register</h1>
      </div>
      <div className="loginInputs">
        <input type="email" required className="loginInput" placeholder="Your Email..." onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" required className="loginInput" placeholder="Your Password..." onChange={(e)=>{setPassword(e.target.value)}} />
      </div>
      <div className="main_button_container">
        <button type='submit' className="main_btn login_btn loginpg_btn">Register</button>
        <Link href={'/Login'}>Old User? Login</Link>
      </div>
    </form>
    </div>
  )
}
export default Register