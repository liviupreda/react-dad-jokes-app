import React, { Component } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

class JokeList extends Component {
  render() {
    return (
      <div className="JokeList">
        <h1>Dad Jokes</h1>
        <Joke />
      </div>
    );
  }
}

export default JokeList;
