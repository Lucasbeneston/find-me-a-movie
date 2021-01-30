import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import color from "../../styles/variables";

// Components
import TitleBeforeRandom from "../atoms/TitleBeforeRandom";
import BackdropPath from "../atoms/BackdropPath";
import PosterPath from "../atoms/PosterPath";
import SearchButton from "../atoms/SearchButton";

// Styles
const Section = styled.section`
  width: 100%;
  min-height: calc(100vh - 30px);
`;

// Backdrop Path Container
const colorVariation = keyframes`
0% {
  color: ${color.blueWhale};
}
35% {
  color: ${color.ceruleanBlue};
}
65% {
  color: ${color.javaGreen};
}
100% {
  color: ${color.blueWhale};
}
`;
const animation = css`
  animation: ${colorVariation} 50s infinite linear;
`;
const BackdropPathContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.active ? "50vh" : "70vh")};
  color: ${color.blueWhale};
  ${(props) => (props.active ? null : animation)}
  background-color: currentColor;
  position: relative;
  transition: height 0.5s ease-out;
`;
const FadeEffectBackground = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.25) 60%,
    ${color.offWhite} 80%,
    ${color.offWhite}
  );
  position: absolute;
  bottom: -1px;
`;

// Poster Path Container
const PosterPathContainer = styled.div`
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
`;

// Film Informations Container
const InformationsContainer = styled.div`
  width: 100%;
  min-height: calc(30vh - 30px); // 30px = Footer height
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10%;
`;

// Film Informations
const FilmTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
`;
const FilmGenreContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;
const FilmGenre = styled.h3`
  font-size: 1.4rem;
  padding: 3px 10px;
  border-radius: 20px;
  margin: 5px;
  color: ${color.doveGray};
  border: solid 1px ${color.doveGray};
`;
const FilmVoteAverageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FilmVoteAverage = styled.h4`
  font-size: 1.8rem;
  margin-right: 10px;
`;
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
  transition: width 0.5s ease-out;
`;
const FilmDescription = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin: 15px 0;
`;

export default function Home() {
  const [startRandom, setStartRandom] = useState(false);
  const [filmInformations, setFilmInformations] = useState({
    posterPath:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zDyT3gIeae39UgL9P6jL5Zc3zyt.jpg",
    backdropPath:
      "https://cdn-www.konbini.com/fr/images/files/2019/10/will-joker-be-coming-to-netflix-.jpg?webp=",
    description:
      "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
    title: "Joker",
    genres: ["Crime", "Thriller", "Drame"],
    voteAverage: 8.2,
  });

  console.log(setFilmInformations);

  const handleStart = () => {
    if (!startRandom) setStartRandom(true);
  };

  return (
    <Section>
      <BackdropPathContainer active={startRandom}>
        <FadeEffectBackground />
        {!startRandom ? null : (
          <BackdropPath
            srcBackdropPath={filmInformations.backdropPath}
            srcTitle={filmInformations.title}
          />
        )}

        <PosterPathContainer active={startRandom}>
          {!startRandom ? null : (
            <PosterPath
              srcPosterPath={filmInformations.posterPath}
              srcTitle={filmInformations.title}
            />
          )}
        </PosterPathContainer>
      </BackdropPathContainer>
      <InformationsContainer>
        {!startRandom ? (
          <TitleBeforeRandom />
        ) : (
          <>
            <FilmTitle>{filmInformations.title}</FilmTitle>
            <FilmGenreContainer>
              {filmInformations.genres.map((genre) => (
                <FilmGenre key={genre}>{genre}</FilmGenre>
              ))}
            </FilmGenreContainer>
            <FilmVoteAverageContainer>
              <FilmVoteAverage>{filmInformations.voteAverage}</FilmVoteAverage>
              <ProgressBarContainer>
                <ProgressBarContainerValue
                  voteAverageValue={`${filmInformations.voteAverage * 10}px`}
                />
              </ProgressBarContainer>
            </FilmVoteAverageContainer>
            <FilmDescription>{filmInformations.description}</FilmDescription>
          </>
        )}
      </InformationsContainer>
      <SearchButton
        onClickEvent={handleStart}
        description={!startRandom ? "Start random" : "New random"}
      />
    </Section>
  );
}
