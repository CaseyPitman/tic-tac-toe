import React, {Component} from 'react';
import Button from './buttons'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      visibleButton: 'begin'
    }
  }


  render (){

    return (
      <div className="App">

        <table className = 'game-board' cellSpacing = '0'>
          <tr className = 'title' >
            <th className = 'title-text' colSpan = '3'>Tic Tac Toe</th>
          </tr>
          <tr className = 'row-0'>
            <td className = 'cell 0-0 win'>X</td>
            <td className = 'cell 0-1 occupied'>O</td>
            <td className = 'cell 0-2 empty'></td>
          </tr>
          <tr className = 'row-1'>
            <td className = 'cell 1-0 occupied'>X</td>
            <td className = 'cell 1-1 win'>X</td>
            <td className = 'cell 1-2 occupied'>O</td>
          </tr>
          <tr className = 'row-2'>
            <td className = 'cell 2-0 occupied'>O</td>
            <td className = 'cell 2-1 occupied'>O</td>
            <td className = 'cell 2-2 win'>X</td>
          </tr> 
          <tr className = 'turn-tracker' >
            <th className = 'turn-tracker-text' colSpan = '3'>X Wins!</th>
          </tr>
        </table>


        <Button />


      </div>
    );
  }


}

export default App;
