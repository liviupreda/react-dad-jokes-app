// GET https://icanhazdadjoke.com/
// GET https://icanhazdadjoke.com/search

import React, { Component } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

let API_URL = "https://icanhazdadjoke.com/";

class JokeList extends Component {
  static defaultProps = {
    numJokes: 10
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    };
  }

  componentDidMount() {
    this.loadJokes();
  }

  async loadJokes() {
    let res = await axios.get(API_URL, {
      headers: { Accept: "application/json" }
    });
    console.log(res.data.joke);
  }

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
