import React from "react";

import { Input } from "@chakra-ui/react";

const Search = (input) => {
  // TODO: press enter to submit the form
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("enter");
      
    }
  };
  return (
    <div className="searchfilter">
      <Input
        value={input.value}
        onChange={(event) => input.setSearchInput(event.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Please type to search..."
        variant="flushed"
        size="lg"
        width="80%"
      />
    </div>
  );
};

export default Search;
