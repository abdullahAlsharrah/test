import { observer } from "mobx-react";
import React from "react";
import tripStore from "../stores/tripStore";
import vendorStore from "../stores/vendorStore";
import { Spinner } from "native-base";
import {
  VendorDetailTitle,
  VendorDetailImage,
  VendorDetailWrapper,
} from "../styles";
import TripsList from "./TripsList";
const VendorDetail = ({ route }) => {
  if (vendorStore.loading) return <Spinner />;
  const { vendor } = route.params;
  const tripsFromtripShop = vendor.tripies.map((trip) =>
    tripStore.gettripById(trip.id)
  );
  return (
    <>
      <VendorDetailWrapper>
        <VendorDetailImage source={{ uri: vendor.image }} />
        <VendorDetailTitle>{vendor.name}</VendorDetailTitle>
      </VendorDetailWrapper>
      <TripsList trips={tripsFromTripShop} />
    </>
  );
};

export default observer(VendorDetail);
