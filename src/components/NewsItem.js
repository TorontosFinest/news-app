import React from "react";
import "./newsItem.css";
export default function NewsItem(props) {
  console.log("PROPS IS ", props);
  return (
    <div class="container">
      <div class="card">
        <div class="card-header">
          <img src={props.article.urlToImage} className="img" />
        </div>
        <div class="card-body">
          <span class="tag tag-teal">Source:{props.article.source.name}</span>
          <h4>
            <a href={props.article.url} target="_blank">
              {props.article.title}
            </a>
          </h4>
          <p>{props.article.description}</p>
          <p>Published At : {props.article.publishedAt}</p>
        </div>
      </div>
    </div>
  );
}
