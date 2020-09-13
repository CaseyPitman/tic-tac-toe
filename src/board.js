/* This module renders the tic tac toe game board  */

import React, {Component} from 'react';
import Cell from './cells'
import Tracker from './tracker'


class Board extends Component {

   render(){ 
    //Render cells
    let cells = this.props.boardStatus.map((cur, ind) => {
    return(

    <Cell 
    key = {this.props.boardStatus[ind].cell} 
    id = {this.props.boardStatus[ind].cell}
    status = {this.props.boardStatus[ind].status} 
    letter = {this.props.boardStatus[ind].letter}
    inProgress = {this.props.inProgress}
    updateCell = {this.props.updateCell}/>)
  });




    return(

      <table className = 'game-board' cellSpacing = '0'>
        <tbody>   
          <tr className = 'title' >
            <th className = 'title-text' colSpan = '3'>Tic Tac Toe</th>
          </tr>
          <tr className = 'row-0'>
            {cells[0]}
            {cells[1]}
            {cells[2]}
          </tr>
          <tr className = 'row-1'>
            {cells[3]}
            {cells[4]}
            {cells[5]}
          </tr>
          <tr className = 'row-2'>
            {cells[6]}
            {cells[7]}
            {cells[8]} 
          </tr> 
          <Tracker 
            gameStatus = {this.props.gameStatus}
            winner = {this.props.winner}
          />
        </tbody>
      </table>
    )
  }
}


export default Board;