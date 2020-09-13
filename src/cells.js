import React from 'react'


let Cell = (props) => {



//clickHandler to change state when clicking
   let handleClick =(event) => {
      // console.log(props.inProgress)

      //If game hasn't started, you can't click the cell
      if (!props.inProgress){
         return;
      } else if(props.status === 'occupied'){
         return;
      } else {
         //Identifies cell clicked
         let id = props.id;
         props.updateCell(id);
      }
   }



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