import axios from 'axios'
import React, {useEffect, useState} from 'react'

const Cd = ({lat, lon}) => {
  const [wD, setWDay]=useState('')

    useEffect(() => {
          axios.get(`http://api.weatherapi.com/v1/forecast.json?key=b1222e15e8d74adf8bf112227212210&q=${lat},${lon}&days=3&aqi=no`)
              .then((res) =>setWDay(res.data))
              .catch(err => console.log(err.response)
              )
      }, [lat, lon]);

  return (
    <>
      <td>{wD&&Math.ceil(wD.forecast.forecastday[0].day.avgtemp_c)}</td>
      <td>{wD&&Math.ceil(wD.forecast.forecastday[0].day.maxwind_kph)}</td>
      <td><img src ={wD&&wD.forecast.forecastday[0].day.condition.icon}/></td>
      <td>{wD&&Math.ceil(wD.forecast.forecastday[1].day.avgtemp_c)}</td>
      <td>{wD&&Math.ceil(wD.forecast.forecastday[1].day.maxwind_kph)}</td>
      <td><img src ={wD&&wD.forecast.forecastday[1].day.condition.icon}/></td>
      <td>{wD&&Math.ceil(wD.forecast.forecastday[2].day.avgtemp_c)}</td>
      <td>{wD&&Math.ceil(wD.forecast.forecastday[2].day.maxwind_kph)}</td>
      <td><img src ={wD&&wD.forecast.forecastday[2].day.condition.icon}/></td>
    </>
  )
}

export default Cd;