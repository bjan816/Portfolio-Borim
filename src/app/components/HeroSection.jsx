"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link as ScrollLink } from 'react-scroll'
// import Link from "next/link"
import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <section id='home' className='md:h-screen'> {/* lg:py-16 */}
            <div className='grid grid-cols-1 sm:grid-cols-12 h-full'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
                    <h1 className='text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-normal font-extrabold mb-2 lg:mb-0'>
                        Borim Jang
                    </h1>
                    <div className='text-gray-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 lg:mb-5'>
                        {/*<span>I am a&nbsp;</span>*/}
                        <TypeAnimation
                            sequence={[
                                'Web Developer.',
                                1000,
                                'Software Developer.',
                                1000,
                                'Full Stack Developer.',
                                1000,
                                'UI/UX Designer.',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className='text-transparent bg-clip-text bg-gradient-to-r from-[#42A6E3] to-[#FF56F6] hover:from-[#FF56F6] hover:to-[#42A6E3]'
                        />
                    </div>
                    <h2 className='text-[#ADB7BE] text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2'>
                        Computer Science Major
                    </h2>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-4 lg:mb-8 font-medium'>
                        Always on a mission to learn and develop technically and personally.
                        <br>
                        </br>
                        Passionate about making a positive difference to the world through technology.
                    </p>
                    <div>
                        <ScrollLink
                            to="work"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-30}
                        >
                            <button className="btn group rounded-full font-medium text-gray-100 px-6 py-3 my-2 flex items-center justify-center w-full sm:w-fit">
                                {/* group text-gray-200 border-2 border-gray-300 px-6 py-3 my-2 flex items-center justify-center w-full sm:w-fit hover:bg-purple-400 hover:border-purple-400 */}
                                View Work
                                <span className="group-hover:rotate-90 duration-300">
                                    <HiArrowNarrowRight className="ml-3" />
                                </span>
                            </button>
                        </ScrollLink>
                        {/*
                        <Link
                            href="#contact"
                            className="inline-block px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-gray-200"
                        >
                            Hire Me
                        </Link>
                        <Link
                            href="/"
                            className="inline-block px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-gray-200 mt-3"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </Link>
                        */}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-4 place-self-center mt-6 sm:mt-0'>
                    <div className='w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]'>
                        <Image src='/images/purple-cloud.png' width={400} height={400} alt='Aesthetic purple cloud image' />
                    </div>
                </motion.div>
            </div>
        </section>

    )
}

export default HeroSection