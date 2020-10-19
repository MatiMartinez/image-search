import React, { useState, useEffect } from "react";
import Search from "./Search";
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
        <div>
          {images.length !== 0 ? (
            <div className="grid mt-5">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="grid-image"
                  style={{ backgroundImage: "url(" + image.src.large + ")" }}
                >
                  <a
                    href={image.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ height: "100%", display: "block" }}
                  >
                    &nbsp;
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="loading-content text-muted">
              <h3>No images found for "{query}"</h3>
            </div>
          )}
          <div className="container text-center w-100 m-5">
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
