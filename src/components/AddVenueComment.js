import { useState } from 'react'
import axios from 'axios'


function AddVenueComment({ venue_id, token, handlePost }) {
    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
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
    return(
        <div>
            <form className='grid grid-cols-2 mt-4' onSubmit={handleSubmit}>
                <div>
                    <textarea className='mx-auto w-full m:px-6 lg:px-8 shadow-md rounded-r-md rounded-l-md border-2'
                    value={comment}
                    type='text'
                    placeholder='Spill Here'
                    onChange={(e) => setComment(e.target.value)}>
                    </textarea>
                </div>
                <div>
                    <button className='mx-8 items-center w-20 h-7  border border-transparent font-bebas-neue rounded-md shadow-sm text-center text-white text-md bg-brand-dark-blue hover:bg-brand-beau-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' type='submit'>SPILL</button>
                </div>
            </form>
        
        </div>
    )
}

export default AddVenueComment