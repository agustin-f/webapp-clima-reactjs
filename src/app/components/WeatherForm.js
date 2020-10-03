import React from 'react';


const WeatherForm = props => {
    return(
        <div className="card card-body">
            <form onSubmit={props.getWeather}>
                <div className="form-group">
                    <input type="text" name="city" placeholder="Ingresa el nombre de la ciudad" className="form-control" autoFocus></input>
                </div>
                <div className="form-group">
                    <input type="text" name="country" placeholder="Ingresa el nombre del pais" className="form-control" autoFocus></input>
                </div>
                <button className="btn btn-success btn-block">OBETENER EL CLIMA</button>
            </form>
        </div>
    )
}

export default WeatherForm;