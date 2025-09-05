import { Route, Routes } from 'react-router-dom'
import './App.css'
import LogInPage from './pages/logIn'
import SignUpPage from './pages/signUp'

function App() {

  return (
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
  )
}

export default App
