/**
  Este componente contiene la modal con el detalle del resultado
*/

import Modal from 'react-bootstrap/Modal';

function DetalleResultado({show,setShow,detail,milisecondsToString}) { 
  
    //controles para reproducir la canción e ir al album

    const handleReproducir = (url) => {        
        window.open(url, "_blank");                
    };

    const abrirAlbum = (url) => {        
        window.open(url, "_blank");
    };

    return (    
        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            contentClassName="modal-detalle"        
        >
          <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                  Detalle de la Canción
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {
              Object.keys(detail).length > 0 ?
                  <div className="container">
                      <div className="row pb-3">
                          <div className="caratula_fixed col-sm d-flex align-items-center justify-content-center">
                              <img alt="caratula" className="imagen-caratula imagen-caratula-detalle" src={detail.album.images[1].url} />
                          </div>
                          <div className="col-sm">
                              <div style={{whiteSpace:'normal'}} className="pt-2 texto-descripcion">
                                  <span class="font-weight-bold">Titulo:</span> {detail.name}
                              </div>                              
                              <div className="texto-descripcion">
                                  <span class="font-weight-bold">Artista:</span> {detail.artists[0].name}
                              </div>
                              <div className="texto-descripcion">
                                  <span class="font-weight-bold">Duración:</span> {milisecondsToString(detail.duration_ms)}
                              </div>
                              <div className="texto-descripcion">
                                  <span class="font-weight-bold">Album:</span> <span className="view-detalle" onClick={(e) => abrirAlbum(detail.album.external_urls.spotify,e)}>{detail.album.name}</span>
                              </div>
                              <div className="texto-descripcion">
                                  <span class="font-weight-bold">Fecha:</span> {detail.album.release_date}
                              </div>
                          </div>                    
                      </div>                      
                      <div className="container d-flex pt-2">                          
                          <div className="col-sm" style={{textAlign:'center'}}>
                              <button className="btn btn-success mb-2" onClick={(e) => handleReproducir(detail.external_urls.spotify,e)}>Reproducir</button>
                          </div>
                      </div>
                  </div>
              : ''
          }          
          </Modal.Body>
        </Modal>    
    );
}

export default DetalleResultado;