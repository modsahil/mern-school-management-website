import React from "react";
import './notice.css'
// import React, { useState } from 'react';

// const Marquee = () => {
//   const [isHovering, setIsHovering] = useState(false);


const Notice = () => {
    return (
        <section className="notice">

            <div className="container container__events">
                <div className="heading__notice">
                    <h2>Latest Update</h2>
                </div>

                <div className="event">
                    <div className="event-notice">

                        <div className="notice__head">
                            <h3>Notice</h3>
                            <ul>
                                <li><a href="#">2023-24</a></li>
                            </ul>

                        </div>
                        <div className="notice__content">
                            <marquee behavior="scroll" scrollamount="4" direction="up">
                                <ul>
                                    <li><a href="#">Collect TC from School <span>New</span></a></li>
                                    <li><a href="#">Collect TC from School <span>New </span></a></li>
                                    <li><a href="#">Collect TC from School <span>New</span></a></li>
                                    <li><a href="#">Collect TC from School <span>New</span></a></li>
                                </ul>
                            </marquee>
                        </div>
                    </div>

                    <div className="event-announcement">

                        <div className="announcement__head">
                            <h3>Announcement</h3>
                            <ul>
                                <li><a href="#">2023-24</a></li>
                            </ul>
                        </div>
                        <div className="announcement__content">
                            <marquee behavior="scroll" scrollamount="4" direction="up" id="scrolls">
                                <ul>
                                    <li><a href="#">Collect TC from School <span>New</span></a></li>
                                    <li><a href="#">Collect TC from School <span>New </span></a></li>
                                    <li><a href="#">Collect TC from School <span>New</span></a></li>
                                    <li><a href="#">Collect TC from School <span>New</span></a></li>
                                </ul>
                            </marquee>
                        </div>
                    </div>

                    <div className="event-news">

                        <div className="news__head">
                            <h3>News</h3>
                            <ul>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                        </div>
                        <div className="news__content">
                            <marquee behavior="scroll" scrollamount="4" direction="up" id="scrolls">
                                <ul>
                                    <li><a href="#">Collect TC from School <span>New</span></a></li>
                                    <li><a href="#">Collect TC from School <span>New </span></a></li>
                                    <li><a href="#">Collect TC from School <span>New</span></a></li>
                                    <li><a href="#">Collect TC from School <span>New</span></a></li>
                                </ul>
                            </marquee>
                        </div>
                    </div>
                </div>
            </div>















        </section>

    )
}


export default Notice