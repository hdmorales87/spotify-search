/**
	Este componente contiene el formulario para buscar canciones
*/

function FormBuscar({handleBusqueda,changeBusqueda,busqueda}) {
    return (
        <form className="form-inline mt-2" action="">
            <div className="form-group mb-2 mx-sm-3 mr-1" style={{marginLeft:'0px'}}>
                <input type="text" value={busqueda} onChange={changeBusqueda} className="form-control inputBuscar" id="inputBuscarCancion" aria-describedby="emailHelp" placeholder="Buscar Canciones"/>
            </div>
            <button id="btnBuscarCancion" className="btn btn-success mb-2" onClick={handleBusqueda}>Buscar</button>
        </form>
    );
}

export default FormBuscar;