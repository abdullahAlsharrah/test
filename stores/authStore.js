import { makeAutoObservable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-community/async-storage";
class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
    } catch (error) {
      alert(
        "🚀 ~ file: authStore.js ~ line 13 ~ AuthStore ~ signup= ~ error",
        error
      );
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token);
    } catch (error) {
      alert(
        "🚀 ~ file: authStore.js ~ line 29 ~ AuthStore ~ signin= ~ error",
        error
      );
    }
  };

  signout = async () => {
    await AsyncStorage.removeItem("myToken");
    delete instance.defaults.headers.common.Authorization;
    this.user = null;
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const user = decode(token);
      if (Date.now() < user.exp) {
        await this.setUser(token);
      } else {
        await AsyncStorage.removeItem("myToken");
      }
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
