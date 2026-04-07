import React, { useEffect, useState } from 'react'
import axios from "axios"

const Feed = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(posts.length === 0)

    useEffect(()=>{
        axios.get("https://shareframe-social-media-app.onrender.com/posts")
        .then((res)=>{
           setPosts(res.data.posts)
        })
        .catch((err)=>{
        console.log(err)
        })
        .finally(()=>{
        setLoading(false)
        })
    },[])

  return (
    <div>
        <>
            <section className="feed-section">
                
                <h1>Feed</h1>

               {
                    loading ? (
                        <h1>Loading posts...</h1>
                    ) : posts.length > 0 ? (
                        posts.map((post)=>(
                            <div key={post._id} className='post-card'>
                                <h3>Posted by: {post.userId?.userName || "Unknown User"}</h3>
                                <small>{new Date(post.createdAt).toLocaleString()}</small>
                                <img src={post.image} alt={post.caption} />
                                <p>{post.caption}</p>
                            </div>
                        ))
                    ) : (
                        <h1>No Post Available</h1>
                    )
                }
            </section>
        </>
    </div>
  )
}

export default Feed