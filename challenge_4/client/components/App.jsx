import React from 'react';
import checkForConflicts from '../Conflicts.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 'Player 1',
      plays: 0,
      board: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ],
      spacesLeftInCol0: 5,
      spacesLeftInCol1: 5,
      spacesLeftInCol2: 5,
      spacesLeftInCol3: 5,
      spacesLeftInCol4: 5,
      spacesLeftInCol5: 5,
      spacesLeftInCol6: 5
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let plays = this.state.plays
    let color;
    let player;
    if (plays % 2 === 0) {
      color = 1;
      player = 'Player 1';
      this.setState({ player: 'Player 2' })
    } else if (plays % 2 === 1) {
      color = 2;
      player = 'Player 2';
      this.setState({ player: 'Player 1' })
    }

    let col = e.target.id[1];
    let board = this.state.board.slice();
    let temp = 'spacesLeftInCol' + col
    let row;
    let incrementRowIfFilled = () => {
      row = this.state[temp]
      if(board[row][col] > 0 && row >= 0) {
        this.setState({ [temp]: row-=1})
      } else {
        return;
      }
    }
    incrementRowIfFilled()

    if (board[row] === undefined) {
      alert('Column is filled')
    } else {
      board[row][col] = color;
      this.setState({ plays: plays + 1 })
      this.setState({ board });
    }

    let currentCol = [board[0][col], board[1][col], board[2][col], board[3][col], board[4][col], board[5][col]];
    
    if (checkForConflicts(board[row], currentCol, player)) {
      alert(player + ' wins!')
      this.setState({ 
        plays: 0,
        board: [
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ],
        spacesLeftInCol0: 5,
        spacesLeftInCol1: 5,
        spacesLeftInCol2: 5,
        spacesLeftInCol3: 5,
        spacesLeftInCol4: 5,
        spacesLeftInCol5: 5,
        spacesLeftInCol6: 5
      });
    }
  }

  render() {
    return (
     <div>
      <h3>CONNECT FOUR</h3>
      <h3>{this.state.player}'s Turn</h3>
      <div id="connectfour">
        <div className="Row" id="row1">
          <div className="Column" id="x0y0" onClick={this.handleClick}>{this.state.board[0][0]}</div>
          <div className="Column" id="x1y0" onClick={this.handleClick}>{this.state.board[0][1]}</div>
          <div className="Column" id="x2y0" onClick={this.handleClick}>{this.state.board[0][2]}</div>
          <div className="Column" id="x3y0" onClick={this.handleClick}>{this.state.board[0][3]}</div>
          <div className="Column" id="x4y0" onClick={this.handleClick}>{this.state.board[0][4]}</div>
          <div className="Column" id="x5y0" onClick={this.handleClick}>{this.state.board[0][5]}</div>
          <div className="Column" id="x6y0" onClick={this.handleClick}>{this.state.board[0][6]}</div>
        </div>
        <div className="Row" id="row2">
          <div className="Column" id="x0y1" onClick={this.handleClick}>{this.state.board[1][0]}</div>
          <div className="Column" id="x1y1" onClick={this.handleClick}>{this.state.board[1][1]}</div>
          <div className="Column" id="x2y1" onClick={this.handleClick}>{this.state.board[1][2]}</div>
          <div className="Column" id="x3y1" onClick={this.handleClick}>{this.state.board[1][3]}</div>
          <div className="Column" id="x4y1" onClick={this.handleClick}>{this.state.board[1][4]}</div>
          <div className="Column" id="x5y1" onClick={this.handleClick}>{this.state.board[1][5]}</div>
          <div className="Column" id="x6y1" onClick={this.handleClick}>{this.state.board[1][6]}</div>
        </div>
        <div className="Row" id="row3">
          <div className="Column" id="x0y2" onClick={this.handleClick}>{this.state.board[2][0]}</div>
          <div className="Column" id="x1y2" onClick={this.handleClick}>{this.state.board[2][1]}</div>
          <div className="Column" id="x2y2" onClick={this.handleClick}>{this.state.board[2][2]}</div>
          <div className="Column" id="x3y2" onClick={this.handleClick}>{this.state.board[2][3]}</div>
          <div className="Column" id="x4y2" onClick={this.handleClick}>{this.state.board[2][4]}</div>
          <div className="Column" id="x5y2" onClick={this.handleClick}>{this.state.board[2][5]}</div>
          <div className="Column" id="x6y2" onClick={this.handleClick}>{this.state.board[2][6]}</div>
        </div>
        <div className="Row" id="row4">
          <div className="Column" id="x0y3" onClick={this.handleClick}>{this.state.board[3][0]}</div>
          <div className="Column" id="x1y3" onClick={this.handleClick}>{this.state.board[3][1]}</div>
          <div className="Column" id="x2y3" onClick={this.handleClick}>{this.state.board[3][2]}</div>
          <div className="Column" id="x3y3" onClick={this.handleClick}>{this.state.board[3][3]}</div>
          <div className="Column" id="x4y3" onClick={this.handleClick}>{this.state.board[3][4]}</div>
          <div className="Column" id="x5y3" onClick={this.handleClick}>{this.state.board[3][5]}</div>
          <div className="Column" id="x6y3" onClick={this.handleClick}>{this.state.board[3][6]}</div>
        </div>
        <div className="Row" id="row5">
          <div className="Column" id="x0y4" onClick={this.handleClick}>{this.state.board[4][0]}</div>
          <div className="Column" id="x1y4" onClick={this.handleClick}>{this.state.board[4][1]}</div>
          <div className="Column" id="x2y4" onClick={this.handleClick}>{this.state.board[4][2]}</div>
          <div className="Column" id="x3y4" onClick={this.handleClick}>{this.state.board[4][3]}</div>
          <div className="Column" id="x4y4" onClick={this.handleClick}>{this.state.board[4][4]}</div>
          <div className="Column" id="x5y4" onClick={this.handleClick}>{this.state.board[4][5]}</div>
          <div className="Column" id="x6y4" onClick={this.handleClick}>{this.state.board[4][6]}</div>
        </div>
        <div className="Row" id="row6">
          <div className="Column" id="x0y5" onClick={this.handleClick}>{this.state.board[5][0]}</div>
          <div className="Column" id="x1y5" onClick={this.handleClick}>{this.state.board[5][1]}</div>
          <div className="Column" id="x2y5" onClick={this.handleClick}>{this.state.board[5][2]}</div>
          <div className="Column" id="x3y5" onClick={this.handleClick}>{this.state.board[5][3]}</div>
          <div className="Column" id="x4y5" onClick={this.handleClick}>{this.state.board[5][4]}</div>
          <div className="Column" id="x5y5" onClick={this.handleClick}>{this.state.board[5][5]}</div>
          <div className="Column" id="x6y5" onClick={this.handleClick}>{this.state.board[5][6]}</div>
        </div>
      </div>
    </div>
    )
  }
}

export default App;