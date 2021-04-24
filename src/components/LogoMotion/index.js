import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/json/Flox - logo motion - 128x128.json';
import mainAnimationData from '../../assets/json/Flox - logo motion - 256x256.json';

const LogoMotion = ({ main }) => (
  <div>
    <Lottie animationData={main ? mainAnimationData : animationData} />
  </div>
);

export default LogoMotion;
