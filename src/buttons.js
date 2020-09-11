import React from 'react';



let Button  = (props) => {

   //Click Handler
   let clickHandler = () => {
      alert('button clicked')
      //Change button type in state
      //Change text in board footer
   }

   //Determine Button to show based on context

   let buttonText = '';
   // console.log(props.type)
   if (props.type === 'begin'){
      buttonText = 'Start';
   } else if (props.type === 'reset'){
      buttonText = 'Play Again';
   } else {
      buttonText = 'Quit';
   }

   
   return(

      <div className = 'button-div'>
         <button className = 'button' onClick = {clickHandler}>{buttonText}</button>
      </div>
   )
}

export default Button;