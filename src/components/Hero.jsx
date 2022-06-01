import React from 'react'
import { TbPlayerTrackNext } from 'react-icons/tb'
import Selfie from '../assets/selfie.jpg'

const Hero = () => {
    return (
        <div name='hero' className='w-full h-screen bg-black'>

            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#808080] font-mono font-bold'>
                    Hi, my name is
                </p>
                <h1 className='text-4xl sm:text-7xl font-mono text-[#9b9ca2]'>
                    Julieta McPherson
                </h1>
                <h2 className='text-4xl sm:text-7xl font-mono text-[#52555f]'>
                    Thank you for checking out my portfolio.
                </h2>
                <img class='hidden lg:flex fixed flex-col top-[25%] right-0' src={Selfie} alt='selfie' style={{width: '200px'}}></img>
                <p className='text-[#9b9ca2] font-mono py-4 max-w-[700px]'>
                    I am a middle school teacher looking to gain experience
                    in the field of web development. I have just completed a
                    course on Full Stack Web Development through Trilogy &
                    Vanderbilt University.
                </p>
                <div>
                    <button className=
                        'text-[#9b9ca2] font-mono font-semibold border-2 px-6 py-3 my-2 flex items-center hover:bg-[#52555f] hover:border-none'>My Work
                        <span className='hover:rotate-90 duration-300'>
                            <TbPlayerTrackNext className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Hero