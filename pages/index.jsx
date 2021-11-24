import React, { useState, useEffect } from "react";
import { Box, Flex, Center, Stack } from "@chakra-ui/layout";
import Head from "next/head";
import Search from "../components/Home/Search";
import MovieList from "../components/Home/MovieList";
import MovieDetail from "../components/Home/MovieDetail";
import SearchFilter from "../components/Home/SearchFilter";

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
  const [byYear, setByYear] = useState([1970, 2021]);
  const [currentMovieID, setCurrentMovieID] = useState("");

  //useCallBack to encounter the changes in the useEffect function
  //to avoid infinite loop
  const getMovieRequest = async (searchInput) => {
    setLoading(true);
    try {
      //url API from omdb that contain searchInput and send request
      // const url = `http://www.omdbapi.com/?s=${searchInput}&y=${byYear}&type=${byType}&apikey=263d22d8`;
      const url = `http://www.omdbapi.com/?s=${searchInput}&y=${byYear[0]}-${byYear[1]}&type=${byType}&apikey=263d22d8`;
      console.log("url:", url);
      setLoading(true);
      const response = await fetch(url);
      const responseJson = await response.json();
      //check if the request successful
      if (responseJson.Search) {
        setMovies(responseJson.Search);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  console.log("year", byYear);
  console.log("type", byType);
  const handleOpenMovie = (movieId) => {
    setCurrentMovieID(movieId);
  };

  useEffect(() => {
    // check if input is empty before send get request
    if (searchInput === "") return;
    getMovieRequest(searchInput);
  }, [searchInput]);

  return (
    <div>
      <Head>
        <title>Movie Application</title>
      </Head>

      {/* TODO: set Spinner from Chakra */}
      <Box padding="4">
        {/* Search and check the input and show loading spinning  */}
        <div>
          <Search
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            loading={loading}
          />
          {/* Filter function and retireve year and type  */}
          {/* TODO:set type as "Empty" as ANY by defualt */}
          <SearchFilter
            filterByYear={(year) => setByYear(year)}
            filterByType={(type) => setByType(type)}
            
          />
        </div>

        {/* {if(searchInput !== "" || searchInput.lenght < 1 )} */}
        {/* check if input empty else it will return movie list */}
        {searchInput !== "" || searchInput.length < 2 ? (
          <h2>No movie matched your search criteria</h2>
        ) : (
          ""
        )}

        <Flex w="50%">
          <Box padding="3" width="40%">
            {/* Show movie result and allow to click on the movie and retrive movieID */}
            <MovieList
              movies={movies}
              loading={loading}
              input={searchInput}
              openMovie={setCurrentMovieID}
            />
          </Box>
          <Box flex="1" width="60%">
            {/* Get movie detail and allow user to add into their watchlist */}
            <Center>
              <MovieDetail currentMovieID={currentMovieID} />
            </Center>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
