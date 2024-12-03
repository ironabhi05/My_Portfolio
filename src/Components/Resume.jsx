import React from 'react';
import './Resume.css'
import resume from '../assets/Abhinav Mishra Resume.pdf'
function Resume() {
    const files = [
        {
            name: "DOWNLOAD CV",
            url: resume // If file is in public folder
        }
    ];

    return (
        <div id='resume' className="Resume">
            <p data-aos="fade-up" className='text-center mb-2 ' style={{ fontSize: '30px'}}>
                <span className='bg-gradient-to-tr from-[#ff4694] to-[#776fff] px-2'> RESUME
                </span></p>
            <h1 data-aos="fade-up">A Summary Of My Resume</h1>
            <div className="resume-row">
                <div className="education">
                    <p data-aos="fade-up" style={{ fontSize: '40px' }}>My Education</p>
                    <div data-aos="fade-up" className="blockb">
                        <h2 data-aos="fade-up">Bachelor in Computer Engineering</h2>
                        <h3 data-aos="fade-up">AKTU / 2024 - 2027</h3>
                        <h6 data-aos="fade-up">Pursuing B.Tech in Computer Science and Engineering, I am building a
                            strong foundation in core concepts like data structures, algorithms,
                            databases, operating systems, and software development. My focus
                            includes mastering programming languages (Python, C++, Java) and
                            gaining hands-on experience in full-stack development using React,
                            Node.js, Express, and MongoDB    </h6>
                        <hr data-aos="fade-up" />
                        <h2 data-aos="fade-up">Bachelor of Art</h2>
                        <h3 data-aos="fade-up">University of Lucknow / 2021 - 2024</h3>
                        <h6 data-aos="fade-up">Completed a Bachelor of Arts (BA) with a strong foundation in critical thinking,
                            communication, and analytical skills</h6>
                        <hr data-aos="fade-up" />
                        <h2 data-aos="fade-up">Diploma in Computer Science & Engineering</h2>
                        <h3 data-aos="fade-up">BTEUP / 2021 - 2024</h3>
                        <h6 data-aos="fade-up">Completed a Diploma in Computer Science and Engineering with a focus on
                            foundational programming, web development, and software engineering.
                            Gained practical experience in HTML, CSS, JavaScript, Python, and
                            database management, along with hands-on projects in front-end and
                            back-end development.</h6>
                        <hr data-aos="fade-up" />
                    </div>
                </div>
                <div className="experience">
                    <p data-aos="fade-up" style={{ fontSize: '40px' }}>My Experience</p>
                    <div data-aos="fade-up" className="blocka">
                        <h2 data-aos="fade-up">Summer Training</h2>
                        <h3 data-aos="fade-up">Techpile Technologies Pvt. Ltd Lucknow / 45 Days</h3>
                        <h6 data-aos="fade-up">Completed summer training focused on front-end development and gained
                            basic skills in HTML, CSS, and JavaScript. Also created a Python-based project,
                            enhancing my understanding of programming fundamentals and problem-solving.</h6>
                        <hr data-aos="fade-up" />
                        <h2 data-aos="fade-up">Mern Stack Developer</h2>
                        <h3 data-aos="fade-up">Apna Collage Online Sigma Batch / 2023 - 2024</h3>
                        <h6 data-aos="fade-up">Completed the Apna College Sigma Batch in MERN Stack Development, gaining in-depth
                            knowledge of building full-stack web applications using MongoDB, Express.js, React, and
                            Node.js. Developed hands-on projects, enhancing skills in front-end and back-end integration,
                            RESTful APIs, and responsive design.</h6>
                        <hr data-aos="fade-up" />
                        <h2 data-aos="fade-up">Asossiate Jr Developer & Intern</h2>
                        <h3 data-aos="fade-up">Digicoders Technologies  Pvt. Ltd Lucknow / 6 Months</h3>
                        <h6 data-aos="fade-up">Worked as an intern in a software development company, where I was involved
                            in full-stack development using React, Node.js, Express, and MongoDB. Gained
                            hands-on experience in database management, API integration, and project deployment.</h6>
                        <hr data-aos="fade-up" />
                    </div>
                </div>
            </div>
            <div className="Download">
                {files.map((file, index) => (
                    <button
                        key={index}
                        data-aos="zoom-in"
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-tr from-[#ff4694] to-[#776fff] group-hover:from-blue-400 group-hover:to-blue-600 hover:text-white light:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 light:focus:ring-blue-900"
                        style={{ marginTop: "10px" }}
                    >
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white light:bg-gray-900 group-hover:bg-opacity-0">
                            <a href={file.url} download className="text-gray-900">
                                {file.name}
                            </a>
                        </span>
                    </button>
                ))}
            </div>
            <div className="Skill" style={{ borderRadius: '10px', padding: '2%' }}>
                <p data-aos="fade-up" style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'justify', paddingLeft: '80px' }}>My Skills</p>
                <div className="skills-row">
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="2000" className="skills-column">
                        <h3>Web Design</h3>
                        <h4 className="w-full bg-gray-100 rounded-full h-2">
                            <h5 className="h-2 rounded-full bg-pink-500"
                                style={{ width: `70%` }}></h5>
                            70%
                        </h4><br />
                        <h3>JavaScript</h3>
                        <h4 className="w-full bg-gray-100 rounded-full h-2">
                            <h5 className="h-2 rounded-full bg-pink-500"
                                style={{ width: `80%` }}></h5>
                            85%
                        </h4><br />
                        <h3>React.js</h3>
                        <h4 className="w-full bg-gray-100 rounded-full h-2">
                            <h5 className="h-2 rounded-full bg-pink-500"
                                style={{ width: `70%` }}></h5>
                            88%
                        </h4>
                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" className="skills-column">
                        <h3>HTML/CSS</h3>
                        <h4 className="w-full bg-gray-100 rounded-full h-2">
                            <h5 className="h-2 rounded-full bg-pink-500"
                                style={{ width: `85%` }}></h5>
                            95%
                        </h4><br />
                        <h3>MongoDB</h3>
                        <h4 className="w-full bg-gray-100 rounded-full h-2">
                            <h5 className="h-2 rounded-full bg-pink-500"
                                style={{ width: `80%` }}></h5>
                            80%
                        </h4><br />
                        <h3>Bootstrap</h3>
                        <h4 className="w-full bg-gray-100 rounded-full h-2">
                            <h5 className="h-2 rounded-full bg-pink-500"
                                style={{ width: `75%` }}></h5>
                            90%
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Resume;