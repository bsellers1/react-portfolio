import React from "react";

const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen bg-slate-900 flex justify-center items-center p-4">
            <form method="POST" action="https://getform.io/f/1858d387-057b-49b7-a7bb-662355a33441" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#fde047] text-gray-300">Contact</p>
                    <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - bsellers3013@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:#fde047 hover:border-[#fde047] px-4 py-3 my-8 mx-auto flex items-center'>Thank you!</button>
            </form>
        </div>
    )
}

export default Contact