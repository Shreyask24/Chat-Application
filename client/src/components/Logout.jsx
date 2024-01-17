import React from 'react'

const Logout = () => {

    const handleClick = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <button className='logout-btn' onClick={handleClick}>Logout</button>
    )
}

export default Logout