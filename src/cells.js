/* This module renders and updates the cells of the game 
board based on user interaction. */

import React from 'react'

let Cell = (props) => {

   //ClickHandler to change state of a clicked cell.
   let handleClick =(event) => {
      //If game hasn't started, you can't click the cell
      if (!props.inProgress){
         return;
      } 
      /*  Game is in progress and a square has been clicked. It 
      cannot be clicked again. */
      else if(props.status === 'occupied'){
         return;
      } 
      //Cell has not been clicked and is thus available.
      else {
         //Identifies cell clicked
         let id = props.id;
         //Updates cell
         props.updateCell(id);
      }
   }

   //Alters the state of the cell to reflect game play decisions.
   let currentClass = 'cell';
   let letter = ''
   if (props.status ===  'occupied'){
      currentClass += ' occupied'
      letter = props.letter;
   } else if (props.status === 'win'){
      currentClass += ' win'
      letter = props.letter;
   } else if (props.inProgress){
      currentClass += ' empty'
   }

   return (
      <td className = {currentClass} onClick = {handleClick}>{letter}</td>
   )
}

export default Cell;