import React from 'react'


let Cell = (props) => {



//clickHandler to change state when clicking
   let handleClick =() => {
      // console.log(props.inProgress)

      //If game hasn't started, you can't click the cell
      if (!props.inProgress){
         alert('not yet');
         return;
      } else {
         props.updateCell();
         //else go to change cell function in App.js

      }
   }



   let currentClass = 'cell';
   if (props.status ===  'occupied'){
      currentClass += ' occupied'
   } else if (props.status === 'win'){
      currentClass += ' win'
   } else {
      currentClass += ' empty'
   }

   return (

    

      <td className = {currentClass} onClick = {handleClick}></td>
   )

}

export default Cell;