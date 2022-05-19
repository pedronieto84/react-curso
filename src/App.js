
import './App.css';

const clicked = (parametros) =>{
  console.log(parametros)
}

const hovered = (parametros)=>{
  console.log(parametros)
}


function App() {
  return (
    <div>
      <button onClick={ ()=> clicked('click por ') }>On Click</button>
      <button onMouseOver={ ()=> hovered('click por hover') }>On Hover</button>
    </div>
  );
}

export default App;
