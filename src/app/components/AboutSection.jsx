'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { motion } from 'framer-motion'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>These are the technologies that I have worked with.</li>
                <li>React</li>
                <li>Node.js</li>
                <li>JavaScript</li>
                <li>C#</li>
                <li>C/C++</li>
                <li>Python</li>
                <li>Java</li>
                <li>R</li>
                <li>SQLite</li>
                <li>Godot</li>
                <li>Git</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Bachelor of Computer Science - The University of Auckland, New Zealand</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>Online Ambassador - UP Education, New Zealand</li>
            </ul>
        )
    }

]

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    // Update state without blocking the UI
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className='text-gray-200 sm:py-10 lg:py-20' id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16 xl:px-16'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    <Image src='/images/34.png' width={500} height={500} alt='About me image' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }} className='mt-4 md:mt-0 text-left flex flex-col'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-6'>
                        About Me
                    </h2>
                    <h3 className='text-purple-400 text-xl sm:text-2xl mb-2 lg:text-3xl font-extrabold'>
                        I&apos;m Borim, nice to meet you.
                    </h3>
                    <p className='text-base lg:text-lg text-[#ADB7BE]'>
                        I am in my final year of BSc Computer Science at The University of Auckland, New Zealand.
                        Currently, my interests lie in software development and security, with some data science on the side.
                        I&apos;m committed to learning as much as I can and developing high-quality, functional software.
                    </p>
                    {/*<div className='flex flex-row mt-8'>
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("experience")}
                            active={tab === "experience"}
                        >
                            {" "}
                            Experience{" "}
                        </TabButton>
                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>*/}
                </motion.div>
            </div>
        </section>
    )
}

export default AboutSection