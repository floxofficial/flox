import React, { useState } from 'react';
import Lottie from 'lottie-web-react';

const watchAnimationData = require('../../assets/json/Flox - logo motion - 128x128.json');

const renderer = 'svg';
const rendererSettings = {
  preserveAspectRatio: 'xMinYMin slice',
};

const LogoMotion = () => {
  const [playingState, setPlayingState] = useState('play');
  const [autoplay, setAutoplay] = useState(false);
  const [loop, setLoop] = useState(true);
  const [animationData, setAnimationData] = useState(watchAnimationData);
  const [speed, setSpeed] = useState(1);
  const [direction, setDirection] = useState(1);

  return (
    <div>
      <Lottie
        options={{
          renderer,
          loop,
          autoplay,
          animationData,
          rendererSettings,
        }}
        playingState={playingState}
        speed={speed}
        direction={direction}
      />
    </div>
  );
};

export default LogoMotion;
