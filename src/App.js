import React from 'react';

function App() {
  return (
    <div className="App">
      <table className = 'gameBoard' cellSpacing = '0'>
        <tr className = 'title' >
          <th className = 'title-text' colSpan = '3'>Tic Tac Toe</th>
        </tr>
        <tr className = 'row-0'>
          <td className = 'cell 0-0'>X</td>
          <td className = 'cell 0-1'>O</td>
          <td className = 'cell 0-2'>X</td>
        </tr>
        <tr className = 'row-1'>
          <td className = 'cell 1-0'>X</td>
          <td className = 'cell 1-1'>O</td>
          <td className = 'cell 1-2'>X</td>
        </tr>
        <tr className = 'row-2'>
          <td className = 'cell 2-0'>X</td>
          <td className = 'cell 2-1'>O</td>
          <td className = 'cell 2-2'>X</td>
        </tr>
        
      </table>
    </div>
  );
}

export default App;
