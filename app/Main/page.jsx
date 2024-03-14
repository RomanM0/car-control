import { useRouter } from "next/navigation";
import React from 'react'
import { auth } from "../firebase";

const Main = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      router.push('/Login')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Welcome to React Firebase Auth using email and password</h1>
      <h2>{user && user.email}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Main