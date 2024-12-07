import React from "react";
import './Whatido.css';
import { useEffect } from 'react';
import gd from '../assets/gd.png';
import wd from '../assets/WD.png';
import ba from '../assets/business.png';
import seo from '../assets/SEO.png';
import ui from '../assets/Ui.png';
import app from '../assets/app.png';
import AOS from "aos";
import "aos/dist/aos.css";
const stats = [
    {
        id: 1, name: [
            "Blend technical expertise and creativity",
            "Create intuitive, responsive designs",
            "Focus on user-centric, high-quality results",
        ], value: ' Full-Stack Web Development', logo: gd, data: `zoom-out-up`
    },
    {
        id: 2, name: [
            "Visually stunning and user-friendly websites",
            "Blend functionality with aesthetics",
            "Deliver seamless, responsive experiences",
        ], value: 'API Design and Integration', logo: wd, data: `zoom-out-up`
    },
    {
        id: 3,
         name: [
            "Design intuitive user-centered interfaces",
            "Combine aesthetics and functionality",
            "Ensure optimal usability and satisfaction",
        ], 
        value: 'Front-End Web Development', logo: ui, data: `zoom-out-up`
    },
    {
        id: 4,
         name: [
            "Design efficient, scalable database schemas",
            "Handle CRUD operations using MongoDB",
            "Optimize performance with indexing and aggregation",
        ],
        value: 'Database Management', logo: app, data: `zoom-out-up`
    },
    {
        id: 5,
         name: [
            "Version control using Git for seamless collaboration",
            "Work in teams using GitHub, GitLab, or Bitbucket",
            "Implement branching strategies like GitFlow",

        ],
         value: 'Git and Collaboration', logo: ba, data: `zoom-out-up`
    },
    { id: 6, name: [
        "Build robust back-end systems using Python",
        "Develop APIs with frameworks like Django and Flask",
        "Automate workflows and data processing tasks",
    ], 
    value: 'Python Web Development', logo: seo, data: `zoom-out-up` },
]
function Whatido() {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 900,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <div id="What_I_do" className="Whatido">
            <div data-aos="fade-up" className="text2">
                <span data-aos-anchor-placement="bottom-center" className="text-center mb-2" style={{ fontSize: '30px' }}>
                    <span className=" px-2 bg-gradient-to-tr from-[#ff4694] to-[#776fff]">
                        What I Do?
                    </span>
                    <h1 data-aos-anchor-placement="bottom-center">How I can help your next project</h1>
                </span>
            </div>
            <div className="cardGroup py-24 sm:py-10 rounded-xl">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-6 gap-y-10 text-center lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} data-aos={stat.data} className="card mx-auto flex max-w-xl flex-col gap-y-4">

                                {/* Logo at the top of the card */}
                                <div className="flex justify-center">
                                    <img
                                        src={stat.logo}
                                        alt=""
                                        className="w-25 h-20 object-contain"
                                    />
                                </div>

                                {/* Value after the logo */}
                                <div className="order-first text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                                    {stat.value}
                                </div>

                                {/* Name last */}
                                <div className="text-base/7 text-justify text-gray-600">
                                    <ul className="p-2">
                                        {stat.name.map((item, index) => (
                                            <li key={index}>✔ {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

        </div>
    )
}
export default Whatido;