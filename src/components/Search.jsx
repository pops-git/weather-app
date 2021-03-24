import React, { useState, useRef } from 'react';
import {CurrentWeather} from './CurrentWeather'
import {CityExist} from '../functions/CityExist'
import {ApiWeather} from '../functions/ApiWeather'
import {ApiOneCall} from '../functions/ApiOneCall'

export const Search = () => {

    const searchLocation = useRef()
    const[location, setLocation] = useState()
    const[weather, setWeather] = useState()

    const canShowWeather = weather !== undefined && location !== undefined && location.coord !== undefined

    const autoSearchWeather = async () => {
        if(CityExist(searchLocation.current.value)){
            const autoLocationResult = await ApiWeather(searchLocation.current.value)
            setLocation(autoLocationResult)

            if(autoLocationResult.coord !== undefined){
                const autoWeatherResult = await ApiOneCall(autoLocationResult.coord.lon, autoLocationResult.coord.lat)
                setWeather(autoWeatherResult)
            }
        }
    }

    const searchWeather = async () => {
        const locationResult = await ApiWeather(searchLocation.current.value)
        setLocation(locationResult)

        if(locationResult.coord !== undefined){
            const weatherResult = await ApiOneCall(locationResult.coord.lon, locationResult.coord.lat)
            setWeather(weatherResult)
        }
    }

    let weatherData
    if(canShowWeather){
        weatherData = (
            <CurrentWeather location = {location} weather = {weather} />
        )
    }
    
    return (
        <>
            <label>Search city</label><br/>
            <input type="text" ref={searchLocation} onKeyUp={autoSearchWeather}/>
            <button onClick={searchWeather}>Force Search</button>
            {weatherData}
        </>
    )
}