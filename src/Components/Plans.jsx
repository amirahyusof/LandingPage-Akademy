import React from "react";
import { CgChevronRightO } from "react-icons/cg";

function Plans(){
    return(
        <div className="text-slate-100 py-20" id="plans">
            <div className="w-[350px] md:w-[550px]  mx-auto text-center justify-center py-2">
                <p className="text-[#7FC7D9] font-bold p-2 text-base mt-[15%]">Subscription Choices</p>
                <h1 className="md:text-5xl sm:text-3xl text-4xl font-bold">
                Elevate Your Learning Journey
                </h1>
                <p className="md:text-xl sm:text-lg text-md text-[#DCF2F1] mt-4 mb-8">Choose the plan that suits your needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4 mt-8 overflow-x-hidden">
                <div className="border-4 border-blue-200 rounded-2xl p-4 m-4">
                    <p className="my-4">Basic Plan: Essential Access</p>
                    <h1 className="text-4xl my-2">Free</h1>
                    <p className="text-base my-6 font-thin">Dive into essential soft skills training tailored to your needs, without the commitment of a subscription.</p>
                    <ul className="list-none text-sm my-4">
                        <li className="flex items-center">
                            <CgChevronRightO size={23} color="white" className="mr-2" />Select programs available for one-time purchase.
                        </li>
                       <li className="flex items-center">
                            <CgChevronRightO size={23} color="white" className="mr-2" />Access to fundamental soft skills training.</li>
                       <li className="flex items-center">
                            <CgChevronRightO size={23} color="white" className="mr-2" />Pay as you go with no monthly commitments.</li>
                    </ul>
                    <button className="bg-[#365486] w-[200px] rounded-md font-medium my-4 mx-auto py-3  text-white hover:shadow-lg hover:shadow-blue-200 transition delay-150 duration-300">
                        Get Started Free
                    </button>
                </div>

                <div className="border-4 border-blue-200 rounded-2xl p-4 m-4">
                    <p className="my-4">Pro Plan: Unlimited Learning</p>
                    <h1 className="text-4xl my-6">RM 50<span className="text-xl">/month</span></h1>
                    <p className="text-md my-2">Immerse yourself in comprehensive soft skills training, with the freedom to explore and grow at your own pace.</p>
                    <ul className="list-none text-sm my-4">
                       <li className="flex items-center">
                            <CgChevronRightO size={23} color="white" className="mr-2" />Unlimited access to all programs.
                        </li>
                       <li className="flex items-center">
                            <CgChevronRightO size={23} color="white" className="mr-2" />Monthly subscription model for flexibility.
                        </li>
                       <li className="flex items-center">
                            <CgChevronRightO size={23} color="white" className="mr-2" />Dive deep into advanced soft skills training.
                        </li>
                    </ul>
                    <button className="bg-[#365486] w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-white hover:shadow-lg hover:shadow-blue-200 transition delay-150 duration-300">
                        Get Pro Plan
                    </button>
                </div>

                <div className="border-4 border-blue-200 rounded-2xl p-4 m-4">
                    <p className="my-4">Premium Plan: Tailored Excellence</p>
                    <h1 className="text-4xl my-6">RM 150<span  className="text-xl">/month</span></h1>
                    <p className="text-md my-2">Accelerate your growth and unlock your full potential with tailored guidance and support.</p>
                    <ul className="text-sm my-4">
                       <li className="flex items-center">
                            <CgChevronRightO size={23} color="white" className="mr-2" />Exclusive access to premium content.</li>
                       <li className="flex items-center">
                            <CgChevronRightO size={23} color="white" className="mr-2" />Personalized coaching sessions with industry experts.</li>
                       <li className="flex items-center">
                            <CgChevronRightO size={23} color="white" className="mr-2" />Tailored guidance to maximize your potential.</li>
                    </ul>
                    <button className="bg-[#365486] w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-white hover:shadow-lg hover:shadow-blue-200 transition delay-150 duration-300">
                        Get Premium Plan
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Plans;