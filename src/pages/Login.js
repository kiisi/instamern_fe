import React, {useState, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import M from 'materialize-css'
import {UserContext} from '../App'


const Login = () => {
  const {state, dispatch} = useContext(UserContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () =>{
    if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html: "Enter a valid email", classes:"red darken-3"})
      return
    }
    fetch("http://localhost:5000/login", {
      method: "post",
      headers:{
        "Content-Type":"application/json" 
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
    })
    .then(response => response.json())
    .then(data =>{
      if(data.error){
        M.toast({html: data.error, classes:"red darken-3"})
      }else{
        localStorage.setItem("token",data.token)
        localStorage.setItem("userInfo", JSON.stringify(data.userInfo))
        //dispatch  the action and state to the reducer
        dispatch({type:"USER", payload: data.userInfo})
        M.toast({html: "Login Successful", classes:"green darken-3"})
        navigate('/')
      }
    }).catch(err=>console.log(err))
  }

  return (
    <div className="login-container">
      <div className="card login-card input-field">
        <h2>Instagram</h2>
        <input
        type="email"placeholder="Email"
        value={email} onChange={(e)=>setEmail(e.target.value)}
        />
        <input
        type="password"placeholder="Password"
        value={password} onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={()=>login()} className="waves-effect waves-light btn-large btn blue darken-1">LOGIN</button>
        <h6>
          <Link to="/signup">Don't have an account ?</Link>
        </h6>
      </div>
    </div>
  )
}

export default Login