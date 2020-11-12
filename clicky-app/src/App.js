import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Jumbo from "./components/Jumbo";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Memes from "./Memes.json";
import './App.css';

let clickedCheck = [];

class App extends Component {
  state = {
    Memes: Memes,
    score: 0,
    highScore: 0,
    message: "Click a picture to start!"
  }

  handleClick = (event) => {
    const currentId = event.target.getAttribute("data-id");
  }



  render() {
    return (
      <Wrapper>
        <Nav
          score={this.state.score}
          topScore={this.state.highScore}
          message={this.state.message} />
        <Jumbo />
        <div className="container">
          <div className="row">
            {this.state.Memes.map(memes => (
              <Card
                key={memes.id}
                imageURL={memes.image}
                id={memes.id}
                alt={memes.name}
                handleClick={this.handleClick}
              />
            ))}
          </div>

        </div>

      </Wrapper>
    )

  }
}
export default App;

