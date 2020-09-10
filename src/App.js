import React, {Component} from 'react';

import initialBoard from './initialBoardState'
import Board from './board'
import Button from './buttons'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      board: initialBoard,
      visibleButton: 'begin',
      winStatus: false
    }
  }


  render (){

    return (
      <div className="App">

        <Board 
          boardStatus = {this.state.board}
        />


        <Button />


      </div>
    );
  }


}

export default App;
