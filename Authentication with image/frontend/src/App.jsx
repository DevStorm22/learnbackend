import { Route, Routes } from 'react-router-dom'
import './App.css'
import LogInPage from './pages/logIn'
import SignUpPage from './pages/signUp'
import HomePage from './pages/home';

function App() {

  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
  )
}

export default App
