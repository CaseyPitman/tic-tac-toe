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
  winStatus: false,
  winner: ''
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
    // console.log(`id: ${id} | letter: ${letter} | turn count: ${this.state.turnCount}`);

    //Filter possible win combos by ones that include last clicked cell
    let posWins = winCombos.filter(combo => combo.includes(id));

    // console.log(posWins);

    //console.log(this.state.board);

    //Filter an array of the cells that contain the last letter clicked
    let currentLetterCells = this.state.board.filter(cur => cur.letter === letter);
    //Map to create an array of indices that are the current letter
    let player = currentLetterCells.map(cur => cur.cell);

   

    // console.log(`player:`)
    // console.log(player);

    //Map remaining possible win combos to find one that includes 

    //check, checkAgainst

    let check = posWins.map((cur) => {
      return cur.every(el => player.includes(el));
    })


    //console.log(check);

    let winIdx = check.indexOf(true);

    // console.log(winIdx);
    // console.log('winning streak');
    // console.log(posWins[winIdx]); 

    let winningCells = posWins[winIdx];

    //A win has been found
    if (check.includes(true)){
      this.setState({winStatus: true});
    }

    //There is a win
    if (this.state.winStatus) {
      // console.log(`${letter} wins`);
      console.log('winning cells');
      console.log(winningCells);
      
      //Filter board down to winning cells
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

    console.log(winningBoard);

     // console.log(winningBoard);


      this.setState({
        winner: letter,
        inProgress:false,
        gameStatus: 'win' ,
        visibleButton: 'reset',
        board: winningBoard      //Make cells unclickable
      })

      //Set button to reset
      //Set winning squares status to win for red background
      //Set tracker to tell who has won
      

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
          updateCell = {this.updateCell}
          winner = {this.state.winner} />


        <Button 
        type = {this.state.visibleButton}
        gameStatus = {this.state.gameStatus}
        changeButton = {this.changeButton} />


      </div>
    );
  }


}

export default App;
