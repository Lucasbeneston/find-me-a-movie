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
    <>
      {srcVoteAverage ? (
        <ProgressBarContainer>
          <ProgressBarContainerValue
            voteAverageValue={`${srcVoteAverage * 10}px`}
          />
        </ProgressBarContainer>
      ) : null}
    </>
  );
}

// PropTypes
VoteAverageProgressBar.defaultProps = {
  srcVoteAverage: null,
};
VoteAverageProgressBar.propTypes = {
  srcVoteAverage: PropTypes.number,
};
