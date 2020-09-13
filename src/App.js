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
  turnCount: 0,
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

  // //Check for win
  checkWin = (id, letter) => {
    // console.log('combos', winCombos)

   
    //Pass in last clicked and see if you can work from there instead of checking the entire thing. 
    //Also consider filtering down to all of whatever letter you are dealing with.

    // Testing
    if (this.state.turnCount === 4){
      this.setState({winStatus: true})
    }

    //There is a win
    if (this.state.winStatus) {
      console.log(`${letter} wins`);
      //Set button to reset
      //Set winning squares status to win for red background
      //Set tracker to tell who has won
      //Make squares unclickable

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

  //User clicks on cell

  updateCell = async (id) => {
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

    let letter = this.state.gameStatus;
    let updatedCells = this.state.board.map(matchID);
    let turn = (this.state.gameStatus === 'X') ? 'O' : 'X';
    let newTurnCount = this.state.turnCount + 1;
    
    await this.setState({
      board: updatedCells,
      gameStatus: turn,
      turnCount: newTurnCount
    });

    this.checkWin(id, letter);

  }
  

  // componentDidUpdate(){
  //   console.log(this.state)
  // }




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
