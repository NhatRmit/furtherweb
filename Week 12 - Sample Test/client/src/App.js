import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const endPoint= 'http://localhost:4001'
  const [keyword, setKeyword] = useState('')
  const [data, setData] = useState([])

  function getStatistic(){
    fetch(endPoint + "/statistic?agg=" + keyword)
    .then(res => res.json())
    .then(data => {
      setData(data.StatisticAge)
    })
  }

  return (
    <div className="App">
      <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <button onClick={() => getStatistic()}>Get Result</button>
    </div>
  );
}

export default App;
