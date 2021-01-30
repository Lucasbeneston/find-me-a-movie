import React from "react";
import styled from "styled-components";
import color from "../../styles/variables";

// Styles
const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.offWhite};
  z-index: 150;
`;
const Title = styled.h1`
  text-transform: uppercase;
`;

export default function Header() {
  return (
    <HeaderSection>
      <Title>Find me a movie</Title>
    </HeaderSection>
  );
}
