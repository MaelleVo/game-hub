import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "125ed7c367ee4e9ea4f7de8db559624c",
  },
});
