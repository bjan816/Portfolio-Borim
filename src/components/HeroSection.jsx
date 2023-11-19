"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>
                            Hi, I'm{''}
                        </span>
                        <div style={{ paddingTop: '5px' }}>
                            <TypeAnimation
                                sequence={[
                                    'Borim Jang',
                                    1000,
                                    'Software Developer',
                                    1000,
                                    'UI/UX Designer',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                //style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </div>
                    </h1>
                    <h2 className='text-[#ADB7BE] text-3xl sm:text-4xl mb-4 font-extrabold'>
                        Computer Science Major
                    </h2>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        Always on a mission to learn and develop technically and personally. Passionate about making a positive difference to the world through technology.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-slate-200 text-white'>View Work</button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-slate-800 text-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0 ml-5'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src='/images/4.png'
                            alt='Hero image'
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