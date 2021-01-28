import color from "./variables";
import device from "./breakpoints";

const base = `
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.4rem;
    font-family: Helvetica, sans-serif;
    color: ${color.anthraciteGray};
    background-color: ${color.offWhite};

    @media ${device.tablet} {
      color: ${color.offWhite};
      background-color: ${color.anthraciteGray};
    }
  }`;

export default base;
