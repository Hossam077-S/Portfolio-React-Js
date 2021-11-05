import "./menu.scss";
import "../rubberband/rubberband.css";
import RubberbandMenu from "./RubberbandMenu";

const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
           <RubberbandMenu />
            <ul>
               <li onClick={() => setMenuOpen(false)}>
                   <a href="#intro" className="menu1">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                   <a href="#portfolio" className="menu2">Portfolio</a>
                </li> 
                <li onClick={() => setMenuOpen(false)}>
                   <a href="#work" className="menu3">Works</a>
                </li> 
                <li onClick={() => setMenuOpen(false)}>
                   <a href="#testimonials" className="menu4">Testimonials</a>
                </li> 
                <li onClick={() => setMenuOpen(false)}>
                   <a href="#contact" className="menu5">Contact</a>
                </li>  
            </ul>
        </div>
    )
}

export default Menu
