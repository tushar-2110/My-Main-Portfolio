import React from 'react'
import weatherApp from "../assets/portfolio/weatherApp.png"
import memoriesApp from "../assets/portfolio/memoriesApp.png"
import instagramclone from "../assets/portfolio/instagramClone.png"
import chatapp from "../assets/portfolio/chatApplication.png"
import amazonclone from "../assets/portfolio/amazonClone.png"
import youtubeclone from "../assets/portfolio/youtubeClone.png"


const Portfolio = () => {
  
  
  const portfolios=[
   
    
    
              // {
              //   id:1,
              //   src:instagramclone,
              //   name:"Insatgram Clone",
              //   code:"https://github.com/tushar-2110/Instagam-Clone",
              //   demo:"https://instagam-clone-e6jj6e398-tushar-2110.vercel.app/signin"
              // },
              
              {
                id:1,
                src:chatapp,
                name:"Chat Application",
                code:"https://github.com/tushar-2110/Chat-App",
                demo:"https://chat-app-seven-chi.vercel.app/login"

              },

              // {
              //   id:3,
              //   src:amazonclone,
              //   name:"Amazon Clone",
              //   code:"https://github.com/tushar-2110/Amazon-Clone",
              //   demo:"https://amazon-clone-mu-self.vercel.app"

              // },

              
              // {
              //   id:4,
              //   src:memoriesApp,
              //   name:"Memories App",
              //   code:"https://github.com/tushar-2110/Memories-App",
              //   demo:"https://memories-app-sigma.vercel.app"
              // },
              
              {
                id:2,
                src:youtubeclone,
                name:"Youtube Clone",
                code:"https://github.com/tushar-2110/Youtube-Clone",
                demo:"https://youtube-clone-chi-roan.vercel.app"

              },

               
    // {
    //   id:6,
    //   src:moviesApp,
    //   name:"Movies App",
    //   code:"https://github.com/tushar-2110/Movie-App",
    //   demo:"https://movie-app-zeta-two.vercel.app"
    // },


     {
      id:3,
      src:weatherApp,
      name:"Weather App",
      code:"https://github.com/tushar-2110/react.js-weatherapp",
      demo:"https://react-js-weatherapp.vercel.app"
    },
   


     
    // {
    //   id:8,
    //   src:javascriptClock,
    //   name:"Javascript Clock",
    //   code:"https://github.com/tushar-2110/javascript_clock",
    //   demo:"https://javascript-clock-three.vercel.app"
    // },




    // {
    //   id:9,
    //   src:responsiveNavbar,
    //   name:"Responsive Navbar",
    //   code:"https://github.com/tushar-2110/Resposnsive-Navbar",
    //   demo:"https://resposnsive-navbar.vercel.app"
    // },
            
             
            ]


  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800
    w-full text-white md:h-screen ">

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
                   portfolios.map(({id,src,name,code,demo})=>(

                 <div  key={id}className="shadow-md shadow-gray-600 rounded-lg ">
                <img src={src} alt="my project" className="rounded-md duration-200
                hover:scale-105"  />
          
                  <p className=" px-5  mt-1 font-bold">{name}</p>


                <div className="flex items-center justify-center   ">
                 <button className="w-1/2 px-6 py-1 m-4 duration-200
                 hover:scale-105">
                  <a href={demo} target="_blank" >Demo</a>
                 </button>
                 <button className="w-1/2 px-6 py-1 m-4 duration-200 
                 hover:scale-105">
                  <a href={code} target="_blank" >Code</a>
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
