import Landing from './components/Landing.jsx'
import Login from './components/Login.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import StudentDash from './components/StudentDash.jsx'

function App() {

  return (
    <>

      {/* <Login /> */}
      <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/form' element={<Login/>}/>
          <Route path='/dashboard' element={<StudentDash/>}/>
      </Routes>

    </>
  )
}

export default App
