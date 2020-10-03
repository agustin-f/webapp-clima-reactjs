import React from 'react';


const WeatherInfo = props => {
    console.log(props);
    return(
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                <p>{props.error}</p>
                </div>
            }
            {
                props.temperature ?
                <div className="card card-body">
                <p>
                    Locacion: {props.city} , {props.country}
                </p>
                <p>
                    Temperatura: {props.temperature} °C
                </p>
                <p>
                    Humedad: {props.humidity}
                </p>
                <p>
                    Velocidad del viento: {props.wind_speed}
                </p>
                <p>
                    Descripción: {props.description}
                </p>
            </div>
            :
            <div className="card card-body">
                <p>No Request Yet</p>
            </div>
            }            
        </div>
    )
}

export default WeatherInfo;