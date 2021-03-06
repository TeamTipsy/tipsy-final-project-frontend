import { useState } from 'react'
import axios from 'axios'




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
            handleCheckIn(data.data)
            
           setCheckInNew('')
        })
    }
    return(
        
        <button onClick={(e) => handleSubmit(e)} className='bg-brand-dark-blue border-black text-white rounded-md p-2 mt-3 font-bebas-neue'>Check-In</button>

        
    )
}




export default CheckInVenue