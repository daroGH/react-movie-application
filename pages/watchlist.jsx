import React, { useState, useEffect } from "react";
import Head from "next/head";
import MovieList from "../components/Home/MovieList";
import MovieDetail from "../components/Home/MovieDetail";
import { Box, Stack, Flex, Spacer, Center, Divider } from "@chakra-ui/react";
export default function WatchList() {
  const [watchList, setWatchList] = useState([]);
  const [currentMovieID, setCurrentMovieID] = useState("");
  // function to retrieve from movieList for set to show detailß
  const handleOpenMovie = (movieId) => {
    setCurrentMovieID(movieId);
  };
  // function to retrieve movieID from movieDetail when user press the watchlist button
  const handleWatchList = (movieId) => {
    setWatchList(movieId);
  };
  return (
    <div>
      <Head>
        <title>Movie Application</title>
      </Head>
      <Box w="100%" p="4">
        <Flex w="100%">
          {/* Scroll */}
          <Box p="3" w="30%" overflowY="scroll">
            {/* Show movie result and allow to click on the movie and retrive movieID */}
            <MovieList movies={watchList} openMovie={handleOpenMovie} />
          </Box>
          <Box flex="1" w="100%">
            {/* Get movie detail and allow user to add into their watchlist */}
            <Center>
              <MovieDetail
                currentMovie={currentMovieID}
                saveWatchList={handleWatchList}
              />
            </Center>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
