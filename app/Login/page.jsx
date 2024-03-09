import React from 'react'
import Link from 'next/link'
export default function Login() {
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
