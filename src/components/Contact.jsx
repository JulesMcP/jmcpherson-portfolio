import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-black font-mono flex justify-center items-center p-4'>
            <form method='POST' action='https://getform.io/f/89fc62be-d51d-4804-aacf-1bcecc499b47' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-semibold inline border-b-4 border-gray-500 text-gray-300'>Contact</p>
                    <p> Submit the form below or send me an email at rogue427@yahoo.com</p>
                </div>
                <input className='bg-slate-50 p-2' type='text' placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-slate-50' type='email' placeholder='Email' name='email' />
                <textarea className='bg-slate-50 p-2' name='message' rows='10' placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-[#808080] hover:border-[#808080] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact

