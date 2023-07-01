import React from 'react'
import javascriptClock from "../assets/portfolio/javascriptClock.png"
import responsiveNavbar from "../assets/portfolio/responsiveNavbar .png"
import weatherApp from "../assets/portfolio/weatherApp.png"
import moviesApp from "../assets/portfolio/reactMovie .png"
import memoriesApp from "../assets/portfolio/memoriesApp.png"


const Portfolio = () => {


    const portfolios=[

       {
          id:1,
          src:responsiveNavbar,
          name:"Responsive Navbar"
       },
    
             {
          id:2,
          src:javascriptClock,
          name:"Javascript Clock"
       },

              {
          id:3,
          src:weatherApp,
          name:"Weather App"
       },
       
         {
          id:4,
          src:moviesApp,
          name:"Movies App"
       },

              {
          id:5,
          src:memoriesApp,
          name:"Memories App"
       },


    ]


  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800
    w-full text-white md:h-screen">

           <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center 
           w-full h-full ">
               <div className="pb-8 ">
                <p className="text-4xl font-bold inline border-b-4
                 border-gray-500">
                  Portfolio
                  </p>
                <p className="py-6">Check out some of my work right here</p>
               </div>

              

               <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
               px-12 sm:px-0">

                 
                 
               {
                   portfolios.map(({id,src,name})=>(

                 <div  key={id}className="shadow-md shadow-gray-600 rounded-lg ">
                <img src={src} alt="my project" className="rounded-md duration-200
                hover:scale-105"  />
          
                  <p className=" px-5  mt-1 font-bold">{name}</p>


                <div className="flex items-center justify-center   ">
                 <button className="w-1/2 px-6 py-1 m-4 duration-200
                 hover:scale-105">Demo
                 </button>
                 <button className="w-1/2 px-6 py-1 m-4 duration-200 
                 hover:scale-105">
                  Code
                 </button>
                </div>
                 </div>

                   ))
               }
                
               </div>
           </div>

    </div>
  )
}

export default Portfolio
