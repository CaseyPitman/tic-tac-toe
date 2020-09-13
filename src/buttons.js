import React from 'react';



let Button  = (props) => {

   //Click Handler
   let handleClick = () => {
      // Changes button function dependent on stage in game
      props.changeButton(props.gameStatus);
   }

   //Determine Button to show based on context

   let buttonText = '';
   // console.log(props.type)
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