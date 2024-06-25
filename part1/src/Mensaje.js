//A los módulos se le pueden pasar parámetros. En react se llaman "props"
/*const Mensaje = () => {
    return <h1>Hola Funciona desde el módulo</h1>
};*/
const Mensaje = (props) => {    
    return <h1 style={{ color: props.color }}>{props.message}</h1>
};

  export default Mensaje;