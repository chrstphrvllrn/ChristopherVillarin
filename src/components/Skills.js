import React from 'react'
import NavBar from './NavBar.js'

const Skills = () => {
    return (
        <div>
            <NavBar />
            <div className="w-full flex flex-col md:flex-row text-[#030303] font-light  ">
                <div className="w-full min-h-[70vh] flex flex-col text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px]"> {/**/}
                    <div>ReactJS, TailwindCSS, NodeJS, ExpressJS, MongoDB</div>
                    <div>Mongoose, dontenv, nodemon</div>
                    <div>Heroku, GitHub, AWS S3, Mongo atlas</div>
                </div>
            </div>
        </div>
    )
}

export default Skills