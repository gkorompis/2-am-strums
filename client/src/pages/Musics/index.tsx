import { useState, useEffect, useRef } from 'react';
import globalStates from '../../utils/global';
import { useContext } from "react";
import "./Musics.css";

const Musics = () => {
  const [color, setColor] = useState('red');
  const screen1Ref = useRef(null) as any;
  const screen2Ref = useRef(null) as any;
  const screen3Ref = useRef(null) as any;

  const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowHeight = globalContext && globalContext.windowHeight;

  const handleScroll = () => {
    const screen1 = screen1Ref.current.getBoundingClientRect();
    const screen2 = screen2Ref.current.getBoundingClientRect();
    const screen3 = screen3Ref.current.getBoundingClientRect();

    if (screen1.top <= windowHeight / 2 && screen1.bottom > windowHeight / 2) {
      setColor('yellow');
    } else if (screen2.top <= windowHeight / 2 && screen2.bottom > windowHeight / 2) {
      setColor('blue');
    } else if (screen3.top <= 0 && screen3.bottom > 0) {
      setColor('green');
    }
  };

  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div>
      <div ref={screen1Ref} className="screen screen1"></div>
      <div ref={screen2Ref} className="screen screen2"></div>
      <div ref={screen3Ref} className="screen screen3"></div>
      <div className="squared" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default Musics;