import React from 'react';
import abhinav from '../assets/abhiiiii-removebg-preview.png'
import abhinav1 from '../assets/abhinav1.png'
import abhinav2 from '../assets/abhinav2.0.png'
import abhinav3 from '../assets/abhinav3.png'
import abhinav4 from '../assets/abhinav4.0.png'
import ScrollReveal from 'scrollreveal';
import Typed from "typed.js";
import { useEffect, useRef } from 'react';
import './Home.css'

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["DEVELOPER", "DESIGNER", "MERN STACK"],
      startDelay: 300,
      typeSpeed: 200,
      backSpeed: 100,
      backDelay: 300,
      smartBackspace: true,
      loop: true,

    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  useEffect(() => {
    ScrollReveal().reveal('.text', { interval: 16, reset: true });
    ScrollReveal().reveal('.abhi', {
      delay: 1200,
      rotate: {
        y: 90
      }
    });
  }, []);

  return (
    <div id='home' className="Home">
      <section className="pt-10 overflow-hidden bg-blue-100 md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div className="text">
              <h1 className="text-2xl font-bold text-gray-900"> Hey! I Am ABHINAV MISHRA</h1>
              <h2 style={{ fontSize: '50px', color:'#776fff' }}><span ref={el}></span></h2>
              <p data-aos="fade-up" className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                Dedicated MERN stack developer with hands-on experience in building full-stack
                applications. I focus on creating robust, user-centric, and visually appealing digital
                solutions. Currently pursuing B-Tech and always eager to bring innovative ideas to life.
              </p>
              <p data-aos="fade-up" className="mt-4 text-xl text-gray-600 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" />Ask me on <a href="https://www.instagram.com/pt_ironabhi_05/" title="" class="relative transition-all duration-200 text-pink-700 hover:text-pink-700 hover:underline">Instagram</a>
              </p>
              <button data-aos="zoom-in" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-tr from-[#ff4694] to-[#776fff] group-hover:from-blue-400 group-hover:to-blue-600 hover:text-white light:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 light:focus:ring-blue-900" style={{ marginTop: '50px' }}>
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white light:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Contact Me
                </span>
              </button>
            </div>
            <div className="relative">
              <img className="absolute inset-x-0 bottom-0 -mb-60 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="Abhinav Mishra" />
              <img className="abhi relative w-full -mb-20 -mt-10  xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={abhinav4} alt="Abhianv" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home;