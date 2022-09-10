import React, { useEffect, createContext, useReducer, useContext } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import { initialState, reducer } from './reducers/userReducer';

export const UserContext = createContext();

const CustomRouting = () => {

  const navigate = useNavigate();
  const {state, dispatch} = useContext(UserContext)
  useEffect(()=>{
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    if(userInfo){
      dispatch({type:"USER", payload:userInfo})
      navigate('/')
    }else{
      navigate('/login')
    }
  },[])

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/create-post" element={<CreatePost />} />
    </Routes>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{state:state, dispatch:dispatch}}>
      <Router>
        <Navbar />
        <CustomRouting />
      </Router>
    </UserContext.Provider>
  )
}

export default App;
