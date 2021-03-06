import React from "react";
import ListItem from './news_list_item';

const NewsList = props => {
  const items = props.news.map(item => {
    return (
      <ListItem key={item.id} item={item}>
      {props.children}
      </ListItem>
    );
  });
  return <div>{items}</div>;
};

export default NewsList;
