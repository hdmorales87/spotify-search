/**
    Este script realiza el flujo completo del uso de la Aplicación
*/

describe("busqueda de una canción",()=>{
	it("ir a la pantalla principal del aplicativo",()=>{
		cy.visit("/");
	});

	it("Ingresar una palabra en el buscador",()=>{
		cy.get("#inputBuscarCancion").type("cuando cuando");
	});

	it("Realizar la busqueda",()=>{
		cy.get("#btnBuscarCancion").click();
	});

	it("Seleccionar una canción",()=>{
		cy.get("#root > div > div > div.container.titleResults.contenedorResultados > div:nth-child(2) > div > div:nth-child(2) > div.titleResults > span").click();
	});

	it("ir al album",()=>{
		cy.get("body > div.fade.modal.show > div > div > div.modal-body > div > div.row.pb-3 > div:nth-child(2) > div:nth-child(4) > span.view-detalle").click();
	});

	it("reproducir canción",()=>{
		cy.get("body > div.fade.modal.show > div > div > div.modal-body > div > div.container.d-flex.pt-2 > div > button").click();
	});

	it("recorrer resultados paginados hacia adelante",()=>{
		cy.get("body > div.fade.modal.show > div > div > div.modal-header > button").click();
		cy.get('[style="margin-left: 5px;"] > .MuiSvgIcon-root').click();
		cy.get('[style="margin-left: 5px;"] > .MuiSvgIcon-root').click();
		cy.get('[style="margin-left: 5px;"] > .MuiSvgIcon-root').click();
		cy.get('[style="margin-left: 5px;"] > .MuiSvgIcon-root').click();
	});

	it("recorrer resultados paginados hacia atrás",()=>{		
		cy.get(':nth-child(2) > .MuiSvgIcon-root').click();
		cy.get(':nth-child(2) > .MuiSvgIcon-root').click();
		cy.get(':nth-child(2) > .MuiSvgIcon-root').click();
		cy.get(':nth-child(2) > .MuiSvgIcon-root').click();
	});

	it("ingresar campo vacio",()=>{		
		cy.get("#inputBuscarCancion").clear();
	});

	it("Oprimir el boton buscar",()=>{
		cy.get("#btnBuscarCancion").click();
		cy.get("#btnBuscarCancion").click();		
	});
});