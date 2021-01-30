import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import color from "../../styles/variables";

// Search Button
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
`;

export default function SearchButton({ onClickEvent, description }) {
  return <Button onClick={onClickEvent}>{description}</Button>;
}

SearchButton.propTypes = {
  onClickEvent: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};
