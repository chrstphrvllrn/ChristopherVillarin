import React from 'react'
import NavBar from './NavBar.js'

const History = () => {
    return (

        <div>
            <NavBar />
            <div className="w-full flex flex-col md:flex-row text-[#030303] font-light  ">
                <div className="w-full min-h-[70vh] flex flex-col text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px]"> {/**/}

                    <h1>Where I've Been..</h1>
                    <h2>Hogarth Manila</h2>
                    <h2>Smartly</h2>
                    <h2>Sizmek</h2>
                </div>
            </div>
        </div>
    )
}

export default History