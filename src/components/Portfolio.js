import React from 'react'
import NavBar from './NavBar.js'
import IconPlay from './icons/play.js'
import supermario from '../supermario-thumb.png';
import banner2 from '../banner_2.png';
import banner3 from '../banner_2.png';
import banner4 from '../banner_2.png';
import banner5 from '../banner_2.png';
import banner6 from '../banner_2.png';
import banner7 from '../banner_2.png';
import banner8 from '../banner_2.png';

import blank from '../blank.png';
// import banner2 from '../300x250_2.jpg';
// import banner3 from '../300x250_3.jpg';
// import banner4 from '../300x250_4.jpg';
// import banner5 from '../300x250_5.jpg';
// import banner6 from '../300x250_6.jpg';
// import banner7 from '../300x250_7.jpg';
// import banner8 from '../300x250_8.jpg';

const Portfolio = () => {
    return (
        // bg-[url('https://fastly.picsum.photos/id/972/1600/900.jpg?grayscale&hmac=W638WD8WqRiozMXbLvTcudGIQ8EFsXe7ljBjSXFSCz0')] bg-center
        //  style={{ backgroundImage: `url(${bgImage})` }}
        <div>
            <NavBar />
            <div className="w-full flex flex-col md:flex-row text-[#030303] font-light  ">
                <div className="w-full min-h-[40vh] flex flex-col text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px] gap-3">
                    {/* <p>MY PORTFOLIO</p> */}
                    <div className="w-full h-full flex flex-row">
                        <div className="w-1/4 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[260px] h-[217px] flex justify-center items-center cursor-pointer relative">
                                <img src={supermario} />
                                <div className="bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.2)]   w-full h-full absolute" ></div>
                                <IconPlay></IconPlay>
                            </div>
                            <p className="text-[0.55rem] font-bold">ANIMATED AD</p>
                        </div>

                        <div className="w-1/4 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[260px] h-[217px] flex justify-center items-center cursor-pointer relative">
                                <img src={banner2} />
                                <div className="bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.2)]    w-full h-full absolute" ></div>
                                <IconPlay></IconPlay>
                            </div>
                            <p className="text-[0.55rem] font-bold ">ANIMATED AD</p>
                        </div>
                        <div className="w-1/4 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[260px] h-[217px] flex justify-center items-center cursor-pointer relative">
                                <img src={banner3} />
                                <div className="bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.2)]    w-full h-full absolute" ></div>
                                <IconPlay></IconPlay>
                            </div>
                            <p className="text-[0.55rem] font-bold ">ANIMATED AD</p>
                        </div>
                        <div className="w-1/4 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[260px] h-[217px] flex justify-center items-center cursor-pointer relative">
                                <img src={banner4} />
                                <div className="bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.2)]    w-full h-full absolute" ></div>
                                <IconPlay></IconPlay>
                            </div>
                            <p className="text-[0.55rem] font-bold ">ANIMATED AD</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full flex flex-col md:flex-row text-[#030303] font-light  ">
                <div className="w-full min-h-[40vh] flex flex-col text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px] gap-3">
                    {/* <p>MY PORTFOLIO</p> */}
                    <div className="w-full h-full flex flex-row">
                        <div className="w-1/4 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[260px] h-[217px] flex justify-center items-center cursor-pointer relative">
                                <img src={banner5} />
                                <div className="bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.2)]    w-full h-full absolute" ></div>
                                <IconPlay></IconPlay>
                            </div>
                            <p className="text-[0.55rem] font-bold ">ANIMATED AD</p>
                        </div>

                        <div className="w-1/4 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[260px] h-[217px] flex justify-center items-center cursor-pointer relative">
                                <img src={banner6} />
                                <div className="bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.2)]    w-full h-full absolute" ></div>
                                <IconPlay></IconPlay>
                            </div>
                            <p className="text-[0.55rem] font-bold ">ANIMATED AD</p>
                        </div>
                        <div className="w-1/4 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[260px] h-[217px] flex justify-center items-center cursor-pointer relative">
                                <img src={banner7} />
                                <div className="bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.2)]    w-full h-full absolute" ></div>
                                <IconPlay></IconPlay>
                            </div>
                            <p className="text-[0.55rem] font-bold ">ANIMATED AD</p>
                        </div>
                        <div className="w-1/4 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[260px] h-[217px] flex justify-center items-center cursor-pointer relative">
                                <img src={banner8} />
                                <div className="bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.2)]    w-full h-full absolute" ></div>
                                <IconPlay></IconPlay>
                            </div>
                            <p className="text-[0.55rem] font-bold ">ANIMATED AD</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full flex flex-col md:flex-row text-[#030303] font-light  ">
                <div className="w-full min-h-[40vh] flex flex-col text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px] gap-3">
                    {/* <p>MY PORTFOLIO</p> */}
                    <div className="w-full h-full flex flex-row">
                        <div className="w-1/4 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[260px] h-[217px] flex justify-center items-center cursor-pointer relative">
                                <img src={blank} />
                                <div className="bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.2)]    w-full h-full absolute" ></div>
                                <IconPlay></IconPlay>
                            </div>
                            <p className="text-[0.55rem] font-bold ">ANIMATED AD</p>
                        </div>

                        <div className="w-1/4 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[260px] h-[217px] flex justify-center items-center cursor-pointer relative">
                                <img src={blank} />
                                <div className="bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.2)]    w-full h-full absolute" ></div>
                                <IconPlay></IconPlay>
                            </div>
                            <p className="text-[0.55rem] font-bold ">ANIMATED AD</p>
                        </div>
                        <div className="w-1/4 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[260px] h-[217px] flex justify-center items-center cursor-pointer relative">
                                <img src={blank} />
                                <div className="bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.2)]    w-full h-full absolute" ></div>
                                <IconPlay></IconPlay>
                            </div>
                            <p className="text-[0.55rem] font-bold ">ANIMATED AD</p>
                        </div>
                        <div className="w-1/4 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[260px] h-[217px] flex justify-center items-center cursor-pointer relative">
                                <img src={blank} />
                                <div className="bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.2)]    w-full h-full absolute" ></div>
                                <IconPlay></IconPlay>
                            </div>
                            <p className="text-[0.55rem] font-bold ">ANIMATED AD</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full flex flex-col md:flex-row text-[#030303] font-light  ">
                <div className="w-full min-h-[40vh] flex flex-col text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px] gap-3">
                    {/* <p>MY PORTFOLIO</p> */}
                    <div className="w-full h-full flex flex-row">
                        <div className="w-1/4 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[260px] h-[217px] flex justify-center items-center cursor-pointer relative">
                                <img src={blank} />
                                <div className="bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.2)]    w-full h-full absolute" ></div>
                                <IconPlay></IconPlay>
                            </div>
                            <p className="text-[0.55rem] font-bold ">ANIMATED AD</p>
                        </div>

                        <div className="w-1/4 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[260px] h-[217px] flex justify-center items-center cursor-pointer relative">
                                <img src={blank} />
                                <div className="bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.2)]    w-full h-full absolute" ></div>
                                <IconPlay></IconPlay>
                            </div>
                            <p className="text-[0.55rem] font-bold ">ANIMATED AD</p>
                        </div>
                        <div className="w-1/4 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[260px] h-[217px] flex justify-center items-center cursor-pointer relative">
                                <img src={blank} />
                                <div className="bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.2)]    w-full h-full absolute" ></div>
                                <IconPlay></IconPlay>
                            </div>
                            <p className="text-[0.55rem] font-bold ">ANIMATED AD</p>
                        </div>
                        <div className="w-1/4 h-full flex flex-col  justify-center items-center gap-5">
                            <div className="w-[260px] h-[217px] flex justify-center items-center cursor-pointer relative">
                                <img src={blank} />
                                <div className="bg-[rgba(0,0,0,0.05)] hover:bg-[rgba(0,0,0,0.2)]    w-full h-full absolute" ></div>
                                <IconPlay></IconPlay>
                            </div>
                            <p className="text-[0.55rem] font-bold ">ANIMATED AD</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio