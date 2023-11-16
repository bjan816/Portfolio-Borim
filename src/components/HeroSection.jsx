import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center'>
                    <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                        Hello, I'm Borim
                    </h1>
                    <p className='text-[#ADB7BE] text-lg mb-6 lg:text-xl'>
                        Hello! I'm Borim, a passionate Computer Science major from Korea, currently on my final year at the University of Auckland in New Zealand. My journey through the realms of technology has equipped me with a robust foundation in programming, and a keen interest in developing solutions that bridge the gap between complex code and user-friendly experiences. As I navigate the final semester of my degree, I'm eager to translate my academic learnings into innovative projects that resonate with the pulse of the industry. Welcome to my portfolio – a digital tapestry of my skills, projects, and the continuous pursuit of technological excellence.
                    </p>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0 ml-5'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src='/images/4.png'
                            alt='hero image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroSection