import React, { useState, useEffect } from "react";

import { Box, Flex, Spacer, Center, Divider } from "@chakra-ui/react";
import Head from "next/head";
import Search from "../components/Home/Search";
import MovieList from "../components/Home/MovieList";
import MovieDetail from "../components/Home/MovieDetail";
import SearchFilter from "../components/Home/SearchFilter";
import Loading from "../components/Generic/Loading";

//API request by Title
//http://www.omdbapi.com/?s=star&apikey=263d22d8
//API request by IMDB ID
//http://www.omdbapi.com/?i=tt3896198&apikey=59ab01de

export default function Home() {
  //Declare a new state variable useState hook to store Movie database,
  //user Input and loading screen while user is prompting input
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [byType, setByType] = useState("");
  const [byYear, setByYear] = useState("");
  const [currentMovieID, setCurrentMovieID] = useState("");
  const [watchList, setWatchList] = useState([]);

  //useCallBack to encounter the changes in the useEffect function
  //to avoid infinite loop
  const getMovieRequest = async (searchInput) => {
    setLoading(true);
    try {
      //url API from omdb that contain searchInput and send request
      // const url = `http://www.omdbapi.com/?s=${searchInput}&y=${byYear}&type=${byType}&apikey=263d22d8`;
      const url = `http://www.omdbapi.com/?s=${searchInput}&y=${byYear}&type=${byType}&apikey=263d22d8`;

      console.log("url:", url);
      setLoading(true);
      const response = await fetch(url);
      const responseJson = await response.json();

      //check if the request successful
      if (responseJson.Search) {
        setMovies(responseJson.Search);
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleOpenMovie = (movieId) => {
    setCurrentMovieID(movieId);
  };

  // Function to add to watchList
  const handleWatchList = (currentMovieID) => {
    //checking if the current movie existed in the watchlist using some function
    const existedInWatchList = watchList.some(
      (movie) => movie === currentMovieID
    );

    if (existedInWatchList) return;

    const newWatchListMovie = [...watchList, currentMovieID];
    setWatchList(newWatchListMovie);
  };
  // Function to add to watchList
  const removeWatchList = (currentMovieID) => {
    const newWatchListMovie = watchList.filter(
      (movieId) => movieId !== currentMovieID
    );
    setWatchList(newWatchListMovie);
  };

  useEffect(() => {
    // check if input is empty before send get request
    if (searchInput === "") return;
    getMovieRequest(searchInput);
    // Because the only depency is on the searchInput, if getMovieRequest, it will go into infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  return (
    <div>
      <Head>
        <title>Movie Application</title>
      </Head>

      <Box w="100%" h="50%" p="4">
        <Flex>
          {/* Search and check the input and show loading spinning  */}

          <Box w="40%">
            <Search
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              loading={loading}
            />
          </Box>
          <Spacer />
          {/* Filter function and retireve year and type  */}
          <Box w="60%">
            <SearchFilter
              filterByYear={(year) => setByYear(year)}
              filterByType={(type) => setByType(type)}
            />
          </Box>
        </Flex>
        <Divider mt={5} mb={5} />

        <Flex w="100%">
          <Box p="3" w="30%" h="700" overflowY="auto">
            {/* Show movie result and allow to click on the movie and retrive movieID */}
            {loading ? (
              <Center>
                {/*when Loading is true set Spinner from Chakra */}
                <Loading />
              </Center>
            ) : (
              <MovieList
                movies={movies}
                loading={loading}
                input={searchInput}
                openMovie={handleOpenMovie}
              />
            )}
          </Box>

          <Box flex="1" w="100%">
            {/* Get movie detail and allow user to add into their watchlist */}
            {/* If not Click from movieList it shows nothing */}
            <Center>
              {currentMovieID !== "" ? (
                <MovieDetail
                  currentMovie={currentMovieID}
                  saveWatchList={handleWatchList}
                  removeWatchList={removeWatchList}
                  watchList={watchList}
                />
              ) : (
                ""
              )}
            </Center>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
