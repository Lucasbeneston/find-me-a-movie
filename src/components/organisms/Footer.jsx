import React from "react";
import styled from "styled-components";
import Heart from "../atoms/SVGR/Heart";
import color from "../../styles/variables";

// Styles
const FooterSection = styled.footer`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
`;
const Copyright = styled.p`
  font-size: 1rem;
  & svg {
    color: ${color.ceruleanBlue};
    height: 0.75rem;
  }
`;

export default function Footer() {
  return (
    <FooterSection>
      <Copyright>
        Made with <Heart /> by Lucas BENESTON
      </Copyright>
    </FooterSection>
  );
}
