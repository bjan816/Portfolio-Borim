'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from "framer-motion"

const projectsData = [
    {
        id: 1,
        title: 'ThinkSpatial',
        description: 'A 3D game developed with the Godot engine, designed to challenge and enhance spatial intelligence. Click \'Preview\' to watch the demo or visit the GitHub repository for the source code.',
        image: '/images/projects/ThinkSpatial.png',
        tag: ['All', 'Game'],
        gitUrl: 'https://github.com/bjan816/ThinkSpatial.git',
        previewUrl: 'https://youtu.be/dDRYtwLqyuI'
    },
    {
        id: 2,
        title: 'Etheria',
        description: 'A Web 3.0 blockchain DApp connecting to the Ethereum network, requiring the MetaMask browser extension. Click \'Preview\' to watch the demo or visit the GitHub repository for the source code.',
        image: '/images/projects/Etheria.PNG',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/bjan816/Etheria',
        previewUrl: 'https://youtu.be/dNfB-P-C-ZY'
    },
    {
        id: 3,
        title: 'Hopflix',
        description: 'A full-stack movie review website built with Java Spring Boot, React, and MongoDB. Users can explore movies and leave reviews. Click \'Preview\' to watch the demo or visit the GitHub repository for the source code.',
        image: '/images/projects/Hopflix.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/bjan816/Hopflix',
        previewUrl: 'https://youtu.be/6TqB1HCR04k'
    },
    /*
    {
        id: 3,
        title: 'Carbon Easy!',
        description: 'A single-page responsive website for calculating an individual\'s carbon footprint. Preview and GitHub repository are currently unavailable.',
        image: '/images/projects/CarbonEasy.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/bjan816',
        previewUrl: 'https://github.com/bjan816'
    },
    {
        id: 4,
        title: 'Ako Maori Website',
        description: 'Plain HTML/CSS/JS website. Preview currently unavailable.',
        image: '/images/projects/AkoMaori.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/bjan816/Etheria',
        previewUrl: 'https://etheria-borim.netlify.app/'
    }
    */
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
        <section id='work' className='sm:py-10 lg:py-20'>
                <h2 className='text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mt-4 mb-6'>
                    Work
                </h2>
                <h3 className='text-[#ADB7BE] text-center text-base lg:text-lg'>
                    Here is a small collection of some of my recent work.
                    <br></br>
                    I am constantly working on new projects, where I will update this section accordingly.
                </h3>
                <div className='text-gray-200 flex flex-row justify-center items-center gap-2 py-8'>
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