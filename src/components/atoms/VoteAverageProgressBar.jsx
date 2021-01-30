import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import color from "../../styles/variables";

// Styles
const ProgressBarContainer = styled.div`
  width: 100px;
  height: 10px;
  position: relative;
  background-color: ${color.blueWhale};
  border-radius: 5px;
`;
const ProgressBarContainerValue = styled.div`
  position: absolute;
  left: 0;
  width: ${(props) =>
    props.voteAverageValue ? props.voteAverageValue : "0px"};
  height: 10px;
  background-color: ${color.ceruleanBlue};
  border-radius: 5px;
`;

export default function VoteAverageProgressBar({ srcVoteAverage }) {
  return (
    <ProgressBarContainer>
      <ProgressBarContainerValue
        voteAverageValue={`${srcVoteAverage * 10}px`}
      />
    </ProgressBarContainer>
  );
}

// PropTypes
VoteAverageProgressBar.defaultProps = {
  srcVoteAverage: 0,
};
VoteAverageProgressBar.propTypes = {
  srcVoteAverage: PropTypes.number,
};
