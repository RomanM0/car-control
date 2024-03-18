'use client'
import { useRouter } from "next/navigation";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import Cookies from "js-cookie";
const Main = () => {
  const router = useRouter()
  const handleLogout = async () => {
    try {
      await signOut(auth);
      if (typeof window !== 'undefined') {
        // Perform localStorage action
      Cookies.remove('token')
      Cookies.remove('user')
      }
      router.push('/')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
     <div className="header">
      <div className="header_title">Car Controller</div>
      <div className="header_title car_name">Your Cars</div>
      <div className="header_toolbar"><button onClick={handleLogout}>Logout</button></div>
     </div>
     <div className="list_component">
      <div className="car_component">
        <div className="car_image">
          <img className="car_img" src="https://www.pngmart.com/files/10/Skoda-Octavia-Transparent-Background.png" alt="" />
        </div>
        <div className="car_data">
          <p className="car_data_txt car_data_name">Name and model: <p> Skoda Octavia R5</p></p>
          <p className="car_data_txt">Year: <p>2005</p></p>
          <p className="car_data_txt">Color: <p>Red</p></p>
          <p className="car_data_txt">Max speed:<p>180 km/h</p></p>
          <button className="main_btn car_data_btn">View Info</button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Main