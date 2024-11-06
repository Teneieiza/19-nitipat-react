import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='flex justify-end p-8 border-b-2 border-black bg-[#9c89b8] text-[#ffffff]'>
            <div className='flex justify-between p-3 w-60 text-2xl font-bold'>
                <Link to='/' className='hover:underline'>Home</Link>
                <Link to='/owner' className='hover:underline'>Owner</Link>
            </div>
        </div>
    )
}

export default Nav
