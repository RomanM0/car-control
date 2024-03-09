import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main_container}>
      <h1>Welcome to "Car Controller"</h1>
      <h2>🚘Always be aware of state of your car! </h2>
      <h2>Avoid unexpected car problems</h2>
      <div className="main_button_container">
      <Link href={'/Login'}>
        <button className="main_btn login_btn">Login</button>
        </Link>
        <Link href={'/Register'}>
        <button className="main_btn reg_btn">New user? Register</button>
        </Link>
      </div>
      </div>
    </main>
  );
}
