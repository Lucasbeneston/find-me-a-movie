import React from "react";
import styled, { keyframes, css } from "styled-components";
import PropTypes from "prop-types";
import color from "../../styles/variables";
import device from "../../styles/breakpoints";

// Style
const colorVariation = keyframes`
0% {
  color: ${color.blueWhale};
}
35% {
  color: ${color.ceruleanBlue};
}
65% {
  color: ${color.javaGreen};
}
100% {
  color: ${color.blueWhale};
}
`;
const animation = css`
  animation: ${colorVariation} 50s infinite linear;
`;
const Button = styled.button`
  position: fixed;
  width: 50%;
  height: 50px;
  bottom: 30px; // Footer height
  left: 50%;
  margin-bottom: 10px;
  transform: translate(-50%);
  color: ${color.blueWhale};
  ${(props) => (props.active ? null : animation)}
  background-color: currentColor;
  border: none;
  border-radius: 25px;
  outline: none;
  font-size: 1.4rem;
  text-transform: uppercase;
  transition: background-color 0.25s ease-in-out, transform 0.25s ease-in-out;
  z-index: 200;
  cursor: pointer;

  &:active {
    background-color: ${color.ceruleanBlue};
    transform: translate(-50%) scale(0.95);
    transition: all 0.25s ease-in-out;
  }

  @media ${device.portraitBrowserPage} {
    width: 40%;
  }
  @media ${device.tablet} {
    width: 30%;
  }
  @media ${device.tablet} {
    width: 25%;
  }
`;
const Title = styled.h2`
  color: ${color.offWhite};
`;

export default function SearchButton({ startRandom, onClickEvent, title }) {
  return (
    <Button active={startRandom} onClick={onClickEvent}>
      <Title>{title}</Title>
    </Button>
  );
}

// PropTypes

SearchButton.defaultProps = {
  startRandom: null,
};

SearchButton.propTypes = {
  startRandom: PropTypes.bool,
  onClickEvent: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
