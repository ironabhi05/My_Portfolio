import React from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
// import './Aboutme.css'

function Aboutme() {
    const info = [
        { name: 'Name' },
        { name: 'E-mail' },
        { name: 'DOB' },
        { name: 'Location' }
    ]
    const links = [
        { name: 'Abhinav Mishra', href: '#' },
        { name: 'ironabhi728@gmail.com', href: '#' },
        { name: '17, July 2004', href: '#' },
        { name: 'Lucknow ,UP', href: '#' },
    ]
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 400,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <div id='about' className="aboutme">
            <div className="relative isolate overflow-hidden py-4 ">
                <div data-aos="fade-up" className='text-center mb-2 ' style={{ fontSize: '30px' }}>
                    <span className='bg-gradient-to-tr from-[#ff4694] to-[#776fff] text-blue px-2'> About Me
                    </span></div>
                <div
                    aria-hidden="true"
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-1xl"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    />
                </div>
                <div
                    aria-hidden="true"
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-0xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    />
                </div>
                <div data-aos="fade-up" className="about-text mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-5xl font-semibold tracking-tight text-dark sm:text-7xl">Known Me More</h2>
                        <div data-aos="fade-up" className="mt-8 text-pretty text-lg text-dark-200 sm:text-xl/8">
                            <h3 data-aos="fade-up">Hi, I'm <b style={{ fontFamily: 'cursive' }}>ABHINAV MISHRA</b>
                            </h3>
                            <p data-aos="fade-up">
                                I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me.
                                Delivering work within time and budget which meets client’s requirements is our moto.
                            </p> </div>
                    </div>
                    <div data-aos="fade-up" className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-8 text-base/7 font-bold text-blue-900 sm:grid-cols-2 md:flex lg:gap-x-36">
                            {info.map((infoItem, info) => (
                                <a key={infoItem.name || info} href={links[info]?.href}>
                                    {links[info]?.name} <span aria-hidden="true">&rarr;</span>
                                </a>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Aboutme;
