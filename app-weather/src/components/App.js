import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Result from './Result'

const klucz = 'ccfc71c7ed605ad7b8d571a90b110b63'

class App extends Component{

  state = {
    value: '',
    dzien: '',
    miasto: '',
    wschod: '',
    zachod: '',
    temperatura: '',
    wiatr: '',
    cisnienie: '',
    errory: '',
    strefa: '',
    godzina: '',
    dzien1: '',
    temperaturaodcz: '',
    wilgotnosc: '',
    pogoda: '',
    pogodaikona: '',
    kraj: '',
  }

  inputChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  cityChange = e => {
    e.preventDefault()
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${klucz}&units=metric`;
    fetch(API)  
    .then(odpowiedz => {
      if(odpowiedz.ok){
        return odpowiedz 
      }
      throw Error("-")
    })
  
    .then(odpowiedz => odpowiedz.json())

    .then(dzien => {
      const czas = new Date().toLocaleString();
      const czasik = new Date().toLocaleString();
      this.setState(state =>({
        errory: false,
        strefa: dzien.timezone,
        dzien: czas,
        dzien1: dzien.dt,
        godzina: czasik,
        wschod: dzien.sys.sunrise,
        zachod: dzien.sys.sunset,
        temperatura: dzien.main.temp,
        temperaturaodcz: dzien.main.feels_like,
        wilgotnosc: dzien.main.humidity,
        wiatr: dzien.wind.speed,
        cisnienie: dzien.main.pressure,
        miasto: state.value,
        pogoda: dzien.weather.description,
        pogodaikona: dzien.weather.icon,
        kraj: dzien.sys.country,
      }))
    }) 

    .catch(errory => {
      console.log(errory);
      this.setState(state =>{
        return {
        errory: true,
        miasto: state.value
      }})
    })
  }

  render() {
    return (
    <div className="App">
    <Form value={this.state.value} inchange={this.inputChange} submit={this.cityChange}/>
    <Result pogoda={this.state}/>
    </div>
    );
  }
}

export default App;
