import React, {Component} from 'react';



class Button extends Component {
   constructor(props){
      super(props)

   }




   render(){
      return(

        
         <div className = 'button-div'>
            <button className = 'begin'>Begin Playing</button>
         </div>

         // <div className = 'button-div'>
         //    <button className = 'reset'>Play Again</button>
         // </div>


         


      )
   }


}

export default Button;