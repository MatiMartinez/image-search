import React from "react";

export default function Images({ image }) {
  return (
    <a href={image.url} target="_blank" rel="noopener noreferrer">
      <div className="content">
        <img src={image.src.large} alt="img" />
      </div>
    </a>
  );
}
