/**
	Este componente contiene el control de paginas de la parte inferior
*/

import ArrowBack from '@material-ui/icons/ArrowBackIos';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';

function Paginador({desde,hasta,total,handleBack,handleForward}) {
	return (<div className="container paginador">
				<div className="pr-2" style={{paddingTop:'1px'}}>
					Mostrando {desde+1} a {desde+hasta} de {total} 
				</div>
				<div className="btnsPaginador" onClick={handleBack}> 
					<ArrowBack fontSize="small" />
				</div>
				<div className="btnsPaginador" style={{marginLeft:'5px'}} onClick={handleForward}> 
					<ArrowForward fontSize="small"/>
				</div>
			</div>);
}

export default Paginador;