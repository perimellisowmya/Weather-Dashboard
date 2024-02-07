import React from 'react'

function Table({ forecast, ind, celscius, day, weather }) {
  const date = new Date(forecast[ind].date);

  return (
    <>
      <div className="last mt-3">
        <table className="table" >
          <thead>
            <tr>
              <th scope="col" className='col_1'>
                <p style={{ fontSize: '20', fontWeight: '500' }}>{date.getDate()}</p>
                <p>{day[new Date(forecast[ind].date).getDay()]}</p>
              </th>
              <th scope="col">Icon</th>
              <th scope="col">Temp</th>
              <th scope="col">Wind</th>
              <th scope="col">Precip.</th>
              <th scope="col">Cloud</th>
              <th scope="col">Humidity</th>
              <th scope="col">Pressure</th>
            </tr>
          </thead>

          <tbody>
            {
              forecast[ind].hour.filter((item, i) => {
                if (i % 3 === 0 && i < 20) {
                  return item
                }
                else if (i === 20) {
                  return item
                }
              }).map((item, i) => {
                return (
                  <tr style={{ verticalAlign: 'middle' }}>
                    <th scope="row" >{i < 4 ? `${i * 3}:00am` : i === 4 ? `12:00pm` : i > 4 && i < 7 ? `${3 * (i - 4)}:00pm` : `8:00pm`}</th>
                    <td><img src={item.condition.icon} alt="icon" /></td>
                    <td>{celscius ? item.temp_c : item.temp_f} {celscius ? <span>&deg;C</span> : <span>&deg;F</span>}</td>
                    <td>{celscius ? item.wind_kph : item.wind_mph} {celscius ? <span>Kmph</span> : <span>mph</span>}</td>
                    <td>{item.precip_in} in</td>
                    <td>{item.cloud} %</td>
                    <td>{item.humidity} %</td>
                    <td>{item.pressure_in} in</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </div>
    </>
  )
}

export default Table