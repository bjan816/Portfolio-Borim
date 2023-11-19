import React from 'react'
import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const ContactSection = () => {
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
            <div>
                <h5 className='text-xl font-bold text-white my-2'>
                    Contact
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    If you would like to contact me, please fill out the form below.
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
                <form>

                </form>
            </div>
        </section>
    )
}

export default ContactSection