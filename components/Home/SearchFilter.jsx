import React, { useState } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Radio,
  RadioGroup,
  Stack,
  Flex,
  Box,
} from "@chakra-ui/react";
// Create Searchfilter that allow user to search by year and type
const SearchFilter = ({ filterByYear, filterByType }) => {
  const [typeValue, setTypeValue] = useState();
  return (
    <div>
      <Flex>
        <Box w="50%" ml={4} mr={2}>
          {/* Use rangeslider from Chakra UI */}
          <h2>YEAR</h2>
          <Stack direction="row">
            <h3>1970</h3>
            <Slider
              min={1970}
              max={2021}
              //check year return and year search Format is y=1980-2000
              defaultValue={2021}
              width="100%"
              onChange={(value) => filterByYear(value)}
            >
              <SliderTrack bg="lightblue">
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb index={0} />
              <SliderThumb index={1} />
            </Slider>
            <h3>2021</h3>

          </Stack>
        </Box>

        <Box w="50%" ml={10} mr={2}>
          {/* Radio from Chakra UI Pass the type into byType variable */}
          <RadioGroup
            value={typeValue}
            onChange={(value) => filterByType(value)}
          >
            <h2>TYPE</h2>
            <Stack direction="row">
              <Radio value="">Any</Radio>
              <Radio value="movie">Movie</Radio>
              <Radio value="series">Series</Radio>
              <Radio value="episode">Episode</Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Flex>
    </div>
  );
};

export default SearchFilter;
