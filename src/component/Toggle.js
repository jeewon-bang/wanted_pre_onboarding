import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ToggleContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  cursor: pointer;

  > .toggle-container {
    width: 48px;
    height: 24px;
    border-radius: 30px;
    background-position: right;
    background: linear-gradient(to left, #8b8b8b 50%, #4000c7 50%) right;
    background-size: 200%;
    transition: 1s;
    &.toggle--checked {
      background-position: left;
      background: linear-gradient(to right, #4000c7 50%, #8b8b8b 50%) left;
      background-size: 200%;
      transition: 1s;
    }
  }

  > .toggle-circle {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: 1s;
    &.toggle--checked {
      left: 27px;
      transition: 1s;
    }
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Toggle = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const toggleHandler = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <Container>
      <ToggleContainer onClick={toggleHandler}>
        <div
          className={`toggle-container ${isToggleOn ? "toggle--checked" : ""}`}
        />
        <div
          className={`toggle-circle ${isToggleOn ? "toggle--checked" : ""}`}
        />
      </ToggleContainer>
      <Description>
        <div>{isToggleOn ? "Toggle Switch ON" : "Toggle Switch OFF"}</div>
      </Description>
    </Container>
  );
};

export default Toggle;
