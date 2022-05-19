
import './App.css';
import Usuario from './componentes/Usuario'




function App() {


  const dataDeUsuarios = [
    { nombre: 'Pedro', edad: 38 },
    { nombre: 'Marta', edad: 30 },
    { nombre: 'Lie',   edad: 30 }
  ]

  return (
    <div>
      <ul>
      {
        dataDeUsuarios.map((u)=>{
          return <li> <Usuario usuario={u}/> </li> 
        })
      }
      </ul>
      
    </div>
  );
}

export default App;
