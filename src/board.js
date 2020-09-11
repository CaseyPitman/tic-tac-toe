import React, {Component} from 'react';
import Cell from './cells'
import Tracker from './tracker'


class Board extends Component {

   render(){ 

   console.log(this.props.currentTurn)

      return(

         <table className = 'game-board' cellSpacing = '0'>
          <tbody>   
            <tr className = 'title' >
              <th className = 'title-text' colSpan = '3'>Tic Tac Toe</th>
            </tr>
            <tr className = 'row-0'>
              <Cell 
                key = {this.props.boardStatus[0].cell} 
                status = {this.props.boardStatus[0].status} 
                letter = {this.props.boardStatus[0].letter}/>
              <Cell />
              <Cell />              
            </tr>
            <tr className = 'row-1'>
              <Cell />
              <Cell />
              <Cell /> 
            </tr>
            <tr className = 'row-2'>
              <Cell />
              <Cell />
              <Cell /> 
            </tr> 
            <Tracker 
              currentTurn = {this.props.currentTurn}
            />
          </tbody>
        </table>
      )
   }
}


export default Board;