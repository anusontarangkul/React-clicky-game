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
    this.setState({ message: "Let's play" })
    if (!clickedCheck.includes(currentId)) {
      clickedCheck.push(currentId)
      let newCount = this.state.score + 1;
      this.setState({ score: newCount });
      this.setState({ message: "Good Job!" })
      if (newCount > this.state.highScore) {
        this.setState({ highScore: newCount })
      }
    } else {
      this.setState({ score: 0 });
      this.setState({ message: "Incorrect" })
      clickedCheck = [];
    }

    const arr = this.state.Memes;
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * arr.length);
      let hold = arr[i];
      arr[i] = arr[j];
      arr[j] = hold;
    }
    this.setState({ Memes: arr });
  };


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
            <div className="col-3">
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
        </div>

      </Wrapper>
    )

  }
}
export default App;

