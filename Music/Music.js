import React, { useState } from 'react';
import './Music.css';

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(0);

  const musicFiles = ['./music.mp3', './music.mp3', './music.mp3'];

  const handlePlay = (src) => {
    setAudioSrc(src);
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentTrack((currentTrack + 1));
    setAudioSrc(musicFiles[currentTrack]);
    setIsPlaying(true);
  };

  return (
    <div className="MusicPlayer">
      <button onClick={() => handlePlay(musicFiles[currentTrack])}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      <button onClick={handlePause}>Pause</button>
      <button onClick={handleNext}>Next</button>
  
      {isPlaying && (
        <audio id='src' src={audioSrc} controls autoPlay onEnded={handleNext} />
      )}
    </div>
  );
};

export default Music;
