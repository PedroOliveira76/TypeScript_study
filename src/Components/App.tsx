import viteLogo from '/vite.svg'

import './App.css'

import DataMovie from './DataMovie'


function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>

      <DataMovie />
    </>
  )
}

export default App
