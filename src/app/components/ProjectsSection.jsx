'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from "framer-motion"

const projectsData = [
    {
        id: 1,
        title: 'Ako Maori Website',
        description: 'Plain html/css/js website.',
        image: '/images/projects/2.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 2,
        title: 'Carbon Footprint Website',
        description: 'responsive single-page website.',
        image: '/images/projects/3.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 3,
        title: 'ThinkSpatial Game',
        description: 'A game to test and enhance the user\'s spatial skills. Made with Godot engine and C#.',
        image: '/images/projects/4.png',
        tag: ['All', 'Game'],
        gitUrl: '/',
        previewUrl: '/'
    }
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTabChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id='work' className='lg:py-16'>
            <h2 className='text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mt-4 mb-6'>
                Work
            </h2>
            <h3 className='text-[#ADB7BE] text-center text-base lg:text-lg'>
                Here is a small collection of some of my recent work.
                I am constantly working on new projects, where I will update this section accordingly.
            </h3>
            <div className='text-gray-200 flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag
                    onClick={handleTabChange}
                    name="All"
                    isSelected={tag === 'All'} />
                <ProjectTag
                    onClick={handleTabChange}
                    name="Web"
                    isSelected={tag === 'Web'} />
                <ProjectTag
                    onClick={handleTabChange}
                    name="Game"
                    isSelected={tag === 'Game'} />
            </div>
            <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial='initial'
                        animate={isInView ? 'animate' : 'initial'}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            imgUrl={project.image}
                            title={project.title}
                            description={project.description}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectsSection