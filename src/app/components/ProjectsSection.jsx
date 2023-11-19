'use client'
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: 'React Portfolio Website',
        description: 'Responsive portfolio website made using React.',
        image: '/images/projects/2.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 2,
        title: 'Ako Maori Website',
        description: 'Plain html/css/js website.',
        image: '/images/projects/2.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 3,
        title: 'Carbon Footprint Website',
        description: 'Single-page website.',
        image: '/images/projects/3.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 4,
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

    const handleTabChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

return (
    <section id='work'>
        <h2 className='text-center text-3xl sm:text-4xl font-bold text-white mt-4 mb-4'>
            Work
        </h2>
        <h3 className='text-[#ADB7BE] text-base md:text-xl mb-2 md:mb-4 font-semibold'>
            Here is a small collection of some of my recent work.
            I am constantly working on new projects, where I will update this section accordingly.
        </h3>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
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
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project) => (
                <ProjectCard
                    key={project.id}
                    imgUrl={project.image}
                    title={project.title}
                    description={project.description}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
            ))}
        </div>
    </section>
)
}

export default ProjectsSection