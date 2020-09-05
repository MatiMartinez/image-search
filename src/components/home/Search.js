import React from "react";
import { BsSearch } from "react-icons/bs";

export default function Search({ onChange, value, handleSubmit }) {
  return (
    <div className="col-12 search-content ml-auto">
      <input
        name="search"
        className="search-input"
        onChange={onChange}
        value={value}
        placeholder="Search"
      />
      <button className="btn btn-icon" onClick={handleSubmit}>
        <BsSearch className="icon-search" size="1.5em" />
      </button>
    </div>
  );
}
