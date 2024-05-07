export default function Info() {
  return (
    <div className="items-center text-center flex flex-col">
      <h1 className="text-2xl font-bold text-gray-700">Info for car dealership</h1>
      <div className="h-2/5 w-4/5 m-2">
        <h2 className="text-xl font-bold text-gray-600">Basic Info</h2>
        <p>email: welovecars@gmail.com</p>
        <p>phone: 304-1234-456</p>
        <p>address: 153 Car Way, Carville, OH, 28563</p>
        <p>offical site: <a className="text-slate-600 underline" href="https://my-flask-car-collection.onrender.com">https://my-flask-car-collection.onrender.com</a></p>
      </div>
    </div>
  )
  
}
