import React, {Component} from 'react';

import initialBoard from './initialBoardState'
import Board from './board'
import Button from './buttons'
import winCombos from './winCombos'


let initialState = {
  board: initialBoard,
  visibleButton: 'init', //or reset or quit playing
  gameStatus: 'init',    //or 'X' or 'O', or win
  inProgress: false,
  turnCount: 1,
  winStatus: false
}

class App extends Component {
  constructor(props){
    super()

    this.state = initialState;
  }

  //reset
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

  //Check for win
  checkWin = (id, letter) => {
    // console.log('check for win');
    // console.log('combos', winCombos)

    console.log('id and letter', id, letter);
    //Pass in last clicked and see if you can work from there instead of checking the entire thing. 
    //Also consider filtering down to all of whatever letter you are dealing with.
  }

  //User clicks on cell

  updateCell = (id) => {
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

    let updatedCells = this.state.board.map(matchID);
    this.setState({board: updatedCells});

    //Check to see if game has been won (if) update winStatus check, but only if enough plays have been made

    if (this.state.turnCount < 5){
      // console.log('no possible win yet')
    } else {
      let letter = this.state.gameStatus;
      this.checkWin(id, letter);  //if true set state
    }
  
    console.log ('turncount', this.state.turnCount);
    //If no win, change turn tracker 
    if (!this.state.winStatus || this.state.turnCount < 9){
      let turn = (this.state.gameStatus === 'X') ? 'O' : 'X';
      let newTurnCount = this.state.turnCount + 1;
      this.setState({
        gameStatus: turn,
        turnCount: newTurnCount
        });
      
    }
    
    if(!this.state.winStatus && this.state.turnCount === 9){
      console.log('draw');
      this.setState({
        visibleButton: 'reset',
        gameStatus: 'draw'
      });
    }
  }



  render (){

    return (
      <div className="App">

        <Board 
          boardStatus = {this.state.board}
          gameStatus = {this.state.gameStatus}
          inProgress = {this.state.inProgress}
          updateCell = {this.updateCell} />


        <Button 
        type = {this.state.visibleButton}
        gameStatus = {this.state.gameStatus}
        changeButton = {this.changeButton} />


      </div>
    );
  }


}

export default App;
