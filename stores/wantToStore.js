import React from "react";
import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-community/async-storage";

class WantToStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }
  fetchWantTo = async () => {
    const items = await AsyncStorage.getItem("myWantTo");
    this.items = items ? JSON.parse(items) : [];
    console.log(items);
  };

  addItemToWantTo = async (newItem) => {
    // const foundItem = this.items.find((item) => item.id === newItem.id);
    // if (foundItem) null;
    this.items.push(newItem);
    await AsyncStorage.setItem("myWantTo", JSON.stringify(this.items));
  };

  removeItemFromWantTo = async (itemId) => {
    // this.items = [];
    // await AsyncStorage.removeItem("myWantTo");
    this.items = this.items.filter((item) => item.id !== itemId);
    await AsyncStorage.setItem("myWantTo", JSON.stringify(this.trips));
  };
}
const wantToStore = new WantToStore();
wantToStore.fetchWantTo();
export default wantToStore;
