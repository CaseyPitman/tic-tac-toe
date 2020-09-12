import React from 'react';


let Tracker = (props) => {

   let text = 'Let\'s Play';
     
   if (props.gameStatus === 'X'){
      text = `X's turn`;
   } else if (props.gameStatus === 'O') {
      text = `O's turn`;
   } else if (props.gameStatus === 'win'){
      text = 'Game Over'
   }


   return (
      <tr className = 'turn-tracker' >
         <th className = 'turn-tracker-text' colSpan = '3'>{text}</th>
      </tr>
   )


}

export default Tracker;