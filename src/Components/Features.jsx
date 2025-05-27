import React from "react";
import learningImg from './Asset/features/interactive.png';
import progressImg from './Asset/features/progress.png';
import guideImg from './Asset/features/guidance.png';
import supportImg from './Asset/features/support.png';
import compImg from "./Asset/features/comprehensive.png";
import lifetimeImg from './Asset/features/lifetime.png';


function Features(){
    return(
        <div className="text-slate-100 mx-6" id="feature">
            <div className="sm:w-[650px] md:w-[850px] mt-[90px] mx-auto text-center justify-center py-2">
                <p className="text-[#7FC7D9] font-bold p-2 text-base">Features</p>
                <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold">
                Embark on a journey of growth with  <span className="text-white"> Aka</span><span className="text-[#7FC7D9]">demy</span>'s interactive learning platform
                </h1>
                <p className="md:text-xl sm:text-lg text-md text-white mb-12">At Akademy, we provide an enriching environment where you can immerse yourself in</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 text-white px-2 mx-auto justify-center">
                <div className="max-w-[200px] mx-auto">
                    <img src={learningImg} className="w-[150px] border-2 border-white p-2 rounded-full mx-auto" alt="" />
                    <div className="text-center my-2">
                    <h4 className="text-[#7FC7D9] my-2">Interactive Learning</h4>
                    <p className="text-sm">Engage in immersive learning experiences tailored to your needs.</p>
                    </div>
                </div>

                <div className="max-w-[200px] mx-auto">
                    <img src={progressImg} className="w-[150px] mx-auto border-2 border-white p-4 rounded-full" alt="" />
                    <div className="text-center my-2">
                    <h4 className="text-[#7FC7D9] mb-2">Progress Tracking</h4>
                    <p className="text-sm">Monitor your growth and track your achievements as you progress</p>
                    </div>
                </div>

                <div className="max-w-[200px] mx-auto">
                    <img src={guideImg} className="w-[150px] mx-auto border-2 border-white p-4 rounded-full" alt="" />
                    <div className="text-center my-2">
                        <h4 className="text-[#7FC7D9] mb-2">Expert Guidance</h4>
                        <p className="text-sm"> Learn from industry experts and seasoned professionals in each field</p>
                    </div>
                </div>

                <div className="max-w-[200px] mx-auto">
                    <img src={supportImg} className="w-[150px] mx-auto border-2 border-white p-4 rounded-full" alt="" />
                    <div className="text-center my-2">
                        <h4 className="text-[#7FC7D9] mb-2">Community Support</h4>
                        <p className="text-sm">Connect with a vibrant community of learners for peer support and networking.</p>  
                    </div>
                </div>

                <div className="max-w-[200px] mx-auto">
                    <img src={compImg} className=" w-[150px] mx-auto border-2 border-white p-4 rounded-full" alt="" />
                    <div className="text-center my-2">
                        <h4 className="text-[#7FC7D9] mb-2">Comprehensive Curriculum</h4>
                        <p className="text-sm">Gain practical, in-demand skills for professional success which tailored to real-world needs</p>  
                    </div>
                </div>

                <div className="max-w-[200px] mx-auto">
                    <img src={lifetimeImg} className="w-[150px] mx-auto border-2 border-white p-4 rounded-full" alt="" />
                    <div className="text-center my-2">
                        <h4 className="text-[#7FC7D9] mb-2">Lifetime Access</h4>
                        <p className="text-sm">Invest in lifelong learning with our course access guarantee.</p>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;