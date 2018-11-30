import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import JSON from "./db.json";
import NewsList from "./components/news_list";

class App extends Component {
  state = {
    news: JSON
  };
  render() {
    return (
      <div>
        <Header />
        The news are:
        <NewsList news={this.state.news}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root")); //what to render and where to render it
