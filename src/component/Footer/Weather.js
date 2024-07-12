import React, { useEffect, useState } from 'react'

const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=fdb568b79dbec452976c165fe35ab3c7&units=metric"

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
    return <section> Loading... </section>
  } else {
    return (
      <section>{weather.name}의 날씨 : {weather.weather[0].main} / 기온 {Math.round(weather.main.temp)}°C </section>
    )
  }
}

export default Weather