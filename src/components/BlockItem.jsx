import React from "react";

function BlockItem({ item }) {
  return (
    <article className="article-item">
      <img src={item.image} alt="spring boot" className="article-img" />
      <div className="article-wrapper">
        <h3 className="article-header">{item.title}</h3>
        <p className="article-text">{item.description}</p>
      </div>
    </article>
  );
}

export default BlockItem;
