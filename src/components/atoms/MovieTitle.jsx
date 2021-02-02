import React from "react";
import styled from "styled-components";
import moment from "moment";
import PropTypes from "prop-types";
import color from "../../styles/variables";

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
`;
const Date = styled.span`
  font-size: 1.6rem;
  color: ${color.doveGray};
  font-weight: normal;
`;

export default function MovieTitle({ srcTitle, srcReleaseDate }) {
  return (
    <Title>
      {srcTitle}
      <Date> ({moment(srcReleaseDate).format("YYYY")})</Date>
    </Title>
  );
}

// PropTypes
MovieTitle.defaultProps = {
  srcTitle: null,
  srcReleaseDate: undefined,
};
MovieTitle.propTypes = {
  srcTitle: PropTypes.string,
  srcReleaseDate: PropTypes.string,
};
