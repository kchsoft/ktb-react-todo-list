import React, { useEffect, useState } from 'react'
import styles from '../../css/Footer/Weather.module.css'

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`

const Weather = () => {
  const [weather,setWeather] = useState(null)
  const getWeather = async () => {
    try{
      const weatherAPI = await fetch(weatherURL)
      const data = await weatherAPI.json()
      setWeather(data)
    } catch(error){
      alert("날씨 정보를 가져오는 것에 실패했습니다.")
    }
  } 

  useEffect( () => {
    getWeather()
  },[])

  if(weather === null){
    return <section className={styles['weather']}> Loading... </section>
  } else {
    return (
      <section className={styles['weather']}>{weather.name}의 날씨 : {weather.weather[0].main} / 기온 {Math.round(weather.main.temp)}°C </section>
    )
  }
}

export default Weather