import React from "react";
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/react";
//movielist function when user input and it will display the poster of the movie aside
const MovieList = ({ input, movies, openMovie }) => {
  //loading function call when the input is processing

  return (
    //{/* Onclick function to get movieID to set the currentMovieID (imdbID)*/}
    //check on function to getcurrent movieID to setcurrentMovie
    <div>
      {/* show image and movie title */}
      {/* fixed the image source */}
      {/* TODO:Add alternative Image when there is no image */}
      {/* TODO:Add Scroll bar  */}
      {movies.map((movie, index) => (
        <div key={index} onClick={() => openMovie(movie.imdbID)}>
          <Image
            boxSize="150px"
            objectFit="cover"
            src={movie.Poster}
            alt="movie"
          />

          <h3 className="movieList-title">{movie.Title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
