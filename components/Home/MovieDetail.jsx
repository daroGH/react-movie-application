import { Image } from "@chakra-ui/image";
import React, { useState, useEffect } from "react";
import {
  Button,
  Text,
  Badge,
  Flex,
  Container,
  Box,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import WatchList from "../../pages/watchlist";

// getmovieID and request API to get full movie description
const MovieDetail = ({ currentMovie, saveWatchList }) => {
  const [movieInfo, setMovieInfo] = useState({});
  const [rating, setRating] = useState({});

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
      setRating(responseJson.Ratings);
    };
    getMovieDetail();
  }, [currentMovie]);

  if (!movieInfo) return <p>Loading</p>;

  console.log("movieInfo", movieInfo);

  console.log("Source:", rating.Value);
  // console.log("Rating:", rating[0].Value);
  return (
    <div>
      {/* Display movie description  */}
      {/* if there is no click it will show empty */}
      <Flex w="100%" padding="5" justifyContent="space-between">
        <Image w="20%" rounded="md" src={movieInfo.Poster} alt="movie" />
        <Container>
          <Text fontSize="4xl" as="b">
            {movieInfo.Title}
          </Text>

          <Text fontSize="1xl">
            <Badge borderRadius="full" px="7">
              {movieInfo.Rated}
            </Badge>
            {movieInfo.Year}
            {movieInfo.Genre}
            {movieInfo.Runtime}
          </Text>

          <Text fontSize="md">{movieInfo.Actors}</Text>
        </Container>
        {/* TODO: Save to watchlist */}
        <Button
          leftIcon={<ViewIcon />}
          colorScheme="blue"
          variant="outline"
          onClick={(movieInfo) => saveWatchList(movieInfo)}
          p="20px 30px"
        >
          Watchlist
        </Button>
      </Flex>
      <Divider mt={5} mb={5} />

      <Container padding="4" maxW="container.lg">
        <Box>
          <Text fontSize="md">{movieInfo.Plot}</Text>
        </Box>
        <Divider mt={5} mb={5} />
        {/* TODO: Rating */}
        {/* PrintArray */}
        <Box>

        </Box>
      </Container>
    </div>
  );
};

export default MovieDetail;
