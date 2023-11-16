import React from "react"
import { TypeAnimation } from "react-type-animation"
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import iProfil from '../assets/IMG (2).jpg'
import { motion } from "framer-motion"
import fadeIn from "../variants"

function Home(){
    return (
        <div className="section min-h-[75hv] lg:min-h-[85hv] flex" id='home'>            
            <div className="container mx-auto py-20">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">            
                    <motion.div
                      initial="hidden"
                      variants={fadeIn('up',0.5)}
                      whileInView={'show'}                                       
                      viewport={{once: false ,amount:0.7}}
                      className="flex-1 text-center lg:text-left font-secondary ">
                            <motion.h1
                                variants={fadeIn("down",0.5)}
                                initial="hidden" 
                                whileInView={'show'}                                       
                                viewport={{once: false ,amount:0.7}}
                                 className="text-[55px] font-bold leading-[0.8] lg:text-[80px] lg:pb-1 ">
                                    LANDRY KANKEU
                            </motion.h1>
                        <div className="text-[26px] lg:text-[45px] font-semibold leading-1 font-secondary uppercase">
                                <span className="text-white mr-4">Je suis</span>
                            <TypeAnimation
                                sequence={[
                                    'Junior',
                                    1000,
                                    'Developpeur 💻',
                                    1000,
                                ]}
                                repeat={Infinity}
                                speed={50}
                                wrapper="span"
                                className="text-blue-700"
                            />
                            <p className="my-2 lowercase leading-[1.5] lg:leading-[1] font-normal  lg:pt-1">Loremp ipsum siudc iuozcd iuozce oizenc oincz oizecuzce oiunzcc oiuabzci oiuancsfovcins zoeicn lkd,fv, </p>
                            
                            <div className="pt-3 flex justify-center lg:justify-between items-center gap-x-20 lg:left">
                                <button to className="btn btn-sm"><div className="w-24 lg:w-auto">C'est quoi le BTS SIO ?</div></button>
                                <button className="btn btn-sm"><div className="w-24 lg:w-auto">Evaluer mes Skills</div></button>
                            </div>
                            <div className="mx-auto flex lg:flex-1 items-center justify-center  max-w-max gap-x-6 pt-5">
                                <a href="home" >
                                    <AiFillLinkedin />
                                </a>
                                <a href="home">
                                    <AiFillGithub />
                                </a>                       
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("down",0.5)}
                        initial="hidden" 
                        whileInView={'show'}                                       
                        className="hidden lg:flex items-center mx-auto lg:max-w-[482px]">
                        <motion.img
                        whileHover={{scale: 1.1}}
                        whileDrag={{ scale: 0.9}} className=" lg:w-[482px] lg:h-[482px] object-cover object-right-top rounded-full" src={iProfil} alt="logo du porfolio" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default Home