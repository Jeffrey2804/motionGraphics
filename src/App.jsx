import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import banner_box1 from './assets/banner_box1.png'

import banner_box2 from './assets/banner_box2.png'

import banner_box3 from './assets/banner_box3.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='logos-container'>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}

        <img src={banner_box1} className='box1' />

      
        <img src={banner_box3} className='box3' />
        <img src={banner_box2} className='logo box2' />

      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
