
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
                    // value={username.username}
                    />
                </div>
                <button type='submit'>Creat Account</button>
            </form>
        </div>
    )
}

export default registration

