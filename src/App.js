import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const GridCell = ({ cell }) => {
  const style = {
    width: 20,
    height: 20,
    border: "1px solid black",
    backgroundColor: cell
  };

  return <div style={style} />;
};

const GridRow = ({ row }) => {
  const style = {
    display: "flex"
  };

  return <div style={style}>{row.map(cell => <GridCell cell={cell} />)}</div>;
};

const Grid = ({ grid }) => {
  return <div>{grid.map(row => <GridRow row={row} />)}</div>;
};

class Game extends React.Component {
  constructor(props) {
    super(props);

    const grid = [];
    for (let i = 0; i < 20; i++) {
      grid.push(new Array(30).fill("red"));
    }

    const bird = {
      height: 10,
      position: 2
    };
    const towers = [
      {
        position: 3,
        height: 5,
        upright: false
      },
      {
        position: 5,
        height: 8,
        upright: false
      },
      {
        position: 7,
        height: 6,
        upright: false
      }
    ];
    grid[bird.height][bird.position] = "yellow";

    this.state = {
      grid,
      bird,
      towers
    };

    this.timerId = setInterval(() => {
      const gridCopy = [];
      for (let i = 0; i < 20; i++) {
        gridCopy.push(new Array(30).fill("red"));
      }
      const birdCopy = this.state.bird;
      birdCopy.height++;
      if (birdCopy.height > 19 || birdCopy.height < 0) {
        birdCopy.height = 10;
      }
      gridCopy[birdCopy.height][birdCopy.position] = "yellow";
      this.setState({
        grid: gridCopy,
        bird: birdCopy
      });
    }, 200);
  }

  render() {
    return <Grid grid={this.state.grid} />;
  }
}

export default Game;
