import './App.css';
import freecodecampLogo from './img/free-logo.png';
import Tarea from './components/Tarea';
import TareaForm from './components/TareaForm';
import ListaTareas from './components/ListaTareas';

function App() {
  return (
    
    <div className="aplicacion-tareas">
      <div className='freeCodeCamp-logo-contenedor'> 
        <img src={freecodecampLogo} 
            className='freecodecamp-logo'
            alt="logo"
            />
      </div> 
      <div className='body'>
        
          <div className='tareas-lista-principal'>        
            <h1 className='titulo-tareas'>
              Mis Tareas
            </h1>
            <ListaTareas/>
          </div>   
      </div>
    </div>
  );
}

export default App;
