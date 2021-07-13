import { useState, useEffect, useRef } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { SkipPrevious } from "@material-ui/icons"
import { SkipNext } from "@material-ui/icons"
import PauseIcon from '@material-ui/icons/Pause';
import ShareIcon from '@material-ui/icons/Share';
import Image from "next/image"

function Footer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)


    const audioPlayer = useRef();
    const progressBar = useRef();

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration)
        setDuration(seconds);
        progressBar.current.max = seconds;

    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readystate])

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);

        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60)
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
            //   animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause();
            //   cancelAnimationFrame(animationRef.current);
        }
    }



    return (
        <div className="footer">
            <div className="footer-left">
                <Image src="/img/ChrisKaiga.jpg" className="albumLogo" height={60} width={60} alt="" objectFit="contain" />
                <div className="song-infor">
                    <h4 className="sm:mb-2 ">I want</h4>
                    <p className="text-xs">Chris Kaiga</p>
                </div>

            </div>
            <div className=" flex-[40%] flex flex-col justify-center items-center ">
                <div className="footer-center">
                    <audio ref={audioPlayer} src="/Hapo-Tu.mp3" type="audio" preload="metadata" />
                    <button className="px-12"><SkipPrevious className="footer-icon" /></button>
                    <button className="px-12" onClick={togglePlayPause}>{isPlaying ? <PauseIcon className="footer-large" /> : <PlayArrowIcon className="footer-large" />}  </button>
                    <button className="px-12" ><SkipNext className="footer-icon" /></button>
                </div>
                <div className="flex flex-row mt-2" >
                    <div>{ calculateTime  (currentTime)}</div>
                    <input className="progressbar" type="range" defaultValue="0" ref={progressBar}  />
                    <div>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
                </div>
            </div>
            <div className="footer-right">
                <ShareIcon className="footer-icon" />
            </div>

        </div>
    )
}

export default Footer
