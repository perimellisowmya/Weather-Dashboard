import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Weather.css'
import Error from './Error'
import Search from './Search'
import CurrentCard from './CurrentCard'
import Today from './Today'
import TableChart from './TableChart'
import weath from './images/craig.jpg'
import pexels from './images/pexels.jpg'


const Weather = () => {
  const [condition, setCondition] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [weather, setWeather] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const [input, setInput] = useState("");
  const [celscius, setCelscius] = useState(true);
  const [ind, setIndex] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [clickDay, setClick] = useState('');
  const [user, setUser] = useState("farmers")
  const [day] = useState(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"])



  // useEffect(() => {

  // }, [weather, user])



  //For Fetching data 
  const getData = () => {
    axios.get("https://api.weatherapi.com/v1/forecast.json", {
      params: {
        key: "04d8f044b0904ee39b655349240202",
        q: input,
        days: 7,
        aqi: "no",
        alert: "no"
      }
    })
      .then(res => {
        console.log(res)
        setWeather(res.data)
        setCondition(res)
        setForecast(res.data.forecast.forecastday)
        console.log(forecast)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        console.log(err)
      })
  }

  //For units
  const handleCel = (cel) => {
    const element = document.getElementsByClassName("temp")
    if (cel === "c") {
      setCelscius(true);
      element[0].classList.remove("active");
      element[1].classList.add("active");
    }
    else {
      setCelscius(false);
      element[1].classList.remove("active");
      element[0].classList.add("active");
    }
  }

  //For Table
  const handleDay = (day) => {
    setIndex(day)
    setClick(day)
    console.log(ind)
  }

  //For searching other cities
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true)
    setLoading(true)
    getData()
  }

  //Loading and total code
  const renderLoading = () => {
    console.log("inside render loading");
    console.log("error", error);
    if (error && isLoading) {
      return <Error error={error} />
    }

    else if (isLoading) {
      return <div>Loading...</div>
    }

    else return (
      <div className="container">

        <Search handleSubmit={e => handleSubmit(e)} setInput={setInput} user={user} setUser={setUser} />
        {
          console.log(user, weather)
        }
        {/* Submit Condition */}
        <>
          {

            submit ? user === "farmers" ? <><TableChart forecast={forecast} ind={ind} handleDay={handleDay} celscius={celscius} day={day} clickDay={clickDay} weather={weather} /></>

              :
              user === 'EventPlanners' ? <><Today weather={weather} forecast={forecast} celscius={celscius} /></> :
                user === 'Travelers' ? <><CurrentCard weather={weather} forecast={forecast} handleCel={handleCel} condition={condition} day={day} celscius={celscius} /></> :
                  <>
                    <img style={{ marginTop: '0px', width: '100%', height: '485px' }} src={weath} alt="back" />
                  </>
              :
              <>
                <h2 className='text'>Welcome to Weather Dashboard Application</h2>
                <img className="background-image" src={pexels} alt="back" />
              </>
          }
        </>

      </div>
    )
  }

  //To app
  return <div>{renderLoading()}</div>
}

export default Weather


