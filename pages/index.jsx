import React, { useState, useEffect } from "react";

import Head from "next/head";
import Search from "../components/Home/Search";
import MovieList from "../components/Home/MovieList";
import MovieDetail from "../components/Home/MovieDetail";

//API request by Title
//http://www.omdbapi.com/?s=star&apikey=263d22d8
//API request by IMDB ID
//http://www.omdbapi.com/?i=tt3896198&apikey=59ab01de

export default function Home() {
  //Declare a new state variable useState hook to store Movie database,
  //user Input and loading screen while user is prompting input
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("a");
  const [loading, setLoading] = useState(false);

  const [currentMovieID, setCurrentMovieID] = useState("");

  //useCallBack to encounter the changes in the useEffect function
  //to avoid infinite loop
  const getMovieRequest = async (searchInput) => {
    console.log("searchinput", searchInput);
    setLoading(true);
    try {
      //url API from omdb that contain searchInput and send request
      const url = `http://www.omdbapi.com/?s=${searchInput}&apikey=263d22d8`;
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

  console.log("movies", movies);

  useEffect(() => {
    getMovieRequest(searchInput);
  }, [searchInput]);

  return (
    <div>
      <Head>
        <title>Movie Application</title>
      </Head>
      <h1>Welcome to next </h1>

      <div>
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
      {/* <MovieList movies={movies} loading={loading} /> */}
      <MovieDetail />
    </div>
  );
}
