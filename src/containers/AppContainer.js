import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch'
import CityNameResponse from '../components/CityNameResponse';
import CityName from '../components/CityName';

function AppContainer(props) {

    const [responseData, setResponseData] = useState('');

    const handleCityChange = async (cityName) => {
        //console.log(`--------- fetchData called zip:${zipValue}`)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&q=${cityName},nz`)
        const json = await res.json()
        //console.log(json);
        setResponseData(json);
    }

    const clearResponse = () => {
        setResponseData('');
    }

    return (
        <div>
            <div className="row mt-4">
                <div className="col-sm-4"></div>
                <CityName onCityChange={handleCityChange} clearResponse={clearResponse}/>
                <div className="col-sm-4"></div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-2"></div>
                <CityNameResponse responseData={responseData} clearResponse={clearResponse}/>
                <div className="col-sm-2"></div>
            </div>    
        </div>
    );
}
  
export default AppContainer
