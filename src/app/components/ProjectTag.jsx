import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected 
    ? 'text-gray-200 border-purple-400' 
    : 'text-[#ADB7BE] border-slate-600 hover:border-gray-200 hover:text-gray-200';
    return (
        <button
            className={`${buttonStyles} rounded-full border-4 px-6 py-3 text-xl cursor-pointer`}
            onClick={() => onClick(name)}> {/*template literal*/}
            {name}
        </button>
    )
}

export default ProjectTag