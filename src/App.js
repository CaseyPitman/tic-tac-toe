import React, {Component} from 'react';

import initialBoard from './initialBoardState'
import Board from './board'
import Button from './buttons'
import winCombos from './winCombos'

//Beginning state
let initialState = {
  board: initialBoard,
  visibleButton: 'init', //or reset or quit playing
  gameStatus: 'init',    //or 'X' or 'O', or win
  inProgress: false,
  turnCount: 0,
  winStatus: false,
  winner: ''
}

class App extends Component {
  constructor(props){
    super()

    this.state = initialState;
  }

  //Resets game to initial state
  reset = () => {
    this.setState(initialState)
  }

  //Change button based on stage of the game
  changeButton = (stage) => {
    if (stage === 'init') {
      this.setState({
        visibleButton: 'quit', 
        gameStatus: 'X',
        inProgress: true
      });
    } else if (stage === 'X' || stage === 'O' || stage === 'win' || stage ==='draw'){
        this.reset();
    }
  }

  // //Check for win
  checkWin = (id, letter) => {

    //Filter possible win combos by ones that include last clicked cell
    let posWins = winCombos.filter(combo => combo.includes(id));

    //Filter an array of the cells that contain the last letter clicked
    let currentLetterCells = this.state.board.filter(cur => cur.letter === letter);

    //Map to create an array of indices that are marked with the current letter
    let player = currentLetterCells.map(cur => cur.cell);

    //Check to see if any of the win combos are wholly included in the 
    //list of cells containing the current letter 
    let check = posWins.map((cur) => {
      return cur.every(el => player.includes(el));
    })

    //Isolate the winning combination of cells.
    let winIdx = check.indexOf(true);
    let winningCells = posWins[winIdx];

    //A win has been found
    if (check.includes(true)){
      this.setState({winStatus: true});
    }

    //There is a win, then set the state to reflect this
    if (this.state.winStatus) {
      //Change the winning cells to reflect win in state
      let matchWinCells = (cell) =>{ 
        if (!winningCells.includes(cell.cell)){
          return cell;
        } else { 
          //Change cell letter and background
          return {
            ...cell,
            status: 'win'
          }
        }
      }

      let winningBoard = this.state.board.map(matchWinCells);

      this.setState({
        winner: letter,           //Set winner
        inProgress:false,         //End game
        gameStatus: 'win' ,       //Set game status as win
        visibleButton: 'reset',   //Set button to reset game
        board: winningBoard       //Update to final board
      })
    }


    //If board is filled in and nobody has won, display a draw.
    if (this.state.turnCount === 9 && !this.state.winStatus){
      //Sets button to 'play again' and tracker to 'draw'
      this.setState({
        visibleButton: 'reset',
        gameStatus: 'draw'
      });
    }
  }

  //User clicks on cell during game play
  updateCell = async (id) => {
    //Identify and update clicked cell.
    let matchID = (cell) => {
      if (cell.cell !== id){
        return cell;
      } else { 
        //Change cell letter and background
        return {
          ...cell,
          status: 'occupied', 
          letter: this.state.gameStatus
        }
      }
    }

    //Update current turn and turn counter
    let letter = this.state.gameStatus;
    let updatedCells = this.state.board.map(matchID);
    let turn = (this.state.gameStatus === 'X') ? 'O' : 'X';
    let newTurnCount = this.state.turnCount + 1;
    
    //Update board
    await this.setState({
      board: updatedCells,
      gameStatus: turn,
      turnCount: newTurnCount
    });

    //Check to see if the game has been won
    this.checkWin(id, letter);
  }
 
  render (){

    return (
      <div className="App">
        <Board 
          boardStatus = {this.state.board}
          gameStatus = {this.state.gameStatus}
          inProgress = {this.state.inProgress}
          updateCell = {this.updateCell}
          winner = {this.state.winner} 
        />

        <Button 
          type = {this.state.visibleButton}
          gameStatus = {this.state.gameStatus}
          changeButton = {this.changeButton} 
        />
      </div>
    );
  }
}

export default App;
