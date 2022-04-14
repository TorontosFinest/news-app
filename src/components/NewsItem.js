import React from "react";
import "./newsItem.css";

export default function NewsItem(props) {
  console.log("PROPS IS ", props);
  return (
    <div className="news-item">
      <img src={props.article.urlToImage} className="news-image" />
      <h3>
        <a href={props.article.url}>{props.article.title}</a>
      </h3>
      <p>{props.article.description}</p>
    </div>
  );
}
