import React from "react";
import { Image } from "@chakra-ui/image";
//movielist function when user input and it will display the poster of the movie aside
const MovieList = (input, loading, currentMovie) => {
  //loading function call when the input is processing
  // if (loading) {
  //   <Loading />;
  // }
  //check for false input
  if (input.length < 1) {
    return (
      <h2 className="falseInput">No movie matched your search criteria</h2>
    );
  }
  return (
    //{/* Onclick function to get movieID to set the currentMovieID (imdbID)*/}
    //TODO: ckick on function to getcurrent movieID to setcurrentMovie
    <div onClick={() => currentMovie(input.imdbID)}>
    
      {/* show image and movie title */}
      {/* TODO: fix the image source */}
      {/* {input.movies.map((movie, index) => (
        <div key={index}>
          <Image src={movie.Poster} alt="movie" />
          <h3 className="movieList-title">{movie.Title}</h3>
        </div>
      ))} */}

    </div>
  );
};

export default MovieList;
