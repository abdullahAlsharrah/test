import React from "react";
import vendorStore from "../stores/vendorStore";
import { Content, List, Spinner, Text } from "native-base";
import { observer } from "mobx-react";
import VendorItem from "./VendorItem";

const VendorList = ({ navigation }) => {
  if (vendorStore.loading) return <Spinner />;
  const vendorList = vendorStore.vendors.map((vendor) => (
    <VendorItem vendor={vendor} key={vendor.id} navigation={navigation} />
  ));

  return <List>{vendorList}</List>;
};
export default observer(VendorList);
