import React from 'react'
import Table from './Table'
import table from './images/table.png'

import './TableChart.css'

function TableChart({ forecast, handleDay, celscius, day, ind, clickDay, weather }) {
  console.log(forecast, handleDay, celscius, day, weather);


  const handleChart = (type) => {
    const element = document.getElementsByClassName("last");
    const active = document.getElementsByClassName("temp");

    if (type === "c") {
      element[1].classList.remove("show");
      element[0].classList.add("show");
      active[2].classList.remove("active");
      active[3].classList.add("active");
    }
    else {
      element[0].classList.remove("show");
      element[1].classList.add("show");
      active[3].classList.remove("active");
      active[2].classList.add("active");
    }
  }
  return (
    <>
      <div className="row ">
        <h4 className='text-start'> Weather in {weather.location.name}</h4>
        <div className="col-md-8 mb-3 text-start mobile_days">

          {
            forecast && forecast.map((item, index) => {
              return <button style={{ backgroundColor: `${clickDay === index || (index === 0 && !clickDay) ? '#ADC3E9' : ""}` }}
                className="days"
                onClick={() => handleDay(index)}>
                {index === 0 ? 'Today' : day[new Date(item.date).getDay()]}
              </button>
            })

          }
        </div>
        <div className="col-md-4 text-end ">
          <button className='temp active' onClick={() => handleChart('t')}><img src={table} alt="table" /></button>
        </div>
      </div>
      <div>
        <Table forecast={forecast} ind={ind} celscius={celscius} day={day} weather={weather} />
        <div className="mt-3 last show" style={{ padding: '30px', marginBottom: '20px', border: '1px solid #DDDDDD', borderRadius: '10px' }}>
        </div>
      </div>
    </>
  )
}

export default TableChart