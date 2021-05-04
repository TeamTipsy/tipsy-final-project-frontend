import { useState } from 'react'
import axios from 'axios'

function EditUserInfo({ token, userId, setUser }) {
const [bio, setBio] = useState('')
const [city, setCity] = useState('')
const [state, setState] = useState('')
const [update, setUpdate] = useState(false)
const [error, setError] = useState('')


    const handlePatch = (event) => {
        event.preventDefault()
        axios
        .patch(`https://tipsy-backend.herokuapp.com/users/${userId}/`,
        {
            bio_text: bio,
            city: city,
            state: state
            
        },
        {
            headers: { Authorization: `Token ${token}`},
        })
        .then(res => {
            setUpdate(!update)
            reRenderUser()
        }).catch(err => {
            setError(err.message)
        })
        }

        const reRenderUser = () => {
            axios.get(
                `https://tipsy-backend.herokuapp.com/users/${userId}/`, 
                {
                    headers: { Authorization: `Token ${token}`}
                }).then((response) => {
                    setUser(response.data)

                
                }
            )
        }

    return(
        <div className="flex">
            
            <button onClick={() => setUpdate(!update)} style={update ? {display: 'none'} : { }} className="bg-brand-red hover:bg-brand-yellow text-white rounded-md font-bebas-neue p-2 mt-2">Update Details</button>
            <form  className="ml-2">
            <ul>
            <li className="mt-2">
            <label className="mr-2" style={update ? {} : {display: 'none'}}>City: </label>
            <input style={update ? {} : {display: 'none'}} value={city}
                    className="border-brand-red border-2 rounded-md"
                    type='text'
                    onChange={(e) => setCity(e.target.value)}/>
            </li>
            <li className="mt-2">
            <label className="mr-2" style={update ? {} : {display: 'none'}}>State:</label>
            <input style={update ? {} : {display: 'none'}} value={state}
                    className="border-brand-red border-2 rounded-md"
                    type='text'
                    onChange={(e) => setState(e.target.value)}/>
            </li>
            <li className="mt-2">
            <label className="mr-2" style={update ? {} : {display: 'none'}}>Bio:</label>
            <input style={update ? {} : {display: 'none'}} value={bio}
                    className="border-brand-red border-2 rounded-md"
                    type='text'
                    onChange={(e) => setBio(e.target.value)}/>
            </li>

       
            </ul>
            
            <button onClick={(event) => handlePatch(event)} style={update ? {} : {display: 'none'}} className="bg-brand-red hover:bg-brand-yellow text-white rounded-md font-bebas-neue p-2 m-2">
            save changes
            </button>
            <button onClick={() => setUpdate(!update)} style={update ? {} : {display: 'none'}} className="bg-brand-red hover:bg-brand-yellow text-white rounded-md font-bebas-neue p-2 m-2">cancel</button>
            {error ? (<div className="flex">Please enter your info or cancel.</div>
      ) : (<div></div>)}
            </form>
            
        </div>
    )
}

export default EditUserInfo