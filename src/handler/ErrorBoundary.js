
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { tieneError: false, mensajeError: "" };
    }
  
    static getDerivedStateFromError(error) {
      // Método 1
      return { hasError: true, errorMessage: error.message };
    }
  
}


render(){
    if(this.state.hasError)
    return(
        <div className="px-4 py-2 m-4">
        <h1 className="mt-2 font-bold text-lg mb-1">Hubo un error:</h1>
        <p> {this.state.mensajeError} </p>
        <button
          className="px-4 py-2 rounded bg-blue-800 hover:bg-blue-700 active:outline text-sm"
          onClick={() => (window.location.href = "/")}
        >
          !Ups algo ha salido mal!
        </button>
      </div>
    )
}