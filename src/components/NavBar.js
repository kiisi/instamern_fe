import React, { useContext } from 'react'
import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../App';

const Navbar = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useContext(UserContext)

    const logout = () =>{
        localStorage.clear();
        dispatch({type:"LOGOUT"})
        navigate('/login');
    }
    const navList = () => {
        if (state) {
            return [
                <li key="createpost"><Link to={"/create-post"}>Create Post</Link></li>,
                <li key="profile"><Link to={"/profile"}>Profile</Link></li>,
                <li key="logout">
                    <button onClick={()=> logout()} className="waves-effect waves-light btn blue darken-1">Logout</button>
                </li>
            ]
        } else {
            return [
                <li key="login"><Link to={"/login"}>Login</Link></li>,
                <li key="signup"><Link to={"/signup"}>Signup</Link></li>
            ]
        }
    }

    return (
        <nav>
            <div className="nav-wrapper white">
                <Link to={state ? "/" : "/login"} className="brand-logo">Instagram</Link>
                <ul id="nav-mobile" className="right">
                    {navList()}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar