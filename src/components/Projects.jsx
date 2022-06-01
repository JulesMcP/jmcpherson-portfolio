import React from 'react'
import YodadJokes from '../assets/canihaz_yodad_jokes.png'
import FeedYourCamera from '../assets/feed-your-camera.png'
import Throwdown from '../assets/tacobellthrowdown.png'
import Notetaker from '../assets/Notetaker.png'
import PlanMyDays from '../assets/planner.png'
import BudgetApp from '../assets/budget_tool.png'

const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen text-[#808080] font-mono bg-black'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-semibold inline border-b-4 '>Projects</p>
                    <p className='py-6'>Feel free to peruse some of my recent projects.</p>
                </div>

                {/*card container*/}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/*grid item*/}
                    <div style={{backgroundImage: `url(${YodadJokes})`}}
                        className='shadow-lg shadow-white group container rounded-md flex justify-center items-center cont-div'>
                        
                        {/*hover effects*/}
                        <div className='opacity-0 group-hover:opacity-50'>
                            <span className='text-2xl font-semibold text-white tracking-wider'>
                                JavaScript Web API application
                            </span>
                            <div>
                                <a href='https://tenncreekbridges.github.io/API-Mash-Project/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/TennCreekBridges/API-Mash-Project'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg'>Code</button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                    {/*grid item*/}
                    <div style={{backgroundImage: `url(${FeedYourCamera})`}}
                        className='shadow-lg shadow-white group container rounded-md flex justify-center items-center cont-div'>
                        
                        {/*hover effects*/}
                        <div className='opacity-0 group-hover:opacity-50'>
                            <span className='text-2xl font-semibold text-white tracking-wider'>
                                Full Stack 'Food Blogging' application
                            </span>
                            <div>
                                <a href='https://feed-your-camera.herokuapp.com/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/adamvaughn/feed-the-camera'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg'>Code</button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                    {/*grid item*/}
                    <div style={{backgroundImage: `url(${Throwdown})`}}
                        className='shadow-lg shadow-white group container rounded-md flex justify-center items-center cont-div'>
                        
                        {/*hover effects*/}
                        <div className='opacity-0 group-hover:opacity-50'>
                            <span className='text-2xl font-semibold text-white tracking-wider'>
                                MERN Stack application
                            </span>
                            <div>
                                <a href='https://taco-bell-throwdownn.herokuapp.com//'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/joshlyons225/taco-bell-throwdown'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg'>Code</button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                    {/*grid item*/}
                    <div style={{backgroundImage: `url(${Notetaker})`}}
                        className='shadow-lg shadow-white group container rounded-md flex justify-center items-center cont-div'>
                        
                        {/*hover effects*/}
                        <div className='opacity-0 group-hover:opacity-50'>
                            <span className='text-2xl font-semibold text-white tracking-wider'>
                                Express.js application
                            </span>
                            <div>
                                <a href='https://intense-wildwood-82777.herokuapp.com/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/JulesMcP/11-cautious-robot'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg'>Code</button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                    {/*grid item*/}
                    <div style={{backgroundImage: `url(${PlanMyDays})`}}
                        className='shadow-lg shadow-white group container rounded-md flex justify-center items-center cont-div'>
                        
                        {/*hover effects*/}
                        <div className='opacity-0 group-hover:opacity-50'>
                            <span className='text-2xl font-semibold text-white tracking-wider'>
                                Third-Party API's application
                            </span>
                            <div>
                                <a href='https://julesmcp.github.io/Plan-My-Days/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/JulesMcP/Plan-My-Days'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg'>Code</button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                    {/*grid item*/}
                    <div style={{backgroundImage: `url(${BudgetApp})`}}
                        className='shadow-lg shadow-white group container rounded-md flex justify-center items-center cont-div'>
                        
                        {/*hover effects*/}
                        <div className='opacity-0 group-hover:opacity-50'>
                            <span className='text-2xl font-semibold text-white tracking-wider'>
                                Progressive Web Application
                            </span>
                            <div>
                                <a href='https://young-anchorage-51171.herokuapp.com/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/JulesMcP/19-PWA-Money-Manager'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-lg'>Code</button>
                                </a>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects
