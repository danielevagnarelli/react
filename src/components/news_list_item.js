import React from "react";
import { css } from "glamor";

//instead of {item} you can still use props. {item} means: from the prop just give me the part called item
//if you use ({items}) you can then write item.title
//if you use (props) you can then write props.item.title
const ListItem = ({ item }) => {
  let news_item = css({
    padding: "20px",
    boxSizing: "border-box",
    borderBottom: "1px solid gray",
    ":hover": {
      color: "red"
    },
    '@media(max-width: 500px)':{
        color:'blue'
    }
  });

  let item_gray = css({
    background: "lightgrey"
  });

  return (
    <div className={`${news_item} ${item_gray}`}>
      <h3>{item.title}</h3>
      <div>{item.feed}</div>
    </div>
  );
};

export default ListItem;
