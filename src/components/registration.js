
import React from 'react'
import { useState, useEffect } from 'react'


function registration() {

    return (
        <div>
            <p>Don't have an account yet? Register here!</p>
            <form>
                <div>
                    <label to='username'>Username:</label>
                    <input
                    type='text'
                    id='username'
                    />
                    <label to='first-name'>First Name:</label>
                    <input
                    type='text'
                    id='firstname'
                    />
                    <label to='last-name'>Last Name:</label>
                    <input
                    type='text'
                    id='lastname'
                    />
                    <label to='city'>City:</label>
                    <input
                    type='text'
                    id='city'
                    />
                    <label to='State'>State:</label>
                    <input
                    type='text'
                    id='state'
                    />

                </div>
                <button type='submit'>Creat Account</button>
            </form>
        </div>
    )
}

export default registration

