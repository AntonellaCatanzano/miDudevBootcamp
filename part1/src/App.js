// Lo primero que hace es importar los estilosas
import './App.css';
// importamos el módulo para poder usarlo
import Mensaje from './Mensaje.js';

// Los componentes tienen que crearse por fuera. No se deben crear componnetes dentro de otros componentes

// Creamos un primer componente
/*const Mensaje = () => {
  return <h1>Hola Mundo</h1>
};*/

// Creamos el segundo componente. Los componentes siempre se declaran en Mayúscula
// const descripcion = () => {
const Descripcion = () => {
  return <p>Esta es la App del curso Fullstack Bootcamp de MiDu</p>
}

// un componente no es más que declarar una función 
function App() {  
  const a = 2;
  const b = 3;
  // Las llaves evalúan lo que está pasando
  return ( 
    <div className="App">
      <Mensaje color='blue' message='Estamos trabajando'/>
      <Mensaje color='green' message='En un Curso' />
      <Mensaje color='red' message='De React' />
      <h2>Título de la App</h2>  
      <Descripcion></Descripcion>    
      <strong>Estamos trabajando en ello</strong>
      <div>
        <p>El resultado es:</p>        
        {a + b}
      </div>
    </div>
  );
}

export default App;
