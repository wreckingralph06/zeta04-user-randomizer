import './Content.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [randomData, setRandomData] = useState<any[]>([]);
  const [randomTriggered, setRandomTriggered] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);

  const generateRandom = () => {
    setRandomTriggered(true);
  }

  useEffect(() => {
    let ignore = false;
    Axios.get('https://randomuser.me/api')
      .then(res => {
        if (!ignore) {
          setRandomData(res.data.results)
        }
      }).catch(err => console.log(err))
    return () => { ignore = true }
  }, []);

  useEffect(() => {
    if (randomData.length > 0) {
      setLoading(true)
    }
  }, [randomData]);

  useEffect(() => {
    if (randomTriggered) {
      Axios.get('https://randomuser.me/api')
        .then(res => {
          setRandomData(res.data.results)
        }).catch(err => console.log(err))
      setRandomTriggered(false);
    }
  }, [randomTriggered])

  return (
    <div className="content">
      {loading ?
        <div className="details">
          <div className="details-img-section">
            <img className="details-img" src={randomData[0].picture.large}></img>
          </div>
          <div className="details-text-section">
            <div className="detail-text">
              <h1>{randomData[0].name.first + ' ' + randomData[0].name.last}</h1>
            </div>
            <div className="detail-text">
              <img className="label-icon" src="/email-1-svgrepo-com.svg"></img>
              <div className="label-value">{randomData[0].email}</div>
            </div>
          </div>
          <button className="refresh-button" onClick={generateRandom}>
            <span style={{ color: "white" }}>Refresh</span>
          </button>
        </div>
        : <></>}
    </div>
  );
}

export default App;
