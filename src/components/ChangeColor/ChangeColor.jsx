import React, { useState } from 'react';
import './changeColor.css';

const ChangeColor = () => {
    const [checked, setChecked] = useState(false);

    const grayColor = "#D8D6D3";
    const blackColor = "#1C1E1F";
    const darkBlueColor = "#15034A";
    const whiteColor = "#FFFFFF";
    const darkCrimson= "#A51532";

    var i;

    const handleChangeColor = () => {
        var getTopbar = document.getElementById("topbar"),
            getTopbar1 = document.getElementById("top1"),
            getTopbar2 = document.getElementById("top2"),
            getTopbar3 = document.getElementById("top3"),
            getTopbar4 = document.getElementById("person"),
            getTopbar5 = document.getElementById("mail"),
            getTopbar6 = document.getElementById("span1"),
            getTopbar7 = document.getElementById("span2"),
            getTopbar8 = document.getElementById("span3"),

            // -------------------------------------------------------------------------
            getIntro = document.getElementById("intro"),
            getIntroEl1 = document.getElementById("intro1"),
            getIntroEl2 = document.getElementById("intro2"),
            getIntroEl3 = document.getElementById("intro3"),
            getIntroEl4 = document.getElementById("imgContainerIntro"),

            // -------------------------------------------------------------------------
            getPortfolio = document.getElementById("portfolio"),
            getPort1 = document.getElementById("port1"),
            getActivePortfolioList = document.getElementById("portfolioList active"),
            getPortfolioList = document.getElementsByClassName("portfolioList"),

            // -------------------------------------------------------------------------
            getWorkback = document.getElementById("work"), // For Whole Background
            getWork = document.getElementsByClassName("item"),
            getWork1 = document.getElementsByClassName("title"),
            getWork2 = document.getElementsByClassName("workp"),
            getWork3 = document.getElementsByClassName("wordproj"),
            getWork4 = document.getElementsByClassName("imgContainerWork"),

            // -------------------------------------------------------------------------
            getTestimonials = document.getElementById("testimonials"), // For Whole Background
            getTestimonials1 = document.getElementById("tes1"),
            getTestimonials2 = document.getElementsByClassName("card"),

            // -------------------------------------------------------------------------contact
            getContact = document.getElementById("contact"),
            getContact1 = document.getElementById("con1"),
            getContact2 = document.getElementById("con2"),
            getContact3 = document.getElementById("con3");

        if (getTopbar || getIntro) { 
            let state = !checked;
            setChecked(state);
            if(state){
                getTopbar.style.backgroundColor = blackColor; // For Whole Background Topbar
                getTopbar1.style.color = grayColor;
                getTopbar2.style.color = grayColor; 
                getTopbar3.style.color = grayColor; 
                getTopbar4.style.color = grayColor; 
                getTopbar5.style.color = grayColor; 
                getTopbar6.style.backgroundColor = grayColor;
                getTopbar7.style.backgroundColor = grayColor;
                getTopbar8.style.backgroundColor = grayColor;
                
                // ------------------------------------------------------------------------- Intro
                getIntro.style.backgroundColor = blackColor; // For Whole Background
                getIntroEl1.style.color = grayColor;
                getIntroEl2.style.color = grayColor;
                getIntroEl3.style.color = grayColor;
                getIntroEl4.style.backgroundColor = darkCrimson;
                getIntro.style.transition = "all 1.3s ease";

                // ------------------------------------------------------------------------- Portfolio
                getPortfolio.style.backgroundColor = blackColor; // For Whole Background
                getPort1.style.color = grayColor;
                
                for(i = 0; i < getPortfolioList.length; i++){
                    getPortfolioList[i].style.color = grayColor;
                }

                // ------------------------------------------------------------------------- Work
                getWorkback.style.backgroundColor = darkCrimson;
                for(i = 0; i < getWork.length; i++){
                    getWork[i].style.backgroundColor = blackColor;
                }
                for(i = 0; i < getWork1.length; i++){
                    getWork1[i].style.color = grayColor;
                    getWork2[i].style.color = grayColor;
                    getWork3[i].style.color = grayColor;
                    getWork4[i].style.backgroundColor = "#662710";
                }

                // ------------------------------------------------------------------------- Testimonials
                getTestimonials.style.backgroundColor = blackColor;
                getTestimonials1.style.color = grayColor;
                for(i = 0; i < getTestimonials2.length; i++){
                    getTestimonials2[i].style.backgroundColor = grayColor;
                }

                // ------------------------------------------------------------------------- Contact
                getContact.style.backgroundColor = blackColor;
                getContact1.style.color = grayColor;
                getContact2.style.backgroundColor = blackColor;
                getContact3.style.backgroundColor = blackColor;

            } else {
                getTopbar.style.backgroundColor = whiteColor; // For Whole Background else Topbar
                getTopbar1.style.color = darkBlueColor;
                getTopbar2.style.color = darkBlueColor;
                getTopbar3.style.color = darkBlueColor;
                getTopbar4.style.color = darkBlueColor;
                getTopbar5.style.color = darkBlueColor;
                getTopbar6.style.backgroundColor = darkBlueColor;
                getTopbar7.style.backgroundColor = darkBlueColor;
                getTopbar8.style.backgroundColor = darkBlueColor;

                // ------------------------------------------------------------------------- else Intro
                getIntro.style.backgroundColor = whiteColor;
                getIntroEl1.style.color = blackColor;
                getIntroEl2.style.color = blackColor;
                getIntroEl3.style.color = blackColor;
                getIntroEl4.style.backgroundColor = "crimson";

                // ------------------------------------------------------------------------- else Portfolio
                getPortfolio.style.backgroundColor = whiteColor; // For Whole Background
                getPort1.style.color = blackColor;
                for(i = 0; i < getPortfolioList.length; i++){
                    getPortfolioList[i].style.color = blackColor;
                    getActivePortfolioList.style.color = whiteColor;
                }
                
                // ------------------------------------------------------------------------- else Work
                getWorkback.style.backgroundColor = "crimson";
                for(i = 0; i < getWork.length; i++){
                    getWork[i].style.backgroundColor = whiteColor;
                }
                for(i = 0; i < getWork1.length; i++){
                    getWork1[i].style.color = blackColor;
                    getWork2[i].style.color = blackColor;
                    getWork3[i].style.color = blackColor;
                    getWork4[i].style.backgroundColor = "#F5B39B";
                }

                // ------------------------------------------------------------------------- else Testimonials
                getTestimonials.style.backgroundColor = whiteColor;
                getTestimonials1.style.color = blackColor;
                for(i = 0; i < getTestimonials2.length; i++){
                    getTestimonials2[i].style.backgroundColor = whiteColor;
                }

                // ------------------------------------------------------------------------- else Contact
                getContact.style.backgroundColor = whiteColor;
                getContact1.style.color = whiteColor;
                getContact2.style.backgroundColor = whiteColor;
                getContact3.style.backgroundColor = whiteColor;
            }
        }
    }

    return (
        <div className="changeColor">
            <input type="checkbox" id="toggle_checkbox" onChange={handleChangeColor} />
            <label htmlFor="toggle_checkbox" />
        </div>
    )
}

export default ChangeColor
