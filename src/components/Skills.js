import React from 'react'
import NavBar from './NavBar.js'
import mongodb from '../mongodb.svg';
import exoressjs from '../Expressjs.png';
import reactjs from '../reactjs.svg';
import nodejs from '../nodejs.svg';
import tailwindcss from '../tailwindcss.svg';
import awss3 from '../awss3.svg';

const Skills = () => {
    return (
        <div >
            <NavBar />
            <div className="w-full flex flex-col md:flex-row text-[#030303]">
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
                </div>
            </div>
        </div>
    )
}

export default Skills