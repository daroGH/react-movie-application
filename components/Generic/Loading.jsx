import React from "react";
import { Spinner } from "@chakra-ui/spinner";
const Loading = () => {
  return (
    <div>
      {/*when Loading is true set Spinner from Chakra */}
      <Spinner color="blue.500" size="xl" thickness="2px" speed="0.5s" />
    </div>
  );
};

export default Loading;
