import React from 'react';

const GetWeatherData = async (props) => {
    const weatherApi = `api.openweathermap.org/data/2.5/weather?q=${props.city},${props.country}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
    
    return await fetch(weatherApi).then(response => {

                                        if(!response.ok){
                                            throw new Error("Något gick fel i anropet");
                                        }
                            
                                        return response.json();
                                    })
}

/*
const GetCountries= async () => {

    let url = 'https://restcountries.eu/rest/v2/all';

    return await fetch(url).then(response => {

            if(!response.ok)
            {
                throw new Error("Något gick fel i anropet");
            }

            return response.json();
    });
}
*/
export default GetWeatherData