import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";

import AboutImg from "../assets/images/about.jpg"
import image1 from "../assets/images/1.png"
import image2 from "../assets/images/2.png"
import image3 from "../assets/images/3.png"

import client1 from "../assets/images/client/01.jpg"
import client2 from "../assets/images/client/02.jpg"
import client3 from "../assets/images/client/03.jpg"
import client4 from "../assets/images/client/04.jpg"
import client5 from "../assets/images/client/05.jpg"
import client6 from "../assets/images/client/06.jpg"

import ClientsTwo from "../components/clientTwo";
import Blogs from "../components/blogs";
import Footer from "../components/footer";
// import Switcher from "../components/switcher"; // Switcher import is no longer needed
import NavLight from "../components/navbar";

import {FiCheckCircle} from "../assets/icons/vander"

import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/css/modal-video.css'


export default function AboutUs(){
    // The useEffect hook that forced dark mode has been removed.
    const [isOpen, setOpen] = useState(false);
    const [activeIndex,setActiveIndex] = useState(0)
    const teamData = [
        {
            image:client1,
            name:"Calvin Carlo",
            title:'C.E.O'
        },
        {
            image:client2,
            name:"Aliana Rosy",
            title:'Co-founder'
        },
        {
            image:client3,
            name:"Sofia Razaq",
            title:'C.O.O.'
        },
        {
            image:client4,
            name:"Ronny Jofra",
            title:'Director'
        },
        {
            image:client5,
            name:"Cristina Murphy",
            title:'Manager'
        },
        {
            image:client6,
            name:"Jimmi Shaa",
            title:'Operator'
        },
    ]
    return(
        <>
        <NavLight/>
        {/* The hero section's overlay and text have been changed for light mode */}
        <section className="relative md:py-44 py-32 bg-[url('../../assets/images/bg/bg-pages.jpg')] bg-no-repeat bg-bottom bg-cover">
            <div className="absolute inset-0 bg-white/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-6">
                    <div>
                        <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold text-white mb-0">About Us</h5>
                    </div>

                    <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
                        <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-slate-500 hover:text-amber-400"><Link to="/">Digi.Ai</Link></li>
                        <li className="inline-block text-base text-slate-500 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white" aria-current="page">About Us</li>
                    </ul>
                </div>
            </div>
        </section>
        
        {/* This shape creates a smooth transition to the white section below */}
        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        {/* All sections below have a white background and light mode styles */}
        <section className="relative md:py-24 py-16 bg-white">

            <div className="container relative">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
                    <div className="relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:m-auto after:w-96 after:h-96 after:bg-gradient-to-tl after:to-amber-400 after:from-fuchsia-600 after:blur-[80px] after:rounded-full p-6 bg-white rounded-md shadow lg:me-6">
                        <div className="relative overflow-hidden rounded-lg shadow-md z-1">
                            <img src={AboutImg} alt=""/>
    
                            <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <Link to="#!" onClick={() => setOpen(true)} className="lightbox lg:h-16 h-14 lg:w-16 w-14 rounded-full shadow-lg inline-flex items-center justify-center bg-white hover:bg-amber-400 text-amber-400 hover:text-white duration-500 ease-in-out mx-auto">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <ModalVideo
                        channel="youtube"
                        youtube={{ mute: 0, autoplay: 0 }}
                        isOpen={isOpen}
                        videoId="S_CGed6E610"
                        onClose={() => setOpen(false)} 
                    />
                    <div className="">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold"><span className="font-bold text-slate-900">About Us</span></h3>
                        <p className="text-slate-900 max-w-xl">Digiworks was founded by visionary technologists with deep expertise in Enterprise business operational automations and AI. The minds behind the company combine decades of experience across Fortune 500 companies and startups.</p>

                        {/* <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2"/> Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2"/> Our Talented & Experienced Marketing Agency</li>
                            <li className="mb-2 flex items-center"><FiCheckCircle className="text-amber-400 h-5 w-5 me-2"/> Create your own skin to match your brand</li>
                        </ul> */}

                        {/* <div className="mt-4">
                            <Link to="" className="hover:text-amber-400 font-medium duration-500">Read More <i className="mdi mdi-chevron-right text-[20px] align-middle"></i></Link>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="container-fluid relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <div className="">
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl text-slate-900 tracking-normal mb-4">Our Vision.</h4>
                            <p className="text-slate-900 text-lg max-w-xl mx-auto">We are dedicated to making the complex world of AI transparent, actionable and accessible without compromise to every user to be ahead in the AI adoption.</p>

                            {/* <div className="mt-6">
                                <Link to="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-amber-400 border-gray-800 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-400 text-white rounded-md">Join Now!</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="container relative md:mt-24 mt-16">
                <div className="lg:flex justify-center">
                    <div className="lg:w-4/5">
                        <ul className="md:flex inline-block w-fit mx-auto flex-wrap justify-center text-center p-2 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            <li role="presentation" className="inline-block md:w-1/3 w-full p-2">
                                <button className={`${activeIndex === 0 ? "text-white bg-amber-400" : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"} px-5 py-3 text-start rounded-md w-full duration-500 `} onClick={()=>setActiveIndex(0)}>
                                    <h5 className="text-base font-semibold">Drag and drop</h5>
                                    <p className="text-sm mt-1">Artificial intelligence makes it fast easy to create content for your video creations.</p>
                                </button>
                            </li>
                            <li role="presentation" className="inline-block md:w-1/3 w-full p-2">
                                <button className={`${activeIndex === 1 ? "text-white bg-amber-400" : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"} px-5 py-3 text-start rounded-md w-full duration-500 `} onClick={()=>setActiveIndex(1)}>
                                    <h5 className="text-base font-semibold">Improve your Talent</h5>
                                    <p className="text-sm mt-1">Artificial intelligence makes it fast easy to create content for your video creations.</p>
                                </button>
                            </li>
                            <li role="presentation" className="inline-block md:w-1/3 w-full p-2">
                                <button className={`${activeIndex === 2 ? "text-white bg-amber-400" : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"} px-5 py-3 text-start rounded-md w-full duration-500 `} onClick={()=>setActiveIndex(2)} >
                                    <h5 className="text-base font-semibold">Go for Live</h5>
                                    <p className="text-sm mt-1">Artificial intelligence makes it fast easy to create content for your video creations.</p>
                                </button>
                            </li>
                        </ul>
    
                        <div id="StarterContent" className="mt-6">
                            {activeIndex === 0 ? 
                                <div>
                                    <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
                                        <img src={image1} className="rounded-t-lg" alt=""/>
                                    </div>
                                </div> :''
                            }
                            {activeIndex === 1 ? 
                                <div>
                                    <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
                                        <img src={image2} className="rounded-t-lg" alt=""/>
                                    </div>
                                </div> :''
                            }
                            {activeIndex === 2 ? 
                            <div>
                                <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
                                    <img src={image3} className="rounded-t-lg" alt=""/>
                                </div>
                            </div>:''
                            }
                        </div>
                    </div>
                </div>
            </div>  */}

            {/* <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">The Team</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Artificial intelligence makes it fast easy to create content for your blog, social media, website, and more!</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {teamData.map((item,index)=>{
                        return(
                            <div className="overflow-hidden relative w-full mx-auto bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-slate-800 rounded-md flex items-center duration-500" key={index}>
                                <img src={item.image} alt="" className="absolute -start-10 w-40 h-40 rounded-full shadow-lg" />
                                <div className="min-w-0 py-10 ps-36 pe-6">
                                    <Link to="" className="text-lg font-medium hover:text-amber-400">{item.name}</Link>
                                    <p className="text-slate-400">{item.title}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <ClientsTwo/>
            <Blogs/> */}
        </section>
        <Footer/>
        {/* <Switcher/>  */}
        </>
    )
}
