import React, {Component} from 'react';
import Cell from './cells'


class Board extends Component {






   render(props){ 


      return(

         <table className = 'game-board' cellSpacing = '0'>
          <tr className = 'title' >
            <th className = 'title-text' colSpan = '3'>Tic Tac Toe</th>
          </tr>
          <tr className = 'row-0'>
            <Cell 
              key = {props[0].cell}   
              status = {props[0].status} 
              letter = {props[0].letter}/>
            
          </tr>
          <tr className = 'row-1'>
            <td className = 'cell 3 empty'>X</td>
            <td className = 'cell 4 empty'>X</td>
            <td className = 'cell 5 emppty'>O</td>
          </tr>
          <tr className = 'row-2'>
            <td className = 'cell 6 empty'>O</td>
            <td className = 'cell 7 empty'>O</td>
            <td className = 'cell 8 empty'>X</td>
          </tr> 
          <tr className = 'turn-tracker' >
            <th className = 'turn-tracker-text' colSpan = '3'>X Wins!</th>
          </tr>
        </table>


      )
   }
}


export default Board;