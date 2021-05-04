import { useState } from 'react'
import axios from 'axios'

function AddUserComment({
user_id, token, reRenderPosts   
}) {
    const [comment, setComment] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        axios
        .post(`https://tipsy-backend.herokuapp.com/posts/`,
        {
            post_text: comment,
            posted_to_user: user_id
        },
        {
            headers: { Authorization: `Token ${token}`},
        })
        .then((data) => {
            reRenderPosts()
            setComment('')
        })
    }

    return(
        <div className="pb-20">
            <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-2">
                <div>
                    <textarea
                    className='mx-auto w-full sm:px-6 lg:px-8 shadow-md rounded-r-md rounded-l-md border-2 focus:outline-none focus:border-indigo-500 '
                    value={comment}
                    type='text'
                    placeholder='Spill Here'
                    onChange={(e) => setComment(e.target.value)}></textarea>
                </div>

                    <button onClick={(e) => handleSubmit(e)} className='mx-8 w-20 h-10 items-center bg-brand-dark-blue border-black text-white font-bebas-neue rounded-md mt-3 focus:outline-none focus:border-indigo-500' type='submit'>SPILL</button>

            </form>
        </div>
    )
}

export default AddUserComment