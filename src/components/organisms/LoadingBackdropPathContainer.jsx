import React from "react";
import styled from "styled-components";
import color from "../../styles/variables";

// Components
import FadeEffectBackground from "../atoms/FadeEffectBackground";

// Styles
const Container = styled.div`
  width: 100%;
  height: 50vh;
  background-color: ${color.blueWhale};
  position: relative;
  transition: height 0.5s ease-out;
`;
const PosterPathContainer = styled.div`
  width: 45vw;
  height: 65vw;
  background-color: ${color.blueWhale};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border: 10px solid ${color.offWhite};
  border-radius: 25px;
  display: flex;
  justify-content: center;
`;
export default function LoadingBackdropPathContainer() {
  return (
    <Container>
      <FadeEffectBackground />
      <PosterPathContainer />
    </Container>
  );
}
