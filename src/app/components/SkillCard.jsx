import React from 'react'
import Image from 'next/image'

const SkillCard = ({ description, src, alt }) => {
    return (
        <div>

            <div className="bg-[#181818] rounded-lg shadow-md shadow-[#040816] hover:scale-110 duration-500">
                <div className="flex justify-center items-center pt-5 h-[150px]">
                    <Image
                        src={src}
                        alt={alt}
                        width={100}
                        height={100}
                    />
                </div>
                <p className="my-4 text-[#ADB7BE] font-medium pb-5">{ description }</p>
            </div>

        </div>
    )
}

export default SkillCard