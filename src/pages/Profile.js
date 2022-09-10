import React, {useEffect, useState} from 'react'
import './Profile.css';

const Profile = () => {

  const [myposts, setMyposts] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/myposts", {
      method: "get",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setMyposts(data.posts)
      }).catch(err => console.log(err))
  }, [])

  return (
    <div className="main-container">
      <div className="profile-container">
        <div>
          <img alt="img"style={{width:"165px", height:"165px",borderRadius:"83px"}} src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"/>
        </div>
        <div className="details-section">
          <h4>John Doe</h4>
          <div className="followings">
            <h6>19 posts</h6>
            <h6>56 followers</h6>
            <h6>22 following</h6>
          </div>
        </div>
      </div>
      <div className="posts">
        {
          myposts.map(mypost => <img key={mypost._id} alt={mypost.title} className="post" src={mypost.image}/> )
        }
      </div>
    </div>
  )
}

export default Profile