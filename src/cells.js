import React from 'react'


let Cell = (props) => {

   //console.log('props', props.status);

//clickHandler to change state when clicking




   let currentClass = 'cell';
   if (props.status ===  'occupied'){
      currentClass += ' occupied'
   } else if (props.status === 'win'){
      currentClass += ' win'
   } else {
      currentClass += ' empty'
   }


   return (

    

      <td className = {currentClass}></td>
   )

}

export default Cell;