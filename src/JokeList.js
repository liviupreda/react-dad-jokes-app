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
    let jokes = [];
    while (jokes.length < this.props.numJokes) {
      let res = await axios.get(API_URL, {
        headers: { Accept: "application/json" }
      });
      jokes.push({ text: res.data.joke, votes: 0, id: res.data.id });
    }

    this.setState({ jokes });
  }

  handleVote(id, delta) {
    // Handle upvotes and downvotes
  }

  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad </span>Jokes
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt="Laughing Emoji"
          />
          <button className="JokeList-getmore">Get More Jokes</button>
        </div>
        <div className="JokeList-jokes">
          {this.state.jokes.map(jk => (
            <Joke key={jk.id} votes={jk.votes} text={jk.text} />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
