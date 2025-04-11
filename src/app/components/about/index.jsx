
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <>
    <div> 
<hr />
</div>
   <div className='flex justify-center space-x-23'> 
    
    <div> 
        <h2 className='text-[#123472] font-bold'>About </h2>
        <p> This is the my about Section This is the my about Section
        This is the my about Section
        <br/>
        This is the my about Section
        This is the my about SectionThis is the my about Section
        <br/>
        This is the my about SectionThis is the my about SectionThis is the my about Section
        <br/>
        This is the my about Section
        This is the my about Section
        This is the my about Section

        </p>
        </div> 

    <div > 
        <Image src="/image.jpg" width={320} height={320} alt=" About Image" className='border-x-lime-50'/>
    </div>
    </div>
    </>
  )
}

export default About