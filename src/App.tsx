import { useState } from 'react'
import pandasLogo from './assets/pandas_logo.png'
import malLogo from './assets/mal.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://pandas.pydata.org" target="_blank">
          <img src={pandasLogo} className="logo pandas" alt="Pandas logo" />
        </a>
        <a href="https://myanimelist.net" target="_blank">
          <img src={malLogo} className="logo mal" alt="MyAnimeList logo" />
        </a>
      </div>
      <h1>Sentiment Analysis on MyAnimeList reviews using Pandas</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
