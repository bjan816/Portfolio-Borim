'use client'
import React, { useState } from 'react'
import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const ContactSection = () => {
    const [messageSubmitted, setMessageSubmitted] = useState(false);

    const handleSubmit = () => {
        console.log('Message sent.')
        setMessageSubmitted(true);
    };

    return (
        <section
            id='contact'
            className='grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4'
        >
            <div>
                <h5 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-4'>
                    Contact
                </h5>
                <p className='text-[#ADB7BE] text-base lg:text-lg mb-4 max-w-md'>
                    If you would like to contact me, please fill out the form.
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href='https://github.com/bjan816' className='hover:scale-110 duration-300'>
                        <Image src={GithubIcon} alt='Github Icon' />
                    </Link>
                    <Link href='https://github.com/bjan816' className='hover:scale-110 duration-300'>
                        <Image src={LinkedinIcon} alt='Linkedin Icon' />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col' action="https://getform.io/f/30307525-5c5d-47d2-b7da-8db1fbdf1cc8" method="POST" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor='name' className='text-gray-200 block mb-2 text-sm sm:text-base font-medium'>
                            Name
                        </label>
                        <input
                            id='name'
                            type='text'
                            name='name'
                            required
                            placeholder='Your Name'
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor='email' className='text-gray-200 block mb-2 text-sm sm:text-base font-medium'>
                            Email
                        </label>
                        <input
                            id='email'
                            type='email'
                            name='email'
                            required
                            placeholder='example@domain.com'
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor='message' className='text-gray-200 block mb-2 text-sm sm:text-base font-medium'>
                            Message
                        </label>
                        <textarea
                            id='message'
                            name='message'
                            required
                            placeholder='Please enter your message here...'
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        />
                    </div>
                    <button
                        type='submit'
                        className='bg-purple-500 hover:bg-purple-400 text-gray-200 font-medium py-2.5 px-5 rounded-lg w-full'>
                        Send Message
                    </button>
                    {
                        messageSubmitted ? (
                            <p className="text-purple-500 text-sm mt-4 text-center">
                                Message sent successfully!
                            </p>
                        ) : (null)
                    }
                </form>
            </div>
        </section>
    )
}

export default ContactSection