import Landing from './page/Landing.jsx'
import Login from './page/Login.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import StudentDash from './page/StudentDash.jsx'

function App() {

  return (
    <>

      {/* <Login /> */}
      <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/form' element={<Login/>}/>
          <Route path='/student' element={<StudentDash/>}/>
      </Routes>

    </>
  )
}

export default App
