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
    { id: 1, name: 'As a developer with design passion, I blend technical expertise and creativity to create intuitive, responsive, user-focused, high-quality designs.', value: 'Graphic Design', logo: gd, data: `zoom-out-up` },
    { id: 2, name: 'Creating visually stunning and user-friendly websites that blend functionality with aesthetics, delivering seamless, responsive experiences for every user.', value: 'Web Design', logo: wd, data: `zoom-out-up` },
    { id: 3, name: 'Designing intuitive, user-centered interfaces that deliver seamless, engaging experiences, combining aesthetics and functionality for optimal usability and satisfaction.', value: 'UI/UX Design',logo: ui, data: `zoom-out-up` },
    { id: 4, name: 'Crafting intuitive and engaging app designs, blending creativity with functionality to deliver seamless, user-friendly experiences and successful projects.', value: 'App Design & Project',logo: app, data: `zoom-out-up` },
    { id: 5, name: 'Providing data-driven insights and strategic solutions to optimize business performance, improve efficiency, and drive sustainable growth and success.', value: 'Business Analysis',logo: ba, data: `zoom-out-up` },
    { id: 6, name: 'Boosting online visibility with targeted SEO strategies, driving traffic, enhancing search rankings, and maximizing conversions for business growth.', value: 'SEO Marketing',logo: seo, data: `zoom-out-up` },
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
                <span  data-aos-anchor-placement="bottom-center" className="text-center mb-2" style={{ fontSize: '30px' }}>
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
                    <div className="text-base/7 text-gray-600">
                        {stat.name}
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