import React, { useState, useEffect } from "react";
import Axios from "axios";
import NewsItem from "./NewsItem";
export default function NewsList(props) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    Axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=1aaa0f9a190544dc9b3201b5cb1439e1"
    ).then((response) => {
      console.log("RESPONSE", response);
      setArticles(response.data.articles);
    });
  }, []);
  return (
    <div className="newsList" id="newsList">
      {articles.map((article) => {
        return <NewsItem className="item" article={article} />;
      })}
    </div>
  );
}
