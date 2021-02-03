import React from "react";
import styled from "styled-components";

const Image = styled.img`
  position: absolute;
  bottom: -1px;
  width: 80%;
`;

export default function Popcorn() {
  return <Image src={`${process.env.PUBLIC_URL}/box-of-popcorn.png`} alt="" />;
}
