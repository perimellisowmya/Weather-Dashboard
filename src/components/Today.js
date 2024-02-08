import React, { useState } from 'react';
import './Today.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function Today({ forecast, celscius, weather }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const twoWeeksFromNow = new Date();
  twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 13);

  const handleDateChange = date => {
    setSelectedDate(date || new Date());
  };


  const selectedForecastIndex = selectedDate ? forecast.findIndex(item => {
    const forecastDate = new Date(item.date).toDateString();
    return forecastDate === selectedDate.toDateString();
  }) : -1;

  return (
    <div className='image'>
      <div className='today-container'>
        <h4 className="today-title">Please select a date to view weather information.</h4>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          isClearable
          showYearDropdown
          scrollableYearDropdown
          maxDate={twoWeeksFromNow}
        />
        {selectedDate && <p>Selected Date: {selectedDate.toDateString()}</p>}



        {selectedForecastIndex !== -1 && (
          <>
            <h4 style={{ justifyContent: "center" }}>{weather.location.name}</h4>
            <div className="today-content">
              <div className="col-sm-2 col-6 my-3">
                <p>Sunrise {forecast[selectedForecastIndex].astro.sunrise}</p>
                <p>Sunset {forecast[selectedForecastIndex].astro.sunset}</p>
              </div>

              <div className="col-sm-3 col-6 my-3">
                <p>Moonrise {forecast[selectedForecastIndex].astro.moonrise}</p>
                <p>Moonset {forecast[selectedForecastIndex].astro.moonset}</p>
              </div>

              <div className="col-sm-7 my-3 today_cond">
                <p>Max <span>{celscius ? forecast[selectedForecastIndex].day.maxtemp_c : forecast[selectedForecastIndex].day.maxtemp_f}&deg;{celscius ? 'C' : 'F'}</span></p>
                <p>Min <span>{celscius ? forecast[selectedForecastIndex].day.mintemp_c : forecast[selectedForecastIndex].day.mintemp_f}&deg;{celscius ? 'C' : 'F'}</span></p>
                <p>Avg <span>{forecast[selectedForecastIndex].day.mintemp_c}&deg;{celscius ? 'C' : 'F'}</span></p>
                <p>Precip. <span>{forecast[selectedForecastIndex].day.totalprecip_mm} mm</span></p>
                <p>Max.Wind <span>{celscius ? forecast[selectedForecastIndex].day.maxwind_kph : forecast[selectedForecastIndex].day.maxwind_mph} {celscius ? 'Kmph' : 'mph'}</span></p>
              </div>
            </div>
          </>

        )

        }

      </div>
    </div>
  );
}

export default Today;
