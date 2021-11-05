import "./topbar.scss";
import "../rubberband/rubberband.css";
import RubberbandTopbar from "./RubberbandTopbar";
import { Person, Mail } from "@material-ui/icons";
import PlaySong from "../Audio/PlaySong";
import ChangeColor from "../ChangeColor/ChangeColor";

const Topbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"topbar " + (menuOpen && "active")} id="topbar">
            <RubberbandTopbar />
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo" id="top1">HS-Coding</a>
                    <div className="itemContainer">
                        <Person className=" " id="person" />
                        <span className="top2" id="top2">81 360 534 </span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" id="mail"/>
                        <span className="top3" id="top3">hossam.sayouf1719@gmail.com</span>
                    </div>
                </div>
                <div className="center">
                    <div className="playSong">
                        <PlaySong />
                    </div>
                    <div className="ChangeColor">
                        <ChangeColor />
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1" id="span1"></span>
                        <span className="line2" id="span2"></span>
                        <span className="line3" id="span3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
