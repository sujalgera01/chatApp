import { useContext, useState } from 'react'
import './App.css'
import Register from './Register'
import axios from "axios"
import Routes from './Routes'
import { UserContext, UserContextProvider } from './UserContext'

function App() {

  axios.defaults.baseURL = 'http://localhost:4040'
  axios.defaults.withCredentials = true;
  const { username } = useContext(UserContext);
  console.log(username);
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
      
  )
}

export default App
