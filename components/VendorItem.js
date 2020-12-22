import React from "react";
import { ListItem } from "native-base";
import { VendorItemStyled } from "../styles";
import { Image } from "react-native";
const VendorItem = ({ vendor, navigation }) => {
  return (
    <ListItem onPress={() => navigation.navigate("VendorDetail", { vendor })}>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: vendor.image }}
      />
      <VendorItemStyled>{vendor.name}</VendorItemStyled>
    </ListItem>
  );
};

export default VendorItem;
