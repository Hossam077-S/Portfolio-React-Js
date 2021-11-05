import { React, useState } from 'react';
import './playSong.css';
import music from './THREE.mp3';

const PlaySong = () => {
    const [activeSong, setActiveSong] = useState(false);
    var [saveSong, setSaveSong] = useState({});

    // var drake = {
    //     value: 3,
    //     name: 'Energy',
    //     artist: 'Drake',
    //     audio: music, //
    // };

    function handlePlayPause() {
        let states = !activeSong;
        setActiveSong(states);

        if (states) {
            var myAudio = document.getElementById("myAudio");  
            playSong(myAudio); // load song and play it
        }
        else {
            togglePause(saveSong); // pause song
        }

    }

    function playSong(myAudio) {
        if (myAudio) {
            myAudio.play();
            setSaveSong(myAudio);
            return myAudio;
        }
        // var Song = new Audio(drake.audio);
        // Song.play();
        // setSaveSong(Song);
        // return Song;
    }

    function togglePause(saveSong) {
        if (saveSong) {
            saveSong.pause();
            setSaveSong({});
        }
    }

    function handleEnded() {
        setActiveSong(false);
        setSaveSong({});
    }

    return (
        <div className="container">
            <div className="button r" id="button-4">    
                <input type="checkbox" className="checkbox" onChange={handlePlayPause} checked={activeSong} />
                <div className="knobs" />
                <div className="layer" />
            </div>
            <audio id="myAudio" onEnded={handleEnded}>
                <source src={music} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}

export default PlaySong
