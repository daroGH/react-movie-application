import React, { useState } from "react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
// Create Searchfilter that allow user to search by year and type
const SearchFilter = ({ filterByYear, filterByType }) => {
  const [typeValue, setTypeValue] = useState();
  return (
    <div>
    
      <div>
        {/* Use rangeslider from Chakra UI */}
        <h2>YEAR</h2>
        <Stack direction="row">
          <h3>1970</h3>
          <RangeSlider
            min={1970}
            max={2021}
            // TODO: check year return and year search Format is y=1980-2000
            defaultValue={[1980, 2000]}
            width="100%"
            onChange={(value) => filterByYear(value)}
          >
            <RangeSliderTrack bg="lightblue">
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <h3>2021</h3>
        </Stack>
      </div>

      <div>
        {/* Radio from Chakra UI Pass the type into byType variable */}
        <RadioGroup
          // TODO: Set defualt to empty but still undefine
          // How to set one-clickt o change value

          value={typeValue}
          onChange={setTypeValue}
          onClick={() => filterByType(typeValue)}
        >
          <h2>TYPE</h2>
          <Stack direction="row">
            <Radio value="">Any</Radio>
            <Radio value="movie">Movie</Radio>
            <Radio value="series">Series</Radio>
            <Radio value="episode">Episode</Radio>
          </Stack>
        </RadioGroup>
      </div>
    </div>
  );
};

export default SearchFilter;
