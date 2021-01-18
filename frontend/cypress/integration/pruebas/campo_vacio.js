/**
    Este script valida que al dar click con campo vacio no me realice ninguna busqueda
*/

describe("revisar busqueda con campo vacio",()=>{
	it("ir a la pantalla principal del aplicativo",()=>{
		cy.visit("/");
	});

	it("Realizar la busqueda",()=>{
		cy.get("#btnBuscarCancion").click();
	});	
});