import React, { Component, Fragment } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Wrapper from "./components/wrapper";
import Tile from "./components/tile";
import tiles from "./tiles.json";

class App extends Component {
  state = {
    topScore: 0,
    currentScore: 0,
    clickedTiles: [],
    message: "Click an image to start!",
    tiles
  };

  handleTileClick = index => {
    if (this.state.clickedTiles.includes(index)) {
      this.setState({
        message: "You Lost! Click any of the tiles to start over!",
        clickedTiles: [],
        topScore: this.state.topScore < this.state.currentScore ? this.state.currentScore : this.state.topScore,
        currentScore: 0
      });
    } else {
      var score = this.state.currentScore + 1;
      if (score === 12) {
        this.setState({
          message: "Whoa! You clicked all the bait! Nicely done!",
          clickedTiles: [],
          currentScore: 0,
          topScore: 12
        });
      } else {
        this.setState({
          message: "Nice! Keep Clicking That Bait!",
          clickedTiles: this.state.clickedTiles.concat(index),
          currentScore: this.state.currentScore + 1
        });
      }
    }
  };
  render() {
    return (
      <Fragment>
        <Header topScore={this.state.topScore} currentScore={this.state.currentScore} message={this.state.message} />
        <Wrapper>
          {this.state.tiles
            .sort((a, b) => Math.random() - 0.5)
            .map((tile, i) => (
              <Tile key={tile.id} id={tile.id} gridArea={"tile-" + i + " tile"} img={tile.src} handleClick={this.handleTileClick} index={i} />
            ))}
        </Wrapper>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
