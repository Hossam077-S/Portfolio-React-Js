import "./intro.scss";
import "../rubberband/rubberband.css";
import { init } from 'ityped';
import { useEffect, useRef } from "react";
import RubberbandIntro from "./RubberbandIntro";
 
const Intro = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Designer", "Content Creator"],
        });
        
    }, [])

    return (
        <div className="intro" id="intro">
            <RubberbandIntro />
            <div className="left" id="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2 className="intro1" id="intro1">Hi There, I'm </h2>
                    <h1 className="intro2" id="intro2">Hossam Sayouf</h1>
                    <h3 id="intro3">Web <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    );   
}

export default Intro;
