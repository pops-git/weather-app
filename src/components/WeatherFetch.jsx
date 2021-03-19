import React,{useState, useEffect} from "react";

function WeatherFetch() {
    const key = process.env.REACT_APP_WEATHER_KEY;
    const [feels_like,setFeelsLike] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [description,setDescription] = useState('');
    const [main,setMain] = useState('');
    const [iconID,setIconID] = useState('');
    useEffect(()=> {
        fetch(
            `api.openweathermap.org/data/2.5/weather?q=stockholm,sweden&units=metric&APPID=85e3ffa74e282d4edd0bf14e00f48eab`
        )
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setFeelsLike(data.main.feels_like);
            setMainTemp(data.main.temp);
            setDescription(data.weather[0].description);
            setMain(data.weather[0].main);
            setIconID(data.weather[0].icon);
        })
    },[])
return (
    <React.Fragment>
        <h1>Main Tmperature: {mainTemp} Degrees Celsius</h1>
        <h1>Feels like: {feels_like} Degrees Celsius</h1>
        <h1>Weathjer parameter: {main}</h1>
        <h1>Description: {description}</h1>
        <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"} />
    </React.Fragment>
)
}
export default WeatherFetch;