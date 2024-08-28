import React, { useState } from 'react';
import loadgif from './assets/loadgif.gif'
function App() {
  let [city, setCity] = useState('Delhi')
  let [wDetails, setWdetails] = useState() // undefined by default
  let [isLoading , setIsLoading] = useState(false)
  let getData = (event) => {
    setIsLoading(true)
    console.log(city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe5c37d196e887e9b6e777137c9ea190&units=metric`)
      .then((res) => res.json())
      .then((finalRes) => {
        if(finalRes.cod === "404"){
          setWdetails(undefined)
        }else{
          console.log(finalRes)
          setWdetails(finalRes)
        }
        setIsLoading(false)
      })


    event.preventDefault();
    setCity('')
  }
  return (
    <div className='w-[100%] h-[100vh] bg-blue-700 pt-10'>
      <div className='max-w-[1320px] mx-auto'>
        <h1 className='text-3xl text-white mb-10'>Simple Weather App</h1>
        <form onSubmit={getData}>
          <input type='text' placeholder='City Name' className='px-2 py-2' onChange={(e)=>setCity(e.target.value)} />
          <button type='submit' className='bg-white text-blue-700 text-xl px-4 py-2 mx-4'>Submit</button>
        </form>

        <div className='bg-white w-[400px] h-[250px] mx-auto relative'>
          <img src={loadgif} className={`absolute left-[15%] top-[30%] w-[300px]  ${isLoading ? '' : 'hidden'}`}/>
          {
            wDetails !== undefined
              ?
              <div>
                <h3 className='text-3xl text-left pl-4 pt-4'><b>{wDetails.name}</b> 
                <span className='text-sm ml-1'><b>{wDetails.sys.country}</b></span>
                </h3>
                <h2 className='my-3 pl-4 text-2xl'>{wDetails.main.temp} <sup>o</sup>C</h2>
                <img src={`https://openweathermap.org/img/w/${wDetails.weather[0].icon}.png`} className='pl-4 ' />
                <p className='my-2 pl-4 text-xl'>
                  <li className='list-none'>Humidity : {wDetails.main.humidity}</li>
                  <li className='list-none'>{wDetails.weather[0].description}</li>
                </p>
              </div>

              :
              "No data found"
          }

        </div>
      </div>
    </div>
  );
}

export default App;
