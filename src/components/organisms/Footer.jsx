import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Copyright = styled.p`
  font-size: 1rem;
`;

export default function Footer() {
  return (
    <FooterSection>
      <Copyright>Made with love by Lucas BENESTON</Copyright>
    </FooterSection>
  );
}
