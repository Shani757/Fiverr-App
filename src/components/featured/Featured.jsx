import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";
const Featured = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> service for you
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="search"
                placeholder='try "Building mobil app" '
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Logi Design</button>
            <button>WordPress</button>
            <button>Ai Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
