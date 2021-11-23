import { Flex, Spacer, Image, Button } from "@chakra-ui/image";
import React, { useState, useEffect } from "react";

// TODO: getmovieID and request API to get full movie description
const MovieDetail = ({ currentMovie }) => {
  const [movieInfo, setMovieInfo] = useState({});

  const getMovieDetailRequest = async (movieID) => {
    try {
      //url API from omdb that contain searchInput and send request
      const url = `http://www.omdbapi.com/?i=${movieID}&apikey=263d22d8`;
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!currentMovie) return;
    const getMovieDetail = async () => {
      const responseJson = await getMovieDetailRequest(currentMovie);
      setMovieInfo(responseJson);
    };
    getMovieDetail();
  }, [currentMovie]);

  console.log("movieInfo", movieInfo);
  return (
    
    <div>
      {/* TODO: Display movie description  */}
      {/* TODO: if there is no click it will show empty */}

      <Image src={movieInfo.Poster} alt="movie" />
      
      <div>
        <h1>{movieInfo.Title}</h1>
        <h2>
          {movieInfo.Rated} {movieInfo.Year} {movieInfo.Genre}
          {movieInfo.Runtime}
        </h2>
      </div>
      <div>
        {movieInfo.Actors} {movieInfo.Plot}
      </div>
      
    </div>
  );
};

export default MovieDetail;
