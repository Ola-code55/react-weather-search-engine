import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast (props) {
      function handleResponse(response) {
    console.log(response.data);
  }
console.log(props);
  let apiKey = "f3009e4852fa0a079dab291dabf020c4";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
    return  (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <WeatherIcon code="01d" size={34} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">31°</span>
            <span className="WeatherForecast-temperature-min">24°</span>
          </div>
        </div>
      </div>
    </div>
  );
   
    }
