import { useState, useRef } from 'react'
import axios from 'axios'


function ImageUpload({ token }) {
    const [selectedFile, setSelectedFile] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
        .put(`https://tipsy-backend.herokuapp.com/users/`,
        {
            'Content-Type': {selectedFile}.type,
            'Content-Disposition': `attachment; filename=${selectedFile}`
        },
        {
            headers: { Authorization: `Token ${token}`},
        })
        .then((data) => {


        })
    }


    // const FileUploader = ({onFileSelect}) => {
    //     const fileInput = useRef(null) }


        return (
            <>
            <form>
            
            <input onChange={(e) => setSelectedFile(e.target.files[0])} value={selectedFile} type="file" className="border-brand-dark-blue w-auto" />
            <button onClick={(e) => handleSubmit()} className="bg-brand-red p-2 text-white">Upload</button>
            </form>


            </>
        )





}

export default ImageUpload