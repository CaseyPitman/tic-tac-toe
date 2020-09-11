import React, {Component} from 'react';

import initialBoard from './initialBoardState'
import Board from './board'
import Button from './buttons'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      board: initialBoard,
      visibleButton: 'begin', //or reset or quit playing
      currentTurn: 'none',    //or 'X' or 'O'
      winStatus: false
    }
  }


  render (){

    return (
      <div className="App">

        <Board 
          boardStatus = {this.state.board}
          currentTurn = {this.state.currentTurn}
        />


        <Button type = {this.state.visibleButton}/>


      </div>
    );
  }


}

export default App;
