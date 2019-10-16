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
            .then(data => setCodewarsData(data))
            .catch(err => console.log(err));
      }
      fetchData()
    }, [API]);

    // I want to access codewarsData.ranks.overall.name but anything after ranks gives "Uncaught TypeError: Cannot read property 'overall' of undefined"
    console.log(codewarsData);
    
    // Looping over Object
    Object.keys(codewarsData).map(key => {
      return codewarsData[key];
    })
    
    // Still can't get 'codewarsData.ranks.overall'
    console.log(codewarsData.ranks);

      return (
      <div className="App">
        <section>
        <img className='image' src={profileImg} alt='Dan Lubbers'/>
          <div className='text-wrapper'>
            <span>
              <div className='rank-name-wrapper'>
                {/* This is where I want to use 'codewarsData.ranks.overall.name' */}
                <h2 className='kyu'>{}kyu</h2> 
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
