/**
    Este componente contiene la vista principal de la aplicacion con la logica de busqueda
*/

import logoSpotify from './../../assets/images/spotify.png';
import React, { useState,useEffect } from 'react';
import FormBuscar from './FormBuscar';
import Paginador from './../paginador/Paginador';
import ListadoResultados from './../listado_resultados/ListadoResultados';
import './../../assets/css/App.css';

function MainComponent() {
    //Definir estados
    const [busqueda, setBusqueda] = useState("");
    const [desde, setDesde] = useState(0);
    const limite = 10;
    const [hasta, setHasta] = useState(0);
    const [total, setTotal] = useState(0);    
    const [listado, setListado] = useState([]);    

    const changeBusqueda = (e) => {      
        setBusqueda(e.target.value);
    };

    //funcion que consume la API de busqueda
    const realizarBusqueda = () => {
        if(busqueda !== ""){
            fetch("http://localhost:5000/buscar/"+busqueda+'&'+desde+'&'+limite+'&rows')
                .then(res => res.json())
                .then(
                    (result) => {                  
                        setListado(result);
                        setHasta(result.length);                  
                    },              
                    (error) => {                  
                        alert("Error: "+error);
                    }
                );
        }
    }

    useEffect(realizarBusqueda, [desde]);

    //Realizar la busqueda
    const handleBusqueda = (e) => {
        //evitar accion del form
        e.preventDefault();
        //reiniciar controles
        setDesde(0);
        setHasta(0);
        setTotal(0);
        setListado([]);
        //si se ha escrito una busqueda consumir la API
        if(busqueda !== ""){
            fetch("http://localhost:5000/buscar/"+busqueda+'&'+desde+'&'+limite+'&total')
                .then(res => res.json())
                .then(
                    (result) => {                  
                        setTotal(result.length);                  
                    },              
                    (error) => {                  
                        alert("Error: "+error);
                    }
                );

            realizarBusqueda();
        }                          
    };    

    //Botones de avanzar/retroceder
    const handleBack = (e) => { 
        setDesde(desde-10);
        if(desde < 1){
            setDesde(0);            
        }               
    };

    const handleForward = (e) => {               
        if(desde+10 < total){
            setDesde(desde+10);
        }        
    };

    return (
        <div className="fondoScreen">
            <div className="container-fluid">
                <div className="row pt-2">
                    <div className="col-sm-6 d-flex justify-content-center">
                        <img alt="spotify" src={logoSpotify} className="logoSpotify img-fluid"/>
                    </div>
                    <div className="col-sm-6 d-flex align-items-center justify-content-center">
                        <FormBuscar 
                            handleBusqueda={handleBusqueda}
                            changeBusqueda={changeBusqueda}
                            busqueda={busqueda}
                        />
                    </div>                
                </div>
                <br/>
                <ListadoResultados listado={listado}/> 
                {
                    listado.length > 0 ?
                        <Paginador 
                            desde={desde} 
                            hasta={hasta}
                            total={total}                            
                            handleBack={handleBack}
                            handleForward={handleForward}
                        /> 
                    : ''
                }                                         
            </div>
        </div>
    );
}

export default MainComponent;