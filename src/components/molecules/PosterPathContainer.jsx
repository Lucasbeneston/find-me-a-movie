import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import color from "../../styles/variables";

// Component
import PosterPath from "../atoms/PosterPath";

// Style
const Container = styled.div`
  width: ${(props) => (props.active ? "45vw" : "55vw")};
  height: ${(props) => (props.active ? "65vw" : "80vw")};
  background-color: ${color.blueWhale};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border: 10px solid ${color.offWhite};
  border-radius: 25px;
  display: flex;
  justify-content: center;
  transition: all 0.5s ease-out;
  z-index: 151;
`;

export default function PosterPathContainer({
  startRandom,
  srcPosterPath,
  srcTitle,
}) {
  return (
    <Container active={startRandom}>
      {!startRandom ? null : (
        <PosterPath srcPosterPath={srcPosterPath} srcTitle={srcTitle} />
      )}
    </Container>
  );
}

// PropTypes
PosterPathContainer.defaultProps = {
  startRandom: null,
  srcPosterPath: null,
  srcTitle: null,
};
PosterPathContainer.propTypes = {
  startRandom: PropTypes.bool,
  srcPosterPath: PropTypes.string,
  srcTitle: PropTypes.string,
};
