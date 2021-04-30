import { useState } from 'react'
import axios from 'axios'

function AddUserComment({
user_id, token, handlePost   
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
            handlePost(data.data)
            setComment('')
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-2">
                <div>
                    <textarea
                    className='mx-auto w-full m:px-6 lg:px-8 shadow-md rounded-r-md rounded-l-md border-2 '
                    value={comment}
                    type='text'
                    placeholder='Spill Here'
                    onChange={(e) => setComment(e.target.value)}></textarea>
                </div>
                    <button className='mx-8 items-center w-20 h-7  border border-transparent rounded-md shadow-sm text-center text-white text-xs bg-brand-dark-blue hover:bg-brand-beau-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' type='submit'>SPILL</button>
            </form>
        </div>
    )
}

export default AddUserComment