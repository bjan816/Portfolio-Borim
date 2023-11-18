'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src='/images/13.jpeg' width={500} height={500} />
                <div>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        About Me
                    </h2>
                    <p className='text-base lg:text-lg'>
                        I am a full stack web developer with a passion for creating
                        interactive and responsive web applications. I have experience
                        working with JavaScript, React, SQLite, HTML, CSS, C/C++, C#, Java, Python and Git.
                        I am a quick learner and I am always looking to expand my knowledge and skill sets.
                        I am a team player and I am excited to work wih others to create amazing applications.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-pink-400'>
                            Skills
                        </span>
                        <span>Education</span>
                        <span>Experience</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection