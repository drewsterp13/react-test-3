import { Link } from 'react-router-dom'
import { signInWithPopup, signOut } from "firebase/auth"
import { auth, Providers } from "../config/firebase"

export default function Navbar() {
  const signOutOnClick = () => {
    signOut(auth)
    location.reload();
    console.log("RELOAD")
  }

  const signInOnClick = async () => {
    const response = await signInWithPopup(auth, Providers.google);
    if ( response.user ) {
      location.reload();
      console.log("RELOAD")
    }
  }
  
  return (
    <nav className="bg-gray-500 text-white flex flex-col md:flex-row justify-between p-2">
        <div className="flex flex-row justify-center">
            <h1 className="text-yellow-300 font-bold text-2xl sm:text-3xl p-1">THE CAR DEALERSHIP's</h1>
            <h3 className="text-xl sm:text-2xl p-1">car data modifier</h3>
        </div>
        <div className="flex flex-row justify-center">
            <Link to="/" className="p-1 font-semibold">home</Link>
            <Link to="/dashboard" className="p-1 font-semibold">dashboard</Link>
            <Link to="/info" className="p-1 font-semibold">info</Link>
            <Link to="/" onClick={ () => { signInOnClick()}} className="p-1 text-blue-900 font-semibold">log in</Link>
            <Link to="/" onClick={ () => { signOutOnClick()}} className="p-1 text-red-900 font-semibold">sign out</Link>
        </div>
    </nav>
  )
}
