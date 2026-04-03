import React, { useEffect, useState } from 'react'
import axios from "axios"

const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
           setPosts(res.data.posts)
        })
    },[])

  return (
    <div>
        <>
            <section className="feed-section">
                <h1>Feed</h1>

                {
                    posts.length>0 ?(
                        posts.map((post)=> (
                            <div key = {post._id} className='post-card'>
                                <img src={post.image} alt={post.caption} />
                                <p>{post.caption}</p>
                            </div>
                        ))
                    ): (
                        <h1>No Post Available</h1>
                    )
                }
            </section>
        </>
    </div>
  )
}

export default Feed