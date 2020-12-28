import { makeAutoObservable } from "mobx";
import authStore from "./authStore";
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

  createTrip = async (newTrip) => {
    try {
      const formData = new FormData();
      for (const key in newTrip) formData.append(key, newTrip[key]);
      const res = await instance.post("/trips", formData);
      res.data.user = { username: authStore.user.username };
      this.trips.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteTrip = async (tripId) => {
    try {
      await instance.delete(`/trips/${tripId}`);
      this.trips = this.trips.filter((trip) => trip.id !== tripId);
    } catch (error) {}
  };

  updateTrip = async (updatedTrip) => {
    try {
      const formData = new FormData();
      for (const key in updatedTrip) formData.append(key, updatedTrip[key]);
      const res = await instance.put(`/trips/${updatedTrip.id}`, formData);
      const trip = this.trips.find((trip) => trip.id === updatedTrip.id);
      for (const key in trip) trip[key] = updatedTrip[key];
      trip.image = URL.createObjectURL(updatedTrip.image);
    } catch (error) {
      console.log("TripStore -> updateTrip -> error", error);
    }
  };
  getTripByuserId = (userId) =>
    this.trips.filter((trip) => trip.userId === userId);
  getTripById = (tripId) => this.trips.find((trip) => trip.id === tripId);

  updateTripfavorite = async (tripId) => {
    try {
      //TODO: Should fix this to not fetch again!
      await instance.put(`/trips/${tripId}`);
      const trip = this.trips.find((trip) => trip.id === tripId);
      trip.favorite = !trip.favorite;
    } catch (error) {
      console.log("Generated Error while updating:", error);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchtrips();

export default tripStore;
