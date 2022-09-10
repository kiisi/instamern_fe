import React, { useState} from 'react'
import './CreatePost.css';
import M from 'materialize-css'
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState('');


    const submitPost = () => {
        if(!title || !body || !image){
            return M.toast({ html: "All Field Are Mandatory", classes: "red darken-3" })
        }
        const formData = new FormData();
        formData.append("file", image)
        formData.append("upload_preset", "insta-app-clone")
        formData.append("cloud_name", "destinyfelixkiisi")

        fetch("https://api.cloudinary.com/v1_1/destinyfelixkiisi/image/upload", {
            method: "post",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                const imageUrl = data.url
                fetch("http://localhost:5000/createpost", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    },
                    body: JSON.stringify({
                        title: title,
                        body: body,
                        image: imageUrl
                    })
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.error) {
                            M.toast({ html: data.error, classes: "red darken-3" })
                        } else {
                            M.toast({ html: "Post created successfully!", classes: "green darken-3" })
                            navigate('/')
                        }
                    }).catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="card create-post-container">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text" placeholder="post title" />
            <input
                value={body}
                onChange={(e) => setBody(e.target.value)}
                type="text" placeholder="post content" />
            <div className="file-field input-field">
                <div className="btn blue darken-1">
                    <span>Upload Post Image</span>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <button onClick={() => submitPost()} className="waves-effect waves-light btn-large btn blue darken-1">SUBMIT</button>
        </div>
    )
}

export default CreatePost