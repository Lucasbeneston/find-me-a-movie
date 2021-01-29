import React from "react";
import styled from "styled-components";
import color from "../../styles/variables";

const Section = styled.section`
  width: 100%;
  min-height: calc(100vh - 30px);
`;

const BackdropPathContainer = styled.div`
  width: 100%;
  height: 70vh;
  background-color: ${color.blueWhale};
  position: relative;
`;

const FadeEffectBackground = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5) 60%,
    ${color.offWhite} 80%,
    ${color.offWhite}
  );
  position: absolute;
  bottom: -1px;
`;

const BackdropPath = styled.img`
  height: 100%;
  object-fit: cover;
`;

const PosterPathContainer = styled.div`
  width: 55vw;
  height: 80vw;
  background-color: ${color.doveGray};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border: 10px solid ${color.offWhite};
  border-radius: 25px;
  display: flex;
  justify-content: center;
`;

const PosterPath = styled.img`
  border-radius: 15px;
  width: 100%;
  object-fit: cover;
`;

const FilmInformationsContainer = styled.div`
  width: 100%;
  min-height: calc(30vh - 30px); // 30px = Footer height
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
`;

const FilmTitle = styled.h2`
  font-size: 2rem;
`;

const SearchButton = styled.button`
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
  font-size: 1.6rem;
  text-transform: uppercase;
`;

export default function Home() {
  return (
    <Section>
      <BackdropPathContainer>
        <FadeEffectBackground />
        <BackdropPath
          src="https://cdn-www.konbini.com/fr/images/files/2019/10/will-joker-be-coming-to-netflix-.jpg?webp="
          alt="backdrop path reference"
        />
        <PosterPathContainer>
          <PosterPath
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zDyT3gIeae39UgL9P6jL5Zc3zyt.jpg"
            alt="poster path reference"
          />
        </PosterPathContainer>
      </BackdropPathContainer>
      <FilmInformationsContainer>
        <FilmTitle>Titre du film</FilmTitle>
      </FilmInformationsContainer>
      <SearchButton>Random film</SearchButton>
    </Section>
  );
}
