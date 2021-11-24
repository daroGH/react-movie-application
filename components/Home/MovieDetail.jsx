import { Image } from "@chakra-ui/image";
import React, { useState, useEffect } from "react";
import { Button, Text, Badge, Flex } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

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

  if (!movieInfo) return <p>Loading</p>;
  return (
    <div>
      {/* TODO: Display movie description  */}
      {/* TODO: if there is no click it will show empty */}
      <Flex>
        <Image src={movieInfo.Poster} alt="movie" />
        <Button leftIcon={<ViewIcon />} colorScheme="blue" variant="outline">
          Watchlist
        </Button>
        <div>
          <Text fontSize="4xl" as="b">
            {movieInfo.Title}
          </Text>
          <Text fontSize="2xl">
            <Badge borderRadius="full" px="7">
              {movieInfo.Rated}
            </Badge>
            {movieInfo.Year}
            {movieInfo.Genre}
            {movieInfo.Runtime}
          </Text>
        </div>
      </Flex>

      <div>
        <Text fontSize="md">{movieInfo.Actors}</Text>
        <Text fontSize="md">{movieInfo.Plot}</Text>
      </div>
    </div>
  );
};

export default MovieDetail;
