import React from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

const CreatePost = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target)
        axios.post("https://shareframe-social-media-app.onrender.com/create-post", formData)
        .then((res)=>{
            console.log(res)
            navigate("/")
        })
    }
  return (
    <div>
        <>

            <section className="create-post-section">
                <h1>Create Post</h1>

                <form onSubmit={handleSubmit}>
                    <input type="text" name="userName" required placeholder="Your Username" />
                    <input type="file" name='image' accept='image/*' />
                    <input type="text" name='caption' required placeholder='Enter caption' />
                    <button type='submit'>Submit</button>
                </form>
            </section>

        </>
    </div>
  )
}

export default CreatePost