import React from "react";
import { Image } from "@chakra-ui/image";
import { Flex, Box, Center, Text, Divider } from "@chakra-ui/react";
//movielist function when user input and it will display the poster of the movie aside
const MovieList = ({ input, movies, openMovie }) => {
  //loading function call when the input is processing

  // No movie matched your search criteria
  if (movies.length < 1) {
    return <Text>No result</Text>;
  }
  console.log("length", movies.length);
  return (
    //{/* Onclick function to get movieID to set the currentMovieID (imdbID)*/}
    //check on function to getcurrent movieID to setcurrentMovie
    <div>
      {/* show image and movie title */}
      {/* fixed the fail image source */}
      {/* Add alternative Image when there is no image */}
      {/* TODO:Add Scroll bar  */}
      {movies.map((movie, index) => (
        <div
          key={index}
          cursor="pointer"
          onClick={() => openMovie(movie.imdbID)}
          
        >
          <Flex
            _hover={{
              color: "teal.500",
              cursor: "pointer",
              background: "lightgray",
              transform: "scale(1.1)",
              transition: "transform .1s",
              
            }}
          >
            <Box boxSize="100px">
            
              <Image
                
                w="80px"
                h="80px"
                mt={2}
                src={movie.Poster}
                alt="movie"
                rounded="md"
                fallbackSrc="https://via.placeholder.com/300"
              />
            </Box>

            <Center>
              <Text ml={2} spacing={10} fontSize="lg">
                {movie.Title}
              </Text>
            </Center>
          </Flex>
          <Divider mt={2} mb={2} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
