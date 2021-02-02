import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import color from "../../styles/variables";

// Style
const Button = styled.button`
  position: fixed;
  width: 50%;
  height: 50px;
  bottom: 30px; // Footer height
  left: 50%;
  margin-bottom: 10px;
  transform: translate(-50%);
  background-color: ${color.blueWhale};
  color: ${color.offWhite};
  border: none;
  border-radius: 25px;
  outline: none;
  font-size: 1.4rem;
  text-transform: uppercase;
  transition: background-color 0.25s ease-in-out, transform 0.25s ease-in-out;
  z-index: 200;

  &:active {
    background-color: ${color.ceruleanBlue};
    transform: translate(-50%) scale(0.95);
    transition: all 0.25s ease-in-out;
  }
`;

export default function SearchButton({ onClickEvent, title }) {
  return <Button onClick={onClickEvent}>{title}</Button>;
}

// PropTypes
SearchButton.propTypes = {
  onClickEvent: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
