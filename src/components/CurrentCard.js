import React from 'react'
import './CurrentCard.css'

function CurrentCard({weather,condition,day,forecast,celscius,handleCel}) {
    return (
        <>
         <div className="row">
          <div className="col-9 mt-4 mb-3 text-start">
                <h3 style={{display:'inline'}}> {weather.location.name} Weather Forecast </h3>
          </div>
    
          <div className="col-3 my-3 text-end">
                <button className='temp mobile_temp' onClick={() =>handleCel('f')}>&deg;F</button>
                <button className='temp mobile_temp active' onClick={() =>handleCel('c')}>&deg;C</button>   
         </div>
      </div>
    
      <div className="card mb-6 mobile_card">
          <div className="row mb-6 mobile_card" style={{color:'darkgray'}}>
            <div className="col-sm-6 mb-5 text-start card_1">
            <img src={condition.data.current.condition.icon} alt="icon" />
                <div>
                <p style={{fontSize: '40px',lineHeight: '50px',marginBottom:'0'}}>{celscius?condition.data.current.temp_c:condition.data.current.temp_f} {celscius? <span>&deg;C</span>:<span>&deg;F</span>} { day[new Date(forecast[0].date).getDay()]}</p>
                <p style={{fontSize: '14px',lineHeight: '20px'}}>{condition.data.current.condition.text}</p>
                </div> 
            </div>
          <div className="col-sm-6">
            <div className="row card_1_2">
              <div className="col-4  mb-5 card_2">
                <p>Wind</p>
                <p>{celscius?condition.data.current.wind_kph:condition.data.current.wind_mph} {celscius? <span>Kmph</span>:<span>mph</span>}</p>
              </div>
      
              <div className="col-4 mb-5 card_2">
                <p>Precip</p>
                <p>{condition.data.current.precip_mm} mm</p>
              </div>
              
              <div className="col-4 mb-5 card_2">
                <p>Pressure</p>
                <p>{celscius?condition.data.current.pressure_mb:condition.data.current.pressure_in} {celscius? <span>mb</span>:<span>in</span>}</p>
              </div>
            </div>
        </div>
            
          </div>
    
          <div className="card_2 card_2_1" >
                {
                   forecast.length ?forecast.slice(1).map((item) =>{
            
                    return(
                    <div className="card_2_2">
                      <div>
                        <img src={item.day.condition.icon} alt="icons" />
                        <p>{ day[new Date(item.date).getDay()]}</p>
                        <p>{celscius?item.day.avgtemp_c:item.day.avgtemp_f} {celscius? <span>&deg;C</span>:<span>&deg;F</span>}</p>
                        <p>{item.day.condition.text}</p>
                      </div>
                        
                    </div>
                    )
                })  : <h3>Nothing Found!!</h3> 
                }
          </div>
      </div>
        </>
       
      )
}

export default CurrentCard