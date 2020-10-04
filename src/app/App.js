import React, { Component } from 'react';
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';
import {WEATHER_KEY} from './keys';

class App extends Component{

    /* declaro el estado de los datos de la API de mi aplicacion en un objeto */
    state={
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: '',
        city: '',
        counrty: '',
        error: null
    };

    /* creo un metodo para obtener los datos de la API*/
    getWeather = async e =>{
        e.preventDefault();
        const { city , country } = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;
        /*console.log(cityValue,countryValue);*/

        if(cityValue && countryValue){
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
            const response = await fetch(API_URL);
            const data =  await response.json();
            console.log(this.state);

            /* cambio el estado de los datos que obtengo de la consulta a la API*/
            this.setState({
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null
            },()=> console.log(this.state));
        }else{
            this.setState({error: 'Porfavor ingresa una ciudad y un pais'})
        }


        
    }

    render(){
        return(
            <div className="container p-4 mt-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <WeatherForm getWeather={this.getWeather}/>
                        <WeatherInfo {...this.state}/>
                    </div>
                </div>
            </div>  
        )
    }
}

export default App;