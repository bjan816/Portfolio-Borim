'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"
import SkillCard from './SkillCard'

const skillsData = [
    {
        id: 1,
        description: 'JAVA',
        src: '/images/java.png',
        alt: 'JAVA logo',
    },
    {
        id: 2,
        description: 'PYTHON',
        src: '/images/python.png',
        alt: 'PYTHON logo',
    },
    {
        id: 3,
        description: 'C#',
        src: '/images/csharp.png',
        alt: 'C# logo',
    },
    {
        id: 4,
        description: 'C/C++',
        src: '/images/cpp.png',
        alt: 'C++ logo',
    },
    {
        id: 5,
        description: 'REACT',
        src: '/images/react.png',
        alt: 'REACT logo',
        
    },
    {
        id: 6,
        description: 'NEXT',
        src: '/images/nextjs.png',
        alt: 'Next.js logo',
    },
    {
        id: 7,
        description: 'MySQL',
        src: '/images/mysql.png',
        alt: 'MySQL logo',
    },
    {
        id: 8,
        description: 'MongoDB',
        src: '/images/mongodb.png',
        alt: 'MongoDB logo',
    },
    {
        id: 9,
        description: 'SQLITE',
        src: '/images/sqlite.png',
        alt: 'SQLITE logo',
    },
    {
        id: 10,
        description: 'PostgreSQL',
        src: '/images/postgresql.png',
        alt: 'PostgreSQL logo',
    },
]

{/* 
    {
        id: 10,
        description: 'R',
        src: '/images/Rlang.png',
        alt: 'R image',
    },
    {
        id: 11,
        description: 'FLASK',
        src: '/images/flask.png',
        alt: 'FLASK image',
    },
    {
        id: 12,
        description: 'OpenGL',
        src: '/images/opengl.png',
        alt: 'OpenGL logo',
    },
*/}

const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="skills" className="text-gray-200 sm:py-10 lg:py-20">
                <h2 className='text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mt-4 mb-6'>
                    Skills
                </h2>
                <h3 className='text-[#ADB7BE] text-center text-base lg:text-lg'>
                These are the technologies that I have worked the most with.
                </h3>
                <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
                    <ul ref={ref} className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8">
                        {skillsData.map((skill, index) => (
                            <motion.li
                                key={index}
                                variants={cardVariants}
                                initial='initial'
                                animate={isInView ? 'animate' : 'initial'}
                                transition={{ duration: 0.3, delay: index * 0.3 }}
                            >
                                <SkillCard
                                    key={skill.id}
                                    description={skill.description}
                                    src={skill.src}
                                    alt={skill.alt}
                                />
                            </motion.li>
                        ))}
                    </ul>
                </div>
        </section>
    )
}

export default SkillsSection