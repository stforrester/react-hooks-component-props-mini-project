import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    const postsList = posts.map((post) => {
        <Article></Article>
    })
    return (
      <main>
        {postsList}
      </main>
    );
  }
  
  export default ArticleList;