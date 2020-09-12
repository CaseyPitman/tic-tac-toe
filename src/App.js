import React, {Component} from 'react';

import initialBoard from './initialBoardState'
import Board from './board'
import Button from './buttons'


let initialState = {
  board: initialBoard,
  visibleButton: 'init', //or reset or quit playing
  gameStatus: 'init',    //or 'X' or 'O', or win
  inProgress: false,
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
    } else if (stage === 'X' || stage === 'O' || stage === 'win'){
        this.reset();
    }
  }

  //User clicks on cell

  updateCell = () => {
    alert('changing the cell')
    //This one does a lot
    //Changes cell to occupied
    //Changes cell to include proper letter
    //checks for win
      //if win then ends game and all that entails
    //Switches game status between player turns
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
