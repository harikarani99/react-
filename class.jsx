import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class course extends React.Component {
   render() {
    let courses = ['react js', 'javascript', 'Html & css']

return (
     <header>
       <ul>
         <li>{courses[0]}</li>
         <li>{courses[1]}</li>
         <li>{courses[2]}</li>
        </ul>
      </header>
      
        )
   }
   
  }

    root.render(<courses/>); 