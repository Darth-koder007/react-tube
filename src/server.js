import { ROOT_URL } from "./constants";
// src/server.js
import { createServer } from "miragejs";
import searchData from "./mock-youtube.json";

export default function () {
  createServer({
    routes() {
      this.timing = 1000;

      this.get(ROOT_URL, () => searchData);
    },
  });
}
