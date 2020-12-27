import React, { useState } from "react";
import { SearchBar } from "react-native-elements";
import { View, Text } from "react-native";
import { Input } from "native-base";

const SearchBarr = ({ setQuery, query }) => {
  // const [search, setSearch] = useState("");
  return (
    <SearchBar
      placeholder="Type Here..."
      onChangeText={(event) => setQuery(event)}
      value={query}
    />
  );
};

export default SearchBarr;
