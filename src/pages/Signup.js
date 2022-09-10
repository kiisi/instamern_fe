import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import M from 'materialize-css'

const Signup = () => {

  const navigate = useNavigate()

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () =>{
    if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html: "Enter a valid email", classes:"red darken-3"})
      return
    }
    fetch("http://localhost:5000/register", {
      method: "post",
      headers:{
        "Content-Type":"application/json" 
      },
      body:JSON.stringify({
        fullName:fullName,
        email:email,
        password:password
      })
    })
    .then(response => response.json())
    .then(data =>{
      console.log(data)
      if(data.error){
        M.toast({html: data.error, classes:"red darken-3"})
      }else{
        M.toast({html: data.result, classes:"green darken-3"})
        navigate('/login')
      }
    }).catch(err=>console.log(err))
  }

  return (
    <div className="login-container">
      <div className="card login-card input-field">
        <h2>Instagram</h2>
        <input
        type="text"placeholder="Full Name"
        value={fullName} onChange={(e)=>setFullName(e.target.value)}
        />
        <input
        type="email"placeholder="Email"
        value={email} onChange={(e)=>setEmail(e.target.value)}
        />
        <input
        type="password"placeholder="Password"
        value={password} onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={()=>register()} className="waves-effect waves-light btn-large btn blue darken-1">SIGNUP</button>
        <h6>
          <Link to="/login">Already have an account ?</Link>
        </h6>
      </div>
    </div>
  )
}

export default Signup