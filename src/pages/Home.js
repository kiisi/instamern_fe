import React, { useState, useEffect } from 'react'
import './Home.css'

const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts", {
      method: "get",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
      .then(response => response.json())
      .then(data => {
        setPosts(data.posts)
      }).catch(err => console.log(err))
  }, [])

  return (
    <div className="home-container">
      {
        posts.map((post) => {
          return (
            <div className="card home-card"key={post._id}>
              <h5 style={{ padding: "10px" }}>{post.author.fullName}</h5>
              <div className="card-image">
                <img alt="img" src={post.image} />
              </div>
              <div className="card-content">
                <div className="material-icons" style={{ color: 'red' }}>favorite</div>
                <h6>{post.title}</h6>
                <p>{post.body}</p>
                <input type="text" placeholder="Enter comment" />
              </div>
            </div>
          )
        })
      }


    </div>
  )
}

export default Home