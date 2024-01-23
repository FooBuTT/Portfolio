import { Text } from "@react-three/drei";
import React from "react";

const NavigateSection = (props) => {
  const { children } = props;
  return <section className="NavigateContainer">{children}</section>;
};

export default function Interface(props) {
  const { onMonitor, setOnMonitor } = props;
  return (
    <div className="NavigateWrap">
      <HomeSection onMonitor={onMonitor} setOnMonitor={setOnMonitor} /> /
      <NavigateSection>
        <h1>About</h1>
      </NavigateSection>
      <NavigateSection>
        <h1>Skill</h1>
      </NavigateSection>
      <NavigateSection>
        <h1>Contact me</h1>
      </NavigateSection>
    </div>
  );
}

const HomeSection = (props) => {
  const { setOnMonitor, onMonitor } = props;

  const zoomMonitor = () => {
    setOnMonitor(!onMonitor);
  };
  return (
    <NavigateSection>
      <div className="homeSection">
        \<h1>Hi everyone!!!</h1>
        <h3>My name is Oleg, and I am a FullStack developer.</h3>
        <h3>This is my Portfolio page.</h3>
        <p>
          In this project, I use the JavaScript, React, R3f, and React three
          Drei stack with Vite.
        </p>
        <p>Please contact me for your offer!</p>
        <h3>Push the tempo!!!</h3>
        <button className="contactMeButton">Contact me!</button>
        <button
          className="menu"
          onClick={() => {
            zoomMonitor();
          }}
        >
          Go to menu
        </button>
        <button className="menu">Home</button>
      </div>
    </NavigateSection>
  );
};
