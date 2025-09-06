import { Route, Routes } from 'react-router-dom'
import './App.css'
import LogInPage from './pages/logIn'
import SignUpPage from './pages/signUp'
import HomePage from './pages/home';
import { UserContext } from './context/user.context';
import { useContext } from 'react';

function App() {

  const {userData, setuserData} = useContext(UserContext)

  return (
      <Routes>
        <Route path='/' element={userData ? <HomePage /> : <LogInPage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
  )
}

export default App
