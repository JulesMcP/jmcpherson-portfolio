import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen font-mono  bg-black text-[#A9A8A8]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#808080] '>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'> 
                        <div className='sm:text-center text-4xl text-[#A9A8A8] font-mono font-semibold'>
                            <p>Welcome and nice to meet you!</p>
                        </div>
                        <div>
                            <p>I am invested in learning more about this career and how this
                            knowledge can benefit others. I am detail oriented and enjoy solving problems.
                            I'd love the opportunity to put my skills to work for you!
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default About