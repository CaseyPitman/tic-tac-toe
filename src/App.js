import React, {Component} from 'react';

import initialBoard from './initialBoardState'
import Board from './board'
import Button from './buttons'


let initialState = {
  board: initialBoard,
  visibleButton: 'init', //or reset or quit playing
  gameStatus: 'init',    //or 'X' or 'O', or win
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
        gameStatus: 'X'
      });
    } else if (stage === 'X' || stage === 'O' || stage === 'win'){
        this.reset();
    }

  }


  render (){

    return (
      <div className="App">

        <Board 
          boardStatus = {this.state.board}
          gameStatus = {this.state.gameStatus} />


        <Button 
        type = {this.state.visibleButton}
        gameStatus = {this.state.gameStatus}
        changeButton = {this.changeButton} />


      </div>
    );
  }


}

export default App;
