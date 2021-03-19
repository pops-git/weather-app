import logo from './logo.svg';
import './App.css';
import GetWeatherData from './components/GetWeatherData.jsx';
import WeatherFetch from './components/WeatherFetch.jsx'

function App() {

  let currentCity = "Stockholm"
  let currentCountry = "Sweden"

  return (
    <div className="App">
      <h1>My weather app!</h1>
      <GetWeatherData city = {currentCity} country = {currentCountry}/>
    </div>
  );
}
//city = {currentCity} country = {currentCountry}
export default App;
