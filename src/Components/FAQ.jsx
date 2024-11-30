import React, { useState } from "react";
import './FAQ.css';
import FAQgif from '../assets/FAQ.gif';

const faqs = [
    { 
        id: 1, 
        qs: 'What is the purpose of a portfolio website?', 
        ans: 'A portfolio website showcases your skills, projects, and experiences to potential employers or clients. It serves as a digital resume to highlight your expertise.' 
    },
    { 
        id: 2, 
        qs: 'What sections should a portfolio website include?', 
        ans: 'A portfolio website typically includes a homepage, an about me section, a portfolio of projects, a resume, a contact page, and FAQs for additional context.' 
    },
    { 
        id: 3, 
        qs: 'What technologies are commonly used for portfolio websites?', 
        ans: 'Portfolio websites are often built using HTML, CSS, JavaScript, and frameworks like React or Angular. Back-end technologies like Node.js or Django can be used for contact forms and dynamic content.' 
    },
    { 
        id: 4, 
        qs: 'Should I include non-technical projects in my portfolio?', 
        ans: 'Yes, if the projects demonstrate creativity, problem-solving, or teamwork skills. These can show versatility and a well-rounded personality.' 
    },
    { 
        id: 5, 
        qs: 'How do I keep my portfolio website updated?', 
        ans: 'Regularly add new projects, update your resume, and tweak designs or content to align with your current skills and goals.' 
    },
    { 
        id: 6, 
        qs: 'Do I need a blog section on my portfolio website?', 
        ans: 'A blog section is optional but can be beneficial for showcasing your knowledge, sharing tutorials, or discussing industry trends.' 
    }
];


function FAQ() {
    const [expanded, setExpanded] = useState(null); // Track which FAQ is expanded

    const toggleFAQ = (id) => {
        setExpanded(expanded === id ? null : id); // Collapse if already expanded
    };

    return (
        <div id="faq" className="FAQ">
            <div className="relative isolate overflow-hidden bg-custom">
            <span data-aos="fade-up" data-aos-anchor-placement="bottom-center" className="text-center mb-2" style={{ fontSize: '30px' }}>
                    <span className="text-black px-2 bg-gradient-to-tr from-[#ff4694] to-[#776fff]">
                        FAQ
                    </span>
                    </span>
                <h2 data-aos="fade-up" className="sm:text-4xl text-3xl font-extrabold text-base-content">Have any questions?</h2>
                <div className="py-8 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
                    {/* Left Section */}
                    <div  data-aos="fade-up" className="flex flex-col text-left basis-1/2">
                        <img
                            className="FAQgif xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                            src={FAQgif}
                            alt="FAQ Illustration"
                        />
                    </div>
                    
                    {/* Right Section */}
                    <ul className="basis-1/2" style={{textAlign:'justify'}}>
                        {faqs.map((faq) => (
                            <li key={faq.id} className="group">
                                {/* Question Button */}
                                <button
                                data-aos="fade-up"
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                                    aria-expanded={expanded === faq.id}
                                >
                                    <span data-aos="fade-up" className=" qs flex-1 text-base-content">{faq.qs}</span>
                                    {/* Toggle Icon */}
                                    <svg
                                        className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transition-transform ${
                                            expanded === faq.id ? 'rotate-90' : ''
                                        }`}
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect y="7" width="16" height="2" rx="1" />
                                        <rect y="7" width="16" height="2" rx="1" className="rotate-90" />
                                    </svg>
                                </button>
                                
                                {/* Answer Section */}
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                        expanded === faq.id ? 'max-h-60' : 'max-h-0'
                                    }`}
                                >
                                    <div className="pb-5 leading-relaxed space-y-2 text-base-content">
                                        {faq.ans}
                                    </div>
                                </div>
                            </li>
                        ))}
                        
                        {/* See More Button */}
                        <a
                            href="#"
                            className="text-blue-900 mt-3 inline-flex font-medium no-underline group px-2 py-2 items-center -tracking-tight"
                        >
                            See more
                            <svg
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500 ease-in-out"
                                viewBox="0 0 100 50"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M78.1233 27.7777H21.8758C20.1259 27.7777 18.751 26.5555 18.751 24.9999C18.751 23.4444 20.1259 22.2222 21.8758 22.2222H78.1233C79.8732 22.2222 81.2482 23.4444 81.2482 24.9999C81.2482 26.5555 79.8732 27.7777 78.1233 27.7777Z"
                                    fill="#FF8E26"
                                />
                                <path
                                    d="M62.4999 47.2222C62.09 47.2266 61.6837 47.1548 61.307 47.0112C60.9302 46.8677 60.5915 46.6557 60.3125 46.3888C59.0625 45.2777 59.0625 43.5555 60.3125 42.4444L79.9991 24.9444L60.3125 7.4444C59.0625 6.33329 59.0625 4.61107 60.3125 3.49996C61.5624 2.38885 63.4998 2.38885 64.7498 3.49996L86.6238 22.9444C87.8737 24.0555 87.8737 25.7777 86.6238 26.8888L64.7498 46.3333C64.1248 46.8888 63.3123 47.1666 62.5624 47.1666L62.4999 47.2222Z"
                                    fill="#FF8E26"
                                />
                            </svg>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
