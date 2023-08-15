import React from "react";
import './Weather.css';
export default function Weather() {
    return (
        <div className="Weather">
             <form onSubmit={""}>
          <div className="row">
            <div className="col-9 ">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control search-input"
                autoFocus="on"
                onChange={""}
              />
            </div>
            <div className="col-3 ">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

         <h1>Lagos</h1>      
   <ul>
    <li>Tuesday 14:00</li>
    <li>Cloudy</li>
 </ul>  


 <div className="row mt-3">
    <div className="col-6">
      <div className="clearfix">
        <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Cloudy" 
           className="float-left"
        />
<div className="float-left">
<span className="temperature">27</span>
    <span className="unit">℃</span>
    </div>  
    </div>
    </div> 
    <div className = "col-6">
        <ul>
            <li> Precipitation: 71%</li>
            <li>Wind: 13 km/h</li>
        
        </ul>
    </div>
    </div>  
     </div>   
    )
}