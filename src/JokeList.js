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
      // If LS is empty, set jokes to an empty array
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]")
    };
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.loadJokes();
    }
  }

  async loadJokes() {
    let jokes = [];
    while (jokes.length < this.props.numJokes) {
      let res = await axios.get(API_URL, {
        headers: { Accept: "application/json" }
      });
      jokes.push({ id: res.data.id, text: res.data.joke, votes: 0 });
    }

    this.setState({ jokes });
    window.localStorage.setItem("jokes", JSON.stringify(jokes));
  }

  // Handle upvotes and downvotes
  handleVote(id, delta) {
    this.setState(st => ({
      jokes: st.jokes.map(jk =>
        jk.id === id ? { ...jk, votes: jk.votes + delta } : jk
      )
    }));
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
            <Joke
              key={jk.id}
              votes={jk.votes}
              text={jk.text}
              upvote={() => this.handleVote(jk.id, 1)}
              downvote={() => this.handleVote(jk.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
