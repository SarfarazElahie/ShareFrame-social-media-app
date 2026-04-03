import React from 'react'

const CreatePost = () => {
  return (
    <div>
        <>

            <section className="create-post-section">
                <h1>Create Post</h1>

                <form>
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