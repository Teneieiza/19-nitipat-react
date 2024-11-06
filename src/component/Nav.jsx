import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='flex justify-end p-8 border-b-black border-2 '>
            <div className='flex justify-between p-3 w-60 text-2xl font-bold'>
                <Link to='/'>Home</Link>
                <Link to='/owner'>Owner</Link>
            </div>
        </div>
    )
}

export default Nav
