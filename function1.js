 const root = ReactDOM.createRoot(document.getElementById('root'));
function Header() {
let courses= [
      'React Js','javascript','Html & css'
      ]
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

   root.render(<courses/>);
  