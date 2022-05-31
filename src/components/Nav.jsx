import React from 'react'
//import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/mylogo2.png'

const Nav = () => {
    return (
        <div className='fixed w-full h-[200px] flex justify-between items-center px-4 bg-black text-gray-300'>
            <div>
                <img src={Logo} alt='my logo' style={{width: '200px'}} />
            </div>
        </div>
            
    )
}

export default Nav

