import React from "react";

export default function Images({ image }) {
  return (
    <div className="content">
      <img src={image.src.large} alt="img" />
    </div>
  );
}
