import React from 'react'

const About = () => {
  return (
    <div name="about" className=" bg-gradient-to-b 
    from-gray-800 to-black text-white  h-screen w-full">

        <div className="max-w-screen-lg p-4 mx-auto  flex  flex-col justify-center w-full 
         h-full">

             <div className="pb-8">
                  <p className="text-4xl font-bold inline  border-b-4
                  border-gray-500  pt-8">About</p>
             </div>

             <p className="text-xl md:mt-5 sm:mt-8">
                 Welcome to my digital domain! I'm Tushar Sharma, a Full Stack Web Developer deeply passionate about Node.js and React.js. Crafting seamless and captivating web experiences is my forte. Dive into my portfolio, where code meets creativity to shape the future of the web. Let's build something extraordinary together!
             </p>

             <br/>

             <p className="text-xl">
                Mastery of the fundamentals is my forte, serving as the bedrock for my work in web development. With a solid understanding of core principles, I ensure that every line of code I write is not just functional but embodies efficiency and clarity. This commitment to strong fundamentals allows me to build resilient and scalable solutions, providing a reliable framework for creating exceptional web experiences.
                 
             </p>


        </div>

    </div>
  )
}

export default About
