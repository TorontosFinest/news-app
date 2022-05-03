import React from "react";
import VideoBG from "../assets/videoBG.mp4";
import { Link } from "react-scroll";

export default function Banner() {
  const dateToFormat = "2022-04-19T12:59-0500";

  return (
    <div className="banner">
      <video className="video" src={VideoBG} autoPlay loop muted />
      <div className="content">
        <h1>News Today</h1>
        <h1>Stay up to date with whats going on in our world</h1>

        <Link
          className="view-articles"
          to="newsList"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          View Articles
        </Link>
      </div>
      <h1 className="headline">
        LEADING ARTICLES FOR: {new Date().toLocaleString() + ""}
      </h1>
    </div>
  );
}
