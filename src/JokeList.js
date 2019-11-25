import React, { Component } from "react";
import axios from "axios";
import uuid from "uuid";
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
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      loading: false
    };
    this.seenJokes = new Set(this.state.jokes.map(jk => jk.text));
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.loadJokes();
    }
  }

  // Click events on 'Get more jokes' button
  handleClick() {
    this.setState({ loading: true }, this.loadJokes);
  }

  async loadJokes() {
    try {
      let jokes = [];
      while (jokes.length < this.props.numJokes) {
        let res = await axios.get(API_URL, {
          headers: { Accept: "application/json" }
        });
        if (!this.seenJokes.has(res.data.joke)) {
          jokes.push({ id: uuid(), text: res.data.joke, votes: 0 });
        } else {
          console.log("Found a duplicate");
          console.log(res.data.joke);
        }
      }

      this.setState(
        st => ({
          jokes: [...st.jokes, ...jokes],
          loading: false
        }),
        () =>
          window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
      );
    } catch (err) {
      alert(err);
      this.setState({ loading: false });
    }
  }

  // Handle upvotes and downvotes
  handleVote(id, delta) {
    this.setState(
      st => ({
        jokes: st.jokes.map(jk =>
          jk.id === id ? { ...jk, votes: jk.votes + delta } : jk
        )
      }),
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="JokeList-spinner">
          <i className="fas fa-8x fa-laugh fa-spin" />
          <h1 className="JokeList-title">Loading Jokes...</h1>
        </div>
      );
    }

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
          <button className="JokeList-getmore" onClick={this.handleClick}>
            Get More Jokes
          </button>
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
