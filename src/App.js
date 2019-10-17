import React, { useState, useEffect } from 'react';
import './App.scss';
import profileImg from './assets/codewars-profile-image.jpeg';

const App = () => {
 
    const [codewarsData, setCodewarsData] = useState({});
    const API = `https://www.codewars.com/api/v1/users/danlubbers`;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    
    useEffect(() => {
      async function fetchData() {
        const res = await fetch(proxyurl + API)
            res.json()
            .then(res => setCodewarsData(res))
            .catch(err => console.log('ERROR: ', err));
      }
      fetchData()
    }, [API]);

    // I want to access codewarsData.ranks.overall.name but anything after ranks gives "Uncaught TypeError: Cannot read property 'overall' of undefined"
    console.log(codewarsData);
    
    // Looping over Object
    Object.keys(codewarsData).map(key => {
      return codewarsData[key];
    })
    
    // If statement solved the Uncaught TypeError listed on line 21
    // On page render codewarsData.ranks is an empty object, the if statement checks so that it will log data only after the data has rendered and is truthy
    if(codewarsData.ranks){
      console.log(codewarsData.ranks.overall.name)
    }

      return (
      <div className="App">
        <section>
        <img className='image' src={profileImg} alt='Dan Lubbers'/>
          <div className='text-wrapper'>
            <span>
              <div className='rank-name-wrapper'>
                {/* This is where I want to use 'codewarsData.ranks.overall.name' */}
                <h2 className='kyu'>{codewarsData.ranks && codewarsData.ranks.overall.name}</h2> 
                <h2>{codewarsData.username}</h2>
              </div>
              <h2 className='honor'>{codewarsData.honor}</h2>
            </span>
            <article>
              <h2>Name: {codewarsData.name}</h2>
              <h2>Clan: {codewarsData.clan}</h2>
            </article>
          </div>
        </section>
      </div>
    );
  }


export default App;
