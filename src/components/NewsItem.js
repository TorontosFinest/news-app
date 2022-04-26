import React from "react";
import "./newsItem.css";
import newsIMG from "../assets/news.jpeg";
export default function NewsItem(props) {
  console.log("PROPS IS ", props);
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          {props.article.urlToImage == null ? (
            <img src={newsIMG} className="img" />
          ) : (
            <img src={props.article.urlToImage} className="img" />
          )}
        </div>
        <div className="card-body">
          <span className="tag tag-teal">
            Source : {props.article.source.name}
          </span>
          <h4>
            <a href={props.article.url} target="_blank">
              {props.article.title}
            </a>
          </h4>
          <p>
            {props.article.description == null ||
            props.article.description == "" ? (
              <p>
                <b>
                  {" "}
                  This article by {props.article.source.name} is missing a
                  description. To find out more, please visit the article
                  online.
                </b>
              </p>
            ) : (
              <b>{props.article.description}</b>
            )}
          </p>
          <p>Published At : {props.article.publishedAt}</p>
        </div>
      </div>
    </div>
  );
}
