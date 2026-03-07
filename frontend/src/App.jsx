import Landing from './components/Landing.jsx'
import Login from './components/Login.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>

      {/* <Login /> */}
      <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/form' element={<Login/>}/>
      </Routes>

    </>
  )
}

export default App
