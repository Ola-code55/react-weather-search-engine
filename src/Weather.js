import React from "react";
import "./Weather.css";
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
                onChange={""}
              />
            </div>
            <div className="col-3 p-0">
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
        </div>
    )
}