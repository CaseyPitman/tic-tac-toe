import React from 'react';


let Tracker = (props) => {

   let text = 'Let\'s Play';
     
   if (props.currentTurn === 'X'){
      text = `X's turn`;
   } else if (props.currentTurn === 'O') {
      text = `O's turn`;
   }


   return (
      <tr className = 'turn-tracker' >
         <th className = 'turn-tracker-text' colSpan = '3'>{text}</th>
      </tr>
   )


}

export default Tracker;