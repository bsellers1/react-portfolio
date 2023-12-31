import React from "react";
import Traintracker from '../assets/traintracker.jpg';
import Lyceum from '../assets/lyceum.png';
import Glitchbook from '../assets/Glitchbook.png';

const Projects = () => {
    return (
        <div name='projects' className="w-full md:h-screen text-gray-300 bg-slate-900">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#fde047]">Projects</p>
                    <p className="py-6">Check out my recent projects</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div style={{ backgroundImage: `url(${Traintracker})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                TrainTracker
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://github.com/drewjordan414/cta-train-tracker">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Github</button>
                                </a>
                                <a href="https://drewjordan414.github.io/cta-train-tracker/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Livelink</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div style={{ backgroundImage: `url(${Lyceum})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Lyceum
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://github.com/AlanDBalan/Lyceum-The-Forum-for-Philosophical-Debate">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Github</button>
                                </a>
                                <a href="https://powerful-woodland-62433-bbf66ef730e4.herokuapp.com/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Livelink</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div style={{ backgroundImage: `url(${Glitchbook})` }} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Glitchbook
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://github.com/kumih0/GlitchBook">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Github</button>
                                </a>
                                <a href="https://glitchbook-72c348d487cc.herokuapp.com/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Livelink</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;