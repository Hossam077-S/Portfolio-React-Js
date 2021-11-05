import React, { useState } from 'react';
import './changeColor.css';

const ChangeColor = () => {
    const [checked, setChecked] = useState(false);

    const grayColor = "#D8D6D3";
    const blackColor = "#1C1E1F";
    const darkBlueColor = "#15034A";
    const whiteColor = "#FFFFFF";

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

            // -------------------------------------------------------------------------

            getPortfolio = document.getElementById("portfolio"),
            getPort1 = document.getElementById("port1"),
            getActivePortfolioList = document.getElementById("portfolioList active"),
            getPortfolioList = document.getElementsByClassName("portfolioList");


        if (getTopbar || getIntro) { 
            let state = !checked;
            setChecked(state);
            if(state){
                getTopbar.style.backgroundColor = blackColor; // For Whole Background
                getTopbar1.style.color = grayColor;
                getTopbar2.style.color = grayColor; 
                getTopbar3.style.color = grayColor; 
                getTopbar4.style.color = grayColor; 
                getTopbar5.style.color = grayColor; 
                getTopbar6.style.backgroundColor = grayColor;
                getTopbar7.style.backgroundColor = grayColor;
                getTopbar8.style.backgroundColor = grayColor;
                
                // -------------------------------------------------------------------------
                getIntro.style.backgroundColor = blackColor; // For Whole Background
                getIntroEl1.style.color = grayColor;
                getIntroEl2.style.color = grayColor;
                getIntroEl3.style.color = grayColor;
                getIntro.style.transition = "all 1.3s ease";

                // -------------------------------------------------------------------------
                getPortfolio.style.backgroundColor = blackColor; // For Whole Background
                getPort1.style.color = grayColor;
                for(i = 0; i < getPortfolioList.length; i++){
                    getPortfolioList[i].style.color = grayColor;
                }

            } else {
                getTopbar.style.backgroundColor = whiteColor; // For Whole Background
                getTopbar1.style.color = darkBlueColor;
                getTopbar2.style.color = darkBlueColor;
                getTopbar3.style.color = darkBlueColor;
                getTopbar4.style.color = darkBlueColor;
                getTopbar5.style.color = darkBlueColor;
                getTopbar6.style.backgroundColor = darkBlueColor;
                getTopbar7.style.backgroundColor = darkBlueColor;
                getTopbar8.style.backgroundColor = darkBlueColor;

                // -------------------------------------------------------------------------
                getIntro.style.backgroundColor = whiteColor;
                getIntroEl1.style.color = blackColor;
                getIntroEl2.style.color = blackColor;
                getIntroEl3.style.color = blackColor;

                // -------------------------------------------------------------------------
                getPortfolio.style.backgroundColor = whiteColor; // For Whole Background
                getPort1.style.color = blackColor;

                for(i = 0; i < getPortfolioList.length; i++){
                    getPortfolioList[i].style.color = blackColor;
                    getActivePortfolioList.style.color = whiteColor;
                }


            }
        }
    }

    return (
        <div>
            <input type="checkbox" id="toggle_checkbox" onChange={handleChangeColor} />
            <label htmlFor="toggle_checkbox" />
        </div>
    )
}

export default ChangeColor
