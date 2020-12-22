import { action, makeObservable, observable } from "mobx";
import instance from "./instance";
class TripStore {
  trips = [];
  constructor() {
    makeObservable(this, {
      trips: observable,
      fetchtrips: action,
    });
  }
  fetchtrips = async () => {
    try {
      const response = await instance.get("/trips");
      this.trips = response.data;
    } catch (error) {
      console.log("error line : 16");
    }
  };
  getTripById = (tripId) => this.trips.find((trip) => trip.id === tripId);
}

const tripStore = new TripStore();
tripStore.fetchtrips();

export default tripStore;
