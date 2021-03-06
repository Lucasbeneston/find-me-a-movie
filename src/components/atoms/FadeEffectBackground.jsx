import React from "react";
import styled from "styled-components";
import color from "../../styles/variables";

// Style
const FadeEffect = styled.div`
  height: calc(100% + 2px);
  width: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.25) 60%,
    ${color.offWhite} 80%,
    ${color.offWhite}
  );
  position: absolute;
  bottom: -2px;
`;

export default function FadeEffectBackground() {
  return <FadeEffect />;
}
