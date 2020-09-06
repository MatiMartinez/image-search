import React, { useState, useEffect } from "react";
import Search from "./Search";
import Images from "./Images";
import { getImages } from "../../Api";
import Loading from "./Loading";

export default function Home() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("websites");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImagesDefault() {
      setLoading(true);
      const imagesData = await getImages(query, page);
      setImages(imagesData);
    }
    if (images.length === 0) {
      loadImagesDefault();
      setLoading(false);
    }
  }, []); // eslint-disable-line

  function onChange(e) {
    setSearch(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setQuery(search);
    setLoading(true);
    if (search !== "") {
      const imagesData = await getImages(search, page);
      setImages(imagesData);
    }
    setLoading(false);
  }

  async function loadMore() {
    let pageNow = page + 1;
    setPage((prev) => prev + 1);
    const imagesData = await getImages(query, pageNow);
    setImages((prev) => [...prev, ...imagesData]);
  }

  return (
    <div className="m-4">
      <Search onChange={onChange} value={search} handleSubmit={handleSubmit} />
      {loading === true ? (
        <Loading />
      ) : (
        <div className="grid mt-5">
          {images.length !== 0 ? (
            images.map((image, index) => (
              <div key={index} className="grid-image">
                <Images image={image} />
              </div>
            ))
          ) : (
            <div className="loading-content text-muted">
              <h3>No images found for "{query}"</h3>
            </div>
          )}
          <div className="text-center w-100 m-5">
            <button
              className="btn btn-more pl-5 pr-5"
              onClick={() => loadMore()}
            >
              More
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
