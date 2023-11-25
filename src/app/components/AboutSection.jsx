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
        <section className='text-gray-200 sm:py-10 lg:py-20 md:h-screen' id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 xl:gap-16 xl:px-12 items-center py-8 sm:py-16 h-full'> {/* px-4 xl:px-16 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='flex justify-center items-center md:flex-none md:justify-start md:items-start'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src='/images/purple-workstation.png'
                            alt='Purple workstation image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }} className='mt-6 md:mt-0 text-left flex flex-col'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-4'>
                        About Me
                    </h2>
                    <h3 className='text-xl sm:text-2xl mb-2 lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#42A6E3] to-[#FF56F6] hover:from-[#FF56F6] hover:to-[#42A6E3]'>
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