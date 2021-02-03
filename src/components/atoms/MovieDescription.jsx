import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import device from "../../styles/breakpoints";

// Style
const Description = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin: 15px 0;
  line-height: 2rem;

  @media ${device.tablet} {
    line-height: 2.75rem;
  }
`;

export default function MovieDescription({ srcOverview }) {
  return <Description>{srcOverview}</Description>;
}

// PropTypes
MovieDescription.defaultProps = {
  srcOverview: null,
};
MovieDescription.propTypes = {
  srcOverview: PropTypes.string,
};
