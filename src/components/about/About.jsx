import './About.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

const About = () => {
  const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: false,
  //     backDelya: 1500,
  //     backSpeed: 60,
  //     strings: ['Developer', 'Designer'],
  //   });
  // }, []);

  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Omur</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default About;
