import { action, makeObservable, observable } from "mobx";
import instance from "./instance";
class VendorStore {
  vendors = [];
  loading = true;
  constructor() {
    makeObservable(this, {
      vendors: observable,
      fetchVendors: action,
    });
  }
  fetchVendors = async () => {
    try {
      console.log(0);
      const response = await instance.get("/vendors");
      console.log(response.data);
      this.vendors = response.data;
      this.loading = false;
    } catch (error) {
      console.log("error line : 16");
    }
  };
  getBookById = (bookId) => this.books.find((book) => book.id === bookId);
}

const vendorStore = new VendorStore();
vendorStore.fetchVendors();

export default vendorStore;
