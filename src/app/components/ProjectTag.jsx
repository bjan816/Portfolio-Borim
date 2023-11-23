import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected 
    ? 'text-white border-purple-400' 
    : 'text-[#ADB7BE] border-slate-600 hover:border-white hover:text-white';
    return (
        <button
            className={`${buttonStyles} rounded-full border-4 px-6 py-3 text-xl cursor-pointer`}
            onClick={() => onClick(name)}> {/*template literal*/}
            {name}
        </button>
    )
}

export default ProjectTag