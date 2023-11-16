import React from 'react'

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center'>
                    <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                        Hello, I'm Borim
                    </h1>
                    <p className='text-[#ADB7BE] text-lg lg:text-xl'>
                        Hello! I'm Borim, a passionate Computer Science major from Korea, currently on my final year at the University of Auckland in New Zealand. My journey through the realms of technology has equipped me with a robust foundation in programming, and a keen interest in developing solutions that bridge the gap between complex code and user-friendly experiences. As I navigate the final semester of my degree, I'm eager to translate my academic learnings into innovative projects that resonate with the pulse of the industry. Welcome to my portfolio – a digital tapestry of my skills, projects, and the continuous pursuit of technological excellence.
                    </p>
                </div>
                <div className='col-span-5'></div>
            </div>
        </section>

    )
}

export default HeroSection