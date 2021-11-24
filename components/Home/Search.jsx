import React from "react";

import { Input } from "@chakra-ui/react";

const Search = (input) => {
  return (
    <div className="searchfilter">
      <Input
        value={input.value}
        onChange={(event) => input.setSearchInput(event.target.value)}
        placeholder="Please type to search..."
        variant="flushed"
        size="lg"
        width="90%"
      />
    </div>
  );
};

export default Search;
