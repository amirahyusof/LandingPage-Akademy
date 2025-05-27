import React from "react";
import actionImg from './Asset/action.jpg';


function Action(){
    return(
        <div className="text-white grid md:grid-cols-2 mb-8 py-2" id="action">
             <div className="w-full p-4 sm:w-[450px] md:w-[500px] lg:w-[650px] md:mt-48 lg:mt-72 mx-auto text-center justify-center py-2">
                <h1 className="md:text-5xl sm:text-3xl text-4xl text-[#7FC7D9] font-bold">
                    Transform your future with 
                    <span className="text-white"> Aka</span>
                    <span className="text-[#7FC7D9]">demy</span>
                </h1>
                <p className="font-bold p-2 text-base my-6">Empower yourself with the tools and knowledge you need to thrive in today's competitive job market.
                From public speaking mastery to effective time management, our comprehensive programs cover essential soft skills to help you stand out and succeed.
                </p>
                <h2 className="md:text-xl sm:text-lg text-md text-[#DCF2F1] mt-4 mb-8">Don't wait any longer - seize the opportunity to unlock your full potential with Akademy.</h2>
                <div className="flex gap-1.5 px-12">
                    <button className="bg-[#7FC7D9] w-[150px] rounded-md font-medium my-4 mx-auto py-2 text-white hover:shadow-lg hover:shadow-blue-200 transition delay-150 duration-300 ease-in-out hover:scale-105">
                      <a href="#plans">Register Now</a>
                    </button>
                    <button className="w-[180px] rounded-md shadow-lg shadow-sky-100/50 font-medium my-4 mx-auto py-2 text-white hover:shadow-lg hover:shadow-blue-200 transition delay-150 duration-300 ease-in-out hover:scale-105">
                      <a href="#service">Explore Programs</a>
                    </button>
                </div>
            </div>
            <div className="mx-auto items-center justify-center sm:mt-[15%] md:mt-48">
                <img src={actionImg} className="w-[400px] sm:w-[500px] md:w-[600px] rounded-xl" alt="" />
            </div>
        </div>
       
    )
}

export default Action;