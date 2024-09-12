import React from 'react'
import NavBar from './NavBar.js'
import mongodb from '../images/icons/mongodb.svg';
import exoressjs from '../images/icons/Expressjs.png';
import reactjs from '../images/icons/reactjs.svg';
import nodejs from '../images/icons/nodejs.svg';
import tailwindcss from '../images/icons/tailwindcss.svg';
import awss3 from '../images/icons/awss3.svg';

const Skills = () => {
    return (
        <div className=''>
            <NavBar />
            <div className="w-full flex flex-col md:flex-row text-[#030303] bg-slate-50">
                <div className="w-full min-h-[40vh] flex flex-col text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px]  m-5 gap-5">
                    {/* <p>MY PORTFOLIO</p> */}
                    <div className="w-full h-full flex flex-row gap-5">
                        <div className="w-1/5 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[100px] h-[auto] flex justify-center items-center cursor-pointer">
                                <img src={mongodb} className="max-w-[260px] max-h-[217px]" />

                            </div>
                            {/* <p className="text-[0.55rem] font-bold">MongoDB</p> */}
                        </div>
                        <div className="w-1/5 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[100px] h-[auto] flex justify-center items-center cursor-pointer">
                                <img src={exoressjs} className="max-w-[260px] max-h-[217px]" />

                            </div>
                            {/* <p className="text-[0.55rem] font-bold">ExpressJS</p> */}
                        </div>
                        <div className="w-1/5 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[100px] h-[auto] flex justify-center items-center cursor-pointer">
                                <img src={reactjs} className="max-w-[260px] max-h-[217px]" />

                            </div>
                            {/* <p className="text-[0.55rem] font-bold">ReactJS</p> */}
                        </div>
                        <div className="w-1/5 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[100px] h-[auto] flex justify-center items-center cursor-pointer">
                                <img src={nodejs} className="max-w-[260px] max-h-[217px]" />

                            </div>
                            {/* <p className="text-[0.55rem] font-bold">ReactJS</p> */}
                        </div>
                        <div className="w-1/5 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[100px] h-[auto] flex justify-center items-center cursor-pointer">
                                <img src={tailwindcss} className="max-w-[260px] max-h-[217px]" />

                            </div>
                            {/* <p className="text-[0.55rem] font-bold">TailwindCSS</p> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row text-[#030303] font-light">
                <div className="w-full min-h-[40vh] flex flex-col text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px] m-5 gap-5">
                    {/* <p>MY PORTFOLIO</p> */}
                    <div className="w-full h-full flex flex-row gap-5">

                        <div className="w-1/5 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[100] h-[auto] flex justify-center items-center cursor-pointer">
                                <img src={awss3} className="max-w-[260px] max-h-[217px]" />

                            </div>
                            {/* <p className="text-[0.55rem] font-bold">AWS S3</p> */}
                        </div>
                        <div className="w-1/5 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[100] h-[auto] flex justify-center items-center cursor-pointer">
                                {/* <img src={reactjs} className="max-w-[260px] max-h-[217px]"/> */}

                            </div>
                            {/* <p className="text-[0.55rem] font-bold">ANIMATED AD</p> */}
                        </div>
                        <div className="w-1/5 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[100] h-[auto] flex justify-center items-center cursor-pointer">
                                {/* <img src={nodejs} className="max-w-[260px] max-h-[217px]"/> */}

                            </div>
                            {/* <p className="text-[0.55rem] font-bold">ANIMATED AD</p> */}
                        </div>
                        <div className="w-1/5 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[100] h-[auto] flex justify-center items-center cursor-pointer">
                                {/* <img src={nodejs} className="max-w-[260px] max-h-[217px]"/> */}

                            </div>
                            {/* <p className="text-[0.55rem] font-bold">ANIMATED AD</p> */}
                        </div>
                        <div className="w-1/5 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[100] h-[auto] flex justify-center items-center cursor-pointer">
                                {/* <img src={nodejs} className="max-w-[260px] max-h-[217px]"/> */}

                            </div>
                            {/* <p className="text-[0.55rem] font-bold">ANIMATED AD</p> */}
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full flex flex-col md:flex-row text-[#030303] font-light  ">
                <div className="w-full min-h-[70vh] flex flex-col text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px]"> {/**/}
                    <div>ReactJS, TailwindCSS, NodeJS, ExpressJS, MongoDB</div>
                    <div>Mongoose, dontenv, nodemon</div>
                    <div>Heroku, GitHub, AWS S3, Mongo atlas</div>
                    <div>FontAwesome, Icon?</div>
                    <div>Semantics</div>
                    <div>CRUD operations</div>
                    <div>RESTful api</div>
                    <div>Experience with cross-browser compatibility testing</div>
                    <div>Familiar with browser testing and debugging</div>
                    <div>Knowledge of SEO principles</div>
                    <div>In-depth understanding of the entire web development process (design, development and deployment)</div>
                    <div>Familiarity with software like Adobe Suite, Photoshop and content management systems</div>
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>JavaScript</div>
                    <div>Responsive Web Design</div>
                    <div>CSS Preprocessors</div>
                    <div>Version Control/Git</div>
                    <div>Front End Frameworks</div>
                    <div>Web Performance Optimization</div>
                    <div>Cross-Browser Compatibility</div>
                    <div>Accessibility (A11y)</div>
                    <div>Testing and Debugging</div>
                    <div>Build Tools</div>
                    <div>API Integration</div>
                    <div>UI/UX Principles</div>
                    <div>Problem-Solving</div>
                    <div>Use markup languages like HTML to create user-friendly web pages</div>
                    <div>Maintain and improve website</div>
                    <div>Optimize applications for maximum speed</div>
                    <div>Design mobile-based features</div>
                    <div>Collaborate with back-end developers and web designers to improve usability</div>
                    <div>Get feedback from, and build solutions for, users and customers</div>
                    <div>Write functional requirement documents and guides</div>
                    <div>Create quality mockups and prototypes</div>
                    <div>Help back-end developers with coding and troubleshooting</div>
                    <div>Ensure high quality graphic standards and brand consistency</div>
                    <div>Stay up-to-date on emerging technologies</div>


                </div>
            </div>
        </div>
    )
}

export default Skills