import React from 'react';
import './loading.css';
import Intro from '../intro/Intro';

const Loading = () => {
    const handleNothing = () => {
        return null;
    }
    return (
        <div>
            <div className="bg" />
            <a href={handleNothing} className="anetwork"><span></span></a>
            <div className="text"><a href={handleNothing}>Welcome to My-Portfolio</a></div>
            <div className="finish" id="finish">
                <Intro />
            </div>
        </div>
    )
}

export default Loading

