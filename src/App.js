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
    tiles
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Wrapper>
          {this.state.tiles.map((tile, i) => (
            <Tile key={tile.id} gridArea={"tile-" + i + " tile"} img={tile.src} />
          ))}
        </Wrapper>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
