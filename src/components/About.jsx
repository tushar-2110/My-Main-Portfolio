import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b 
    from-gray-800 to-black text-white ">

        <div className="max-w-screen-lg p-4 mx-auto  flex  flex-col justify-center w-full 
         h-full">

             <div className="pb-8">
                  <p className="text-4xl font-bold inline  border-b-4
                  border-gray-500 ">About</p>
             </div>

             <p className="text-xl mt-20 ">
                  "Meet Tushar Sharma, a talented MERN stack developer who excels in full-stack development and 
                   possesses a remarkable aptitude for problem-solving using data structures and algorithms.
                  With a passion for building robust and efficient web applications, Tushar has honed his skills in the
                  MERN (MongoDB, Express.js, React.js, Node.js) stack, enabling him to develop end-to-end solutions that
                  deliver seamless user experiences. 
             </p>

             <br/>

             <p className="text-xl">
                 Tushar's solid foundation in data structures enables him to choose the most appropriate data structures
                  for different scenarios, allowing for efficient data manipulation and retrieval. His expertise
                   in algorithms empowers him to devise elegant solutions, reducing time complexity and improving 
                 overall system performance.
                 
             </p>


        </div>

    </div>
  )
}

export default About
