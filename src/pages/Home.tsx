import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="items-center text-center flex flex-col">
      <h1 className="text-2xl font-bold text-gray-700">Welcome to the car dealership's car data modifier</h1>
      <div className="h-2/5 w-4/5 m-2">
        <h2 className="text-xl font-bold text-gray-600">Intro</h2>
        <p>This site is an extention of the Car Dealership where you can modify car data.</p>
        <button className="bg-gray-500 text-white m-3 p-1 rounded hover:bg-gray-800 font-semibold"><Link to="/dashboard" className="p-3">dashboard</Link></button>
      </div>
    </div>
  )
}
