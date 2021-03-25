import React, { useState, useRef, useEffect } from 'react';
import {CurrentWeather} from './CurrentWeather'
import {ForecastWeather} from './ForecastWeather'
import {NoData} from './NoData'
import {CityExist} from '../functions/CityExist'
import {ApiWeather} from '../functions/ApiWeather'
import {ApiOneCall} from '../functions/ApiOneCall'

export const Search = () => {

    const searchLocation = useRef()
    const[location, setLocation] = useState()
    const[weather, setWeather] = useState()

    const canShowWeather = weather !== undefined && location !== undefined && location.coord !== undefined
    const startCity = "Stockholm"

    const callApi = async () => {
        const locationResult = await ApiWeather(searchLocation.current.value)
        setLocation(locationResult)

        if(locationResult.coord !== undefined){
            const weatherResult = await ApiOneCall(locationResult.coord.lon, locationResult.coord.lat)
            setWeather(weatherResult)
        }
    }
    const autoSearchWeather = () => {
        if(CityExist(searchLocation.current.value)){
            callApi()
        }
    }
    const manualSearchWeather = () => {
        callApi()
    }
    const SetFirstPage = async () => {
        const locationResult = await ApiWeather(startCity)
        setLocation(locationResult)
    
        if(locationResult.coord !== undefined){
            const weatherResult = await ApiOneCall(locationResult.coord.lon, locationResult.coord.lat)
            setWeather(weatherResult)
        }
    }
    useEffect( () => {
        SetFirstPage()
    },[])

    let weatherData
    if(canShowWeather){
        weatherData = (
            <>
                <CurrentWeather location = {location} weather = {weather} />
                <ForecastWeather weather = {weather} />
            </>
        )
    }
    else{
        weatherData = (
            <>
                <NoData />
            </>
        )
    }
    
    return (
        <>
            <input type="text" ref={searchLocation} placeholder="Search city" onKeyUp={autoSearchWeather}/>
            <button onClick={manualSearchWeather}>Manual Search</button>
            {weatherData}
        </>
    )
}