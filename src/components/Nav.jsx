import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFileEarmarkPersonFill} from 'react-icons/bs'
import Logo from '../assets/mylogo2.png'

const Nav = () => {
    const[navbar, setNav] = useState(false)
    const handleClick = () => setNav(!navbar)

    return (
        <div className='font-mono fixed w-full h-[175px] flex justify-between items-center px-4 bg-black text-[#A9A8A8]'>
            <div>
                <img src={Logo} alt='my logo' style={{width: '175px'}} />
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul >
                
            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!navbar ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */} 
            <ul className={!navbar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
                        <a className='flex justify-between items-center w-full text-[#808080]'
                        href='/'>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-[#808080]'
                        href='/'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4d4e4d]'>
                        <a className='flex justify-between items-center w-full text-[#808080]'
                        href='/'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#dbd8d3]'>
                        <a className='flex justify-between items-center w-full text-[#808080]'
                        href='/'>
                            Resume <BsFileEarmarkPersonFill size={30} />
                        </a>
                    </li>
                    
                    

                </ul>
            </div>

        </div>
            
    )
}

export default Nav;


