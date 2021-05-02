import { useState } from 'react'
import axios from 'axios'

function UpdateUserStatus({ user_id, token, reRenderPosts }) {
    const [comment, setComment] = useState('')
    const [updateStatus, setUpdateStatus] = useState(false)
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

        
        <div>
            <button onClick={() => setUpdateStatus(!updateStatus)} style={updateStatus ? {display: 'none'} : { }} className="bg-brand-red hover:bg-brand-yellow text-white rounded-md font-bebas-neue p-2 mt-2">Update Status</button>
            <form onSubmit={handleSubmit} style={updateStatus ? {} : { display: 'none' }} className="mt-4 grid grid-cols-2">
                <div>
                    <textarea

                    className='mx-auto w-full sm:px-6 lg:px-8 shadow-md rounded-r-md rounded-l-md border-2 focus:outline-none focus:border-indigo-500 '

                    value={comment}
                    type='text'
                    placeholder='are you tipsy?'
                    onChange={(e) => setComment(e.target.value)}></textarea>
                </div>

                    <button className='mx-8 items-center w-20 h-7  border border-transparent rounded-md shadow-sm text-center text-white font-bebas-neue text-xs bg-brand-dark-blue hover:bg-brand-beau-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' type='submit'>Update!</button>

            </form>
        </div>
    )
}

export default UpdateUserStatus