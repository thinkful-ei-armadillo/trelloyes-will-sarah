import React from 'react';
import Card from './CARD';
import List from './LIST';
import STORE from './STORE';



function App() {

  return (
    <main className='App'>
      <Card />
      {/* content goes here */}
    </main>
  );
}

// function Card(props) {
//   console.log(`Card is running somewhere.`)
//   return (
//     <span className='title'>
    
//       <div className="Card">
//       <h3>First card</h3>
//           <span className='content'>
//            {props.children}
//           <p>lorem ipsum</p>
//           </span>
//       </div>
//     </span>
//   )
// }




export default App;
