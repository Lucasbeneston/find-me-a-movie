import React, { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

// Components
import BackdropPathContainer from "../organisms/BackdropPathContainer";
import InformationsContainer from "../organisms/InformationsContainer";
import SearchButton from "../atoms/SearchButton";
import LoadingBackdropPathContainer from "../organisms/LoadingBackdropPathContainer";

// Styles
const Section = styled.section`
  width: 100%;
  min-height: calc(100vh - 30px);
`;

export default function Home() {
  const [startRandom, setStartRandom] = useState(false);
  const [selectMovie, setSelectMovie] = useState({
    page: 1,
    selectInPage: 0,
  });
  const { page, selectInPage } = selectMovie;

  const entierAleatoire = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const { data, isLoading } = useQuery(["movie", page], () =>
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=fr&page=${page}`
    ).then((res) => res.json())
  );

  const handleStart = () => {
    if (!startRandom) setStartRandom(true);
  };

  return (
    <Section>
      {isLoading ? (
        <LoadingBackdropPathContainer />
      ) : (
        <>
          <BackdropPathContainer
            startRandom={startRandom}
            srcBackdropPath={`https://image.tmdb.org/t/p/w500/${data.results[selectInPage].backdrop_path}`}
            srcPosterPath={`https://image.tmdb.org/t/p/w300/${data.results[selectInPage].poster_path}`}
            srcTitle={data.results[selectInPage].title}
          />
          <InformationsContainer
            startRandom={startRandom}
            srcTitle={data.results[selectInPage].title}
            srcGenresArray={data.results[selectInPage].genre_ids}
            srcVoteAverage={data.results[selectInPage].vote_average || 0}
            srcOverview={data.results[selectInPage].overview}
          />
        </>
      )}

      <SearchButton
        onClickEvent={() => {
          handleStart();
          setSelectMovie({
            page: entierAleatoire(1, 417),
            selectInPage: entierAleatoire(0, 19),
          });
        }}
        title={!startRandom ? "Commencer" : "Relancer"}
      />
    </Section>
  );
}
