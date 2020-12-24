import { makeAutoObservable } from "mobx";
import instance from "./instance";
class TripStore {
  trips = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }
  fetchtrips = async () => {
    try {
      const response = await instance.get("/trips");
      this.trips = response.data;
      this.loading = false;
    } catch (error) {
      console.log("error line : 16");
    }
  };

  createTrip = async (newTrip, formData, cd) => {
    try {
      const res = await instance.post(`/trips`, formData);
      cd();
      this.trips.push(res.data);
    } catch (error) {}
  };

  deleteTrip = async (tripId) => {
    try {
      await instance.delete(`/trips/${tripId}`);
      this.trips = this.trips.filter((trip) => trip.id !== tripId);
    } catch (error) {}
  };

  updateTrip = async (updatedTrip) => {
    try {
      await instance.put(`/trips/${updatedTrip.id}`, updatedTrip);
      const trip = this.trip.find((trip) => trip.id === updatedTrip.id);
      for (const key in trip) trip[key] = updatedTrip[key];
    } catch (error) {
      console.log("TripStore -> updateTrip -> error", error);
    }
  };
  getTripById = (tripId) => this.trips.find((trip) => trip.id === tripId);
}

const tripStore = new TripStore();
tripStore.fetchtrips();

export default tripStore;
