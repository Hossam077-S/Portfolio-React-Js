import "./intro.scss";
import "../rubberband/rubberband.css";
import { init } from 'ityped';
import { useEffect, useRef } from "react";
import RubberbandIntro from "./RubberbandIntro";
import PlaySong from "../Audio/PlaySong";
import ChangeColor from "../ChangeColor/ChangeColor";

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
                <div className="imgContainer" id="imgContainerIntro">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="button-content">
                    <div className="right-song">
                        <PlaySong />
                    </div>
                    <div className="left-color">
                        <ChangeColor />
                    </div>
                </div>
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
