import React, { useRef } from 'react'
import './UpcomingEvents.css'
import { upcomingevnt } from '../../Data/EventsData'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const UpcomingEvents = () => {
    let upcomevntHolder = useRef();

    function fwdNextgo() {
        upcomevntHolder.current.scrollLeft += upcomevntHolder.current.offsetWidth;
    }

    function backPrevbk() {
        upcomevntHolder.current.scrollLeft -= upcomevntHolder.current.offsetWidth;
    }

    return (
        <>
            <div className="upcom-evnts-top">
                <h1>Upcoming <span style={{ fontFamily: "Barlow Condensed", color: "#224259", fontWeight: "900" }}>Events</span></h1>
            </div>

            <div className="upcomi-evvnts-parnt" ref={upcomevntHolder}>
                {upcomingevnt.map((item) => {
                    return (
                        
                            <div className="upcom-evnt-indi" key={item.id}>
                                <div className="img-upcom-evnt">
                                    <img src={item.img}
                                        alt="" />
                                </div>

                                <div className="title-announc-upcom-evnt">
                                    <h1>{item.title}</h1>
                                </div>

                                <div className="dte-locn-upcomi-event">
                                    <h2>{item.date}</h2>
                                </div>

                                <div className="btns-info-klp">
                                    <div className="btns-1-ent-indi">
                                        <button>Research</button>
                                    </div>
                                    <div className="btns-1-ent-indi">
                                        <button>Srijan</button>
                                    </div>
                                </div>

                                <div className="abt-content-indi-evnt">
                                    <h3>{item.content}</h3>
                                </div>
                            </div>
                        
                    );
                })}
            </div>
            <div className="btns">
                <button className="prev btn-testimonial" onClick={backPrevbk}>
                    <AiOutlineArrowLeft className="btn-indi-testimonial" />
                </button>
                <button className="next btn-testimonial" onClick={fwdNextgo}>
                    <AiOutlineArrowRight className="btn-indi-testimonial" />
                </button>
            </div>
        </>
    )
}

export default UpcomingEvents