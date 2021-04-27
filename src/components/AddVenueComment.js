import { useState } from 'react'
import axios from 'axios'


function AddVenueComment({ venue_id, token, handlePost }) {
    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
        // console.log('venue id', venue_id)
        console.log('comment in handleSubmit', comment)
        e.preventDefault()
        axios
        .post(`https://tipsy-backend.herokuapp.com/posts/`,
        {
            post_text: comment,
            posted_to_venue: venue_id
        },
        {
            headers: { Authorization: `Token ${token}`},
        }
    ).then((data) => {
            handlePost(data.data)
        setComment('')

        })
    }
   console.log('comment', comment)
   console.log('token', token)
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <textarea className='mx-auto max-w-auto sm:px-6 lg:px-8 shadow-md rounded-r-md rounded-l-md'
                    value={comment}
                    type='text'
                    placeholder='Spill Here'
                    onChange={(e) => setComment(e.target.value)}>
                    </textarea>
                </div>
                <div>
                    <button className='items-center w-20 p-3 border border-transparent rounded-full shadow-sm text-white bg-brand-dark-blue hover:bg-brand-beau-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-100 w-100' type='submit'>SPILL</button>
                </div>
            </form>
        
        </div>
    )
}

export default AddVenueComment