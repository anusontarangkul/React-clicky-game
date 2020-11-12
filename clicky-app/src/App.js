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



  render() {
    return (
      <Wrapper>
        <Nav></Nav>
        <Jumbo></Jumbo>
        <Card></Card>
        <Footer></Footer>
      </Wrapper>)


  }
}
export default App;


// Components


//navbar
   //dyanmic count
   //prop for score, top, message
  //  score variable = 0
  //  increments

//jumbo


// card

//footer

//json file for my cards

  //need state for my characters
  // here are your states and functions

// are you components and what you want to do to them. 
