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
  Center,
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

  return (
    <div>
      {/* Display movie description  */}
      {/* if there is no click it will show empty */}
      <Flex w="100%" padding="5" justifyContent="space-between">
        <Image
          w="20%"
          rounded="md"
          src={movieInfo.Poster}
          alt="movie"
          fallbackSrc="https://via.placeholder.com/300"
        />
        <Container>
          <Text fontSize="4xl" as="b">
            {movieInfo.Title}
          </Text>

          <Flex>
            <Text fontSize="1xl">
              <Badge borderRadius="full" px="7">
                {movieInfo.Rated}
              </Badge>
            </Text>
            <Text ml={3}>{movieInfo.Year}</Text>
            <Text ml={3}>{movieInfo.Genre}</Text>
            <Text ml={3}>{movieInfo.Runtime}</Text>
          </Flex>

          <Text mt={3} fontSize="md">
            {movieInfo.Actors}
          </Text>
        </Container>
        {/* Save to watchlist */}
        <Button
          leftIcon={<ViewIcon />}
          colorScheme="blue"
          variant="outline"
          onClick={() => saveWatchList(movieInfo)}
          
          p="20px 30px"
        >
          Watchlist
        </Button>
      </Flex>
      <Divider mt={5} mb={5} />

      <Box padding="4" maxW="container.lg">
        <Box>
          <Center fontSize="md">{movieInfo.Plot}</Center>
        </Box>
        <Divider mt={5} mb={5} />

        {/* Rating */}
        {/* PrintArray */}
        <Flex w="100%">
      {/* calculation to ensure that the rating system will dynamically 
      display middle base on number of source */}
      {/* Inline css with calculate format */}
          {rating.length > 0 ? (
            rating.map((data, index) => (
              <Box style={{width:`calc(100%/${rating.length})`}} key={index}>
                <Center>{data.Value}</Center>
                <Center>{data.Source}</Center>
              </Box>
            ))
          ) : (
            <Center>
            <div>No rating</div>
            </Center>
          )}
        </Flex>
      </Box>
      <Divider mt={5} mb={5} />
    </div>
  );
};

export default MovieDetail;
