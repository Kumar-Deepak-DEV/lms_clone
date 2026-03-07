import Landing from './components/Landing.jsx'
import Form from './components/Form.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>

      {/* <Login /> */}
      <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/form' element={<Form/>}/>
      </Routes>

    </>
  )
}

export default App
