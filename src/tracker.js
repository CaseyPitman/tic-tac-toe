/* This module maintains and updates the game status and 
turn tracker at the bottom of the board */

import React from 'react';

let Tracker = (props) => {
   //Waiting for game to start
   let text = 'Let\'s Play';
   //Displays current player
   if (props.gameStatus === 'X'){
      text = `X's turn`;
   } else if (props.gameStatus === 'O') {
      text = `O's turn`;
   } 
   // Game has been won
   else if (props.gameStatus === 'win'){
      text = (props.winner === 'X') ? 'X wins!' : 'O wins!'
   } 
   // Game is a draw
   else if (props.gameStatus === 'draw'){
      text = 'Draw';
   }


   return (
      <tr className = 'turn-tracker' >
         <th className = 'turn-tracker-text' colSpan = '3'>{text}</th>
      </tr>
   )
}

export default Tracker;