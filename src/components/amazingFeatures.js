import React from "react";
import { Link } from "react-router-dom";

export default function AmazingFeatures(){
    const featureData = [
        {
            icon:"mdi mdi-flip-horizontal",
            title:'Intelligent AI Agents',
            desc:'Our AI agents understood context, learn from your business, and provide intelligent assistance across all your workflows.'
        },
        {
            icon:"mdi mdi-email-edit-outline",
            title:'Seamless Communication',
            desc:'Chat naturally with AI agents that integrate into your team conversations and respond with human-like understanding.'
        },
        {
            icon:"mdi mdi-star-outline",
            title:'Instant Automation',
            desc:'Automate repetitive tasks, generate content, and handle routine operations while you focus on what matters most.'
        },
        {
            icon:"mdi mdi-bookmark-outline",
            title:'Team Collaboration',
            desc:'Work together with AI agents as true team members, sharing knowledge and collaborating on projects in real-time.'
        },
        {
            icon:"mdi mdi-account-check-outline",
            title:'Enterprise Security',
            desc:'Bank-level security wiith end-to-end encryption, ensuring your sensitive data and conversation remain protected.'
        },
        {
            icon:"mdi mdi-comment-outline",
            title:'Workflow Integration',
            desc:'Connect with your favorite tools and platforms. Our agents work where you work, from Slack to Notion and beyond.'
        },
    ]
    return(
        <>
        <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Powerful Features for Modern Teams</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Everything you need to supercharge your productivity with AI-powered collaboration.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {featureData.map((item, index) =>{
                        return(
                            <div className="px-6 py-10 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg bg-white dark:bg-slate-900" key={index}>
                                <i className={`${item.icon} text-4xl bg-gradient-to-tl to-amber-400 from-fuchsia-600 text-transparent bg-clip-text`}></i>
        
                                <div className="content mt-7">
                                    <Link to="" className="title h5 text-lg font-medium hover:text-amber-400 duration-500">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
                                    
                                    <div className="mt-5">
                                        {/* <Link to="" className="hover:text-amber-400 font-medium duration-500">Read More <i className="mdi mdi-arrow-right align-middle"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}