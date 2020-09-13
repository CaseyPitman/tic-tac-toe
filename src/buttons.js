/* This module conditionally renders the button 
based on the current stage the game is in. */


import React from 'react';


let Button  = (props) => {

   //Click Handler changes button function dependent on stage in game
   let handleClick = () => {
      props.changeButton(props.gameStatus);
   }

   //Determine Button to show based on context
   let buttonText = '';
   if (props.type === 'init'){
      buttonText = 'Start';
   } else if (props.type === 'reset'){
      buttonText = 'Play Again';
   } else {
      buttonText = 'Quit';
   }

   return(
      <div className = 'button-div'>
         <button className = 'button' onClick = {handleClick}>{buttonText}</button>
      </div>
   )
}

export default Button;