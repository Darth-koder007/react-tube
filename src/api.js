import { ROOT_URL } from "./constants";
import axios from "axios";

const searchYoutube = (options, callback) => {
  if (!options.key) {
    throw new Error("Youtube Search expected key, received undefined");
  }

  const params = {
    part: "snippet",
    key: options.key,
    q: options.term,
    type: "video",
  };

  axios
    .get(ROOT_URL, { params: params })
    .then(function (response) {
      if (callback) {
        callback(response.data.items);
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default searchYoutube;
