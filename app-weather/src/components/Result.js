import React from 'react';
import './Result.css';
const Result = props => {
    const {errory,miasto,kraj,wschod,zachod,wilgotnosc,temperaturaodcz,temperatura,wiatr,cisnienie,strefa,godzina,dzien1} = props.pogoda;
    let content = null;
    if(!errory && miasto){

        //zmienne na wypadek różnych jednostek/stref czasowych


        const dataStrefyLatem = new Date((dzien1 + strefa - 7200) * 1000).toLocaleString();
        const dataStrefyZima = new Date((dzien1 + strefa - 3600) * 1000).toLocaleString();
        //const wschodzimaFormat = new Date((wschod + strefa - 3600) * 1000).toLocaleTimeString();
        const wschodlatoFormat = new Date((wschod + strefa - 7200) * 1000).toLocaleTimeString();
        //const zachodzimaFormat = new Date((zachod + strefa - 3600) * 1000).toLocaleTimeString();
        const zachodlatoFormat = new Date((zachod + strefa - 7200) * 1000).toLocaleTimeString();
        const wschodFormat = new Date(wschod * 1000).toLocaleTimeString();
        const zachodFormat = new Date(zachod * 1000).toLocaleTimeString();
        const wiatrkmh = (wiatr * 3.6).toLocaleString();
        const temperaturafahr = (temperatura*1.8+32).toLocaleString();
        const temperaturaodczfahr = (temperaturaodcz*1.8+32).toLocaleString();
        
        content = (
            <div><h1>
                {`Wyszukiwanie dla:`} 
                </h1><h6>
                {`${miasto} (${kraj}) `}
                </h6> <br/>
                <h3>
                {`Dane czasowe`}
                </h3>
                <h2>
                {`Data w Polsce:`} <h4>{`${godzina}`}</h4><br/>
                {`Data w strefie czasowej "${miasto}":`} <h4>{` ${dataStrefyLatem}`}<br/></h4>
                {`Wschod słońca "${miasto}" w strefie czasowej Polski:`} <h4>{` ${wschodFormat}`}<br/></h4>
                {`Wschód słońca w strefie czasowej "${miasto}":`} <h4>{` ${wschodlatoFormat}`}<br/></h4>
                {`Zachód słońca "${miasto}" w strefie czasowej Polski:`} <h4>{` ${zachodFormat}`}<br/></h4>
                {`Zachód słońca w strefie czasowej "${miasto}":`} <h4>{` ${zachodlatoFormat}`}<br/></h4>
                </h2><h3>
                {`Warunki atmosferyczne:`}
                </h3><h2>
                {`Wiatr w "${miasto}":`} <h4>{` ${wiatrkmh} km/h, ${wiatr} m/s`}<br/></h4>
                {`Cisnienie w "${miasto}":`} <h4>{` ${cisnienie} hPa`}<br/></h4>
                {`Wilgotność w "${miasto}":`} <h4>{` ${wilgotnosc} %`}<br/></h4>
                </h2><h3>
                {`Temperatura`}
                </h3><h2>
                {`Uśredniona temperatura w "${miasto}":`} <h4>{` ${temperatura} °C, ${temperaturafahr} F° `}<br/></h4>
                {`Odczuwalna temperatura w "${miasto}":`} <h4>{` ${temperaturaodcz} °C, ${temperaturaodczfahr} F° `}<br/></h4>
                </h2>
                </div>
                
            )
    }
    return (
        <div className="result">
            
            {errory ? `Nie ma w bazie ${miasto} ` : content}
            <br/><h5>{`Jarosław Wielgołaski INIS4_FD2`}<br/><br/><br/><br/><br/><br/><br/><br/></h5><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>

    );
}
export default Result
