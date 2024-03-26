import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/buy", { state: searchQuery });
  };

  return (
    <div className="navbar">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/008/075/444/small/the-logo-of-home-housing-residents-real-estate-with-a-concept-that-presents-rural-nature-with-a-touch-of-leaves-and-sunflowers-vector.jpg"
        width="80px"
        alt=""
      />
      <h3 className="heading">Urban Nest Hubs</h3>

      <div className="search">
        <input
          placeholder="🔍 Search for your dream property"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <ul className="List">
        <li>
          <Link to="/home">
            <button className="btn nav button">Home</button>
          </Link>
        </li>
        <li>
          <Link to="/buy">
            <button className="btn nav button">Buy</button>
          </Link>
        </li>
        <li>
          <Link to="/rent">
            <button className="btn nav button">Rent</button>
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <button className="btn nav button">Sign up</button>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <button className="btn nav button">Login</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
