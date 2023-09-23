import React from "react";
import { useState, useRef } from "react";
import Header from "./Header";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;

  /* Add hover effect */
  &:hover {
    background-color: #0056b3;
  }
`;

export default function Homepage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div class="video-background" className="video-player-container">
      <Header />
      <video
        ref={videoRef}
        onClick={togglePlayPause}
        src={require("../pexels-tima-miroshnichenko-5319099 (2160p).mp4")}
        autoPlay
        loop
        muted
      />
      <div className="text-overlay">
        <p className="med-text">Fit-Track</p>
        <p className="large-text">Streaming fitness</p>
        <p className="large-text">for you.</p>
        <p className="small-text">One membership, thousands of workouts.</p>
        <p className="small-text">
          Get 30 days risk-free, and kickstart your fitness journey!
        </p>
        <div className="butt"></div>
        <StyledButton className="button-left">
          GET STARTED 30 DAYS RISK FREE
        </StyledButton>
      </div>
    </div>
  );
}
