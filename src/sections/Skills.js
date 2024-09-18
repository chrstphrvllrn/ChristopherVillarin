import React from 'react'
import NavBar from './NavBar.js'
import { Link } from 'react-router-dom'
// import mongodb from '../images/icons/mongodb.svg';
// import exoressjs from '../images/icons/Expressjs.png';
// import reactjs from '../images/icons/reactjs.svg';
// import nodejs from '../images/icons/nodejs.svg';
// import tailwindcss from '../images/icons/tailwindcss.svg';
// import awss3 from '../images/icons/awss3.svg';

const Skills = () => {


    return (
        <div className=''>
            <NavBar />
            



            <div className="w-full flex flex-col md:flex-row text-[#030303] font-light 
                pl-8 sm:pl-8 md:pl-16 
                pr-8 sm:pr-8 md:pr-16 
                py-8
                ">
                <div className="w-full min-h-[70vh] flex flex-col text-left justify-start  mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px]"> {/**/}
                    



                    <div className='flex flex-row flex-wrap gap-y-5 gap-x-2 justify-between'>
                    <div>Languages</div>
                    <div className='flex flex-row '>
                        <span className="max-w-[15rem] flex justify-center items-center bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">HTML</span>
                        <span className="max-w-[15rem] flex justify-center items-center bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">CSS</span>
                        <span className="max-w-[15rem] flex justify-center items-center bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">JavaScript</span>
                       </div>
                    </div>
                 
                   <div className='flex flex-row flex-wrap gap-y-5 gap-x-2 justify-between'>
                        <div>Front End Frameworks</div>
                        <div className='flex flex-row '>
                        <span className="max-w-[15rem] flex justify-center items-center bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">ReactJS</span>
                        <span className="max-w-[15rem] flex justify-center items-center bg-blue-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">TailwindCSS</span>
                        </div>
                    </div>
                   <div className='flex flex-row flex-wrap gap-y-5 gap-x-2 justify-between'>
                        <div>Back End Frameworks</div>
                        <div className='flex flex-row '>
                        <span className="max-w-[15rem] flex justify-center items-center bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">ExpressJS</span>
                        <span className="max-w-[15rem] flex justify-center items-center bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">MongoDB</span>
                        <span className="max-w-[15rem] flex justify-center items-center bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">NodeJS</span>
                        </div>
                    </div>

                   
                   <div className='flex flex-row flex-wrap gap-y-5 gap-x-2 justify-between'>
                         <div>Version Control</div>
                         <div className='flex flex-row '>
                        <span className="max-w-[15rem] flex justify-center items-center bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Git</span>
                        </div>
                    </div>

                 <div className='flex flex-row flex-wrap gap-y-5 gap-x-2 justify-between'>
                         <div>Package Managers</div>
                         <div className='flex flex-row '>
                        <span className="max-w-[15rem] flex justify-center items-center bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">NPM</span>
                        </div>
                    </div>
                 <div className='flex flex-row flex-wrap gap-y-5 gap-x-2 justify-between'>
                  <div>Other tools</div>
                  <div className='flex flex-row flex-wrap justify-end'>
                        <span className="max-w-[15rem] flex justify-center items-center bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">GitHub</span>
                        <span className="max-w-[15rem] flex justify-center items-center bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Heroku</span>
                        <span className="max-w-[15rem] flex justify-center items-center bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">Mongo atlas</span>
                        <span className="max-w-[15rem] flex justify-center items-center bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">AWS S3</span>
                        <span className="max-w-[15rem] flex justify-center items-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Mongoose</span>
                        <span className="max-w-[15rem] flex justify-center items-center bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">dontenv</span>
                        <span className="max-w-[15rem] flex justify-center items-center bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">nodemon</span>
                        <span className="max-w-[15rem] flex justify-center items-center bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">MongoDB</span>
                        <span className="max-w-[15rem] flex justify-center items-center bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Responsively.app</span>
                        <span className="max-w-[15rem] flex justify-center items-center bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Toggle Pestiscide(Chrome extension)</span>
                        </div>
                    </div>

                    {/* <div>ReactJS, TailwindCSS, NodeJS, ExpressJS, MongoDB</div> */}
                    {/* <div>Favorite Tools</div> */}
                    {/* <Link to="https://responsively.app/" target="_blank" rel="noopener noreferrer" className='hover:text-green-600'>Responsively.app</Link> */}
                    {/* <div>Chrome Extension: Toggle Pestiscide</div> */}
                    {/* <div>Mongoose, dontenv, nodemon</div> */}
                    {/* <div>Heroku, GitHub, AWS S3, Mongo atlas</div> */}
                    {/* <div>FontAwesome, Icon?</div>
                    <div>Semantics</div>
                    <div>CRUD operations</div>
                    <div>RESTful api</div>
                    <div>Experience with cross-browser compatibility testing</div>
                    <div>Familiar with browser testing and debugging</div>
                    <div>Knowledge of SEO principles</div>
                    <div>In-depth understanding of the entire web development process (design, development and deployment)</div>
                    <div>Familiarity with software like Adobe Suite, Photoshop and content management systems</div>
                  
                    <div>Responsive Web Design</div>
                    <div>CSS Preprocessors</div> */}
                    
                 
                </div>
                {/* <div className="w-1/2 min-h-[70vh] flex flex-col text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px]"> */}
                    {/* <div>HTML</div>
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
                    <div>Stay up-to-date on emerging technologies</div> */}
                    {/* </div> */}
            </div>
        </div>
    )
}

export default Skills