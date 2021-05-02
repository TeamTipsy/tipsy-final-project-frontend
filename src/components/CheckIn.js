import { useState } from 'react'
import axios from 'axios'
import {
    Link,
    useParams,
    } from 'react-router-dom';
import Moment from 'react-moment'





 function CheckInVenue({ token, venueId, handleCheckIn }) {
    const [checkInNew, setCheckInNew] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios
        .post(`https://tipsy-backend.herokuapp.com/checkins/`,
        {
            checkin_user_id: checkInNew,
            checkedin_venue: venueId
        },
        {
            headers: { Authorization: `Token ${token}`},
        }).then((data) => {
                console.log('check in', data)
            handleCheckIn(data.data)
            
           setCheckInNew('')
        })
    }
//    console.log('new checkin', checkInNew)
    return(
        <button onClick={(e) => handleSubmit(e)} className='bg-brand-beau-blue border-black text-white rounded-md p-2 mt-3 font-bebas-neue'>Check-In</button>
    )
}

export default CheckInVenue