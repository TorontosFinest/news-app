import React from "react";
import VideoBG from "../assets/videoBG.mp4";
import { Link } from "react-scroll";

export default function Banner() {
  return (
    <div className="banner">
      <video className="video" src={VideoBG} autoPlay loop muted />
      <div className="content">
        <h1>News Today</h1>
        <p>Stay up to date with whats going on in our world</p>
        <button className="view-articles">
          <Link
            to="newsList"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            View Articles
          </Link>
        </button>
      </div>
    </div>
  );
}
