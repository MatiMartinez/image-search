import Axios from "axios";

export async function getImages(search, page) {
  return await Axios.get(`https://api.pexels.com/v1/search`, {
    headers: { Authorization: `${process.env.REACT_APP_API_KEY}` },
    params: { query: search, page: page, per_page: 20 },
  })
    .then((res) => {
      const resData = res.data.photos;
      return resData;
    })
    .catch((err) => {
      console.log("Error. ", err);
    });
}

export async function getImagesDefault() {
  return await Axios.get("https://api.pexels.com/v1/search", {
    headers: { Authorization: `${process.env.REACT_APP_API_KEY}` },
    params: { query: "websites", per_page: 20 },
  })
    .then((res) => {
      const resData = res.data.photos;
      return resData;
    })
    .catch((err) => {
      console.log("Error. ", err);
    });
}
