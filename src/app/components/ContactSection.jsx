import React from 'react'
import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const ContactSection = () => {
    return (
        <section
            id='contact'
            className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'
        >
            <div>
                <h5 className='text-xl font-bold text-white my-2'>
                    Contact
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    If you would like to contact me, please fill out the form.
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href='https://github.com/bjan816'>
                        <Image src={GithubIcon} alt='Github Icon' />
                    </Link>
                    <Link href='https://github.com/bjan816'>
                        <Image src={LinkedinIcon} alt='Linkedin Icon' />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col' action="https://getform.io/f/30307525-5c5d-47d2-b7da-8db1fbdf1cc8" method="POST">
                    <div className="mb-6">
                        <label htmlFor='name' className='text-white block mb-2 text-sm font-medium'>
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
                        <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>
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
                        <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>
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
                        className='bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 duration-500 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ContactSection