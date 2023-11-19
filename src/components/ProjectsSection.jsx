import React from 'react'
import ProjectCard from './ProjectCard'

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
    return (
        <div>
            <h2>
                My Projects
            </h2>
            <div>
                {projectsData.map((project) => (
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
        </div>
    )
}

export default ProjectsSection