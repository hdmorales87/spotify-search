/**
	Este componente contiene el listado de los resultados
*/

import DetalleResultado from './DetalleResultado';
import React, { useState } from 'react';

function ListadoResultados({listado}) {

	const [show, setShow] = useState(false);
	const [detail, setDetail] = useState([]);

	//calcular los milisegundos
	const milisecondsToString = (miliseconds) => {
		let seconds = (miliseconds/1000);  	
	  	let minute = Math.floor((seconds / 60) % 60);	  	
	 	let second = Math.round(seconds % 60);
	  	second = (second < 10)? '0' + second : second;
	  	return minute + ':' + second;
	}

	const viewButton = (detalle) => {
		setShow(true);
		setDetail(detalle);
	};

	return (
		<div className="container titleResults contenedorResultados">
			{
				listado.length > 0 ?
					<div style={{fontSize:'24px'}}>
						Resultados
						<hr/>
					</div>
				: ''
			}			
			
			{
				listado.map((formFields,i) => {
					console.log(formFields)
					return (<><div key={i} className="container textResults">
								<div className="row">
									<div className="caratula-fixed col-sm d-flex align-items-center justify-content-center">
										<img alt="caratula" className="imagen-caratula" src={formFields.album.images[1].url} />
									</div>
									<div className="col-sm">
										<div style={{whiteSpace:'normal'}} className="titleResults">
											<span class="view-detalle" onClick={() => viewButton(formFields)}>{formFields.name}</span>
										</div>
										<div>
											{formFields.artists[0].name}
										</div>
									</div>
									<div className="caratula-fixed col-sm">
										<div className="titleResults">
											{milisecondsToString(formFields.duration_ms)}
										</div>
									</div>
								</div>
								
							</div>
							<hr className="lineaBlanca"/></>)
				})
			}
			<DetalleResultado show={show} setShow={setShow} detail={detail} milisecondsToString = {milisecondsToString}/>			
		</div>
	);
}

export default ListadoResultados;