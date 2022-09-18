// let filaIndividual = document.getElementsByTagName("tr")[1];
// //cy.get('td').should('contain.text', 'Individual')
// let individualDisponible = filaIndividual.getElementsByTagName("td")[2];

describe('Test para PruebaQA', function() {
    beforeEach(function() {
        cy.visit('https://mggp.pythonanywhere.com/room_types/');
    });

    it('Campos requeridos Nueva Reserva', function() {
        cy.visit('https://mggp.pythonanywhere.com/room_types/');
        cy.get('input[type=number]');
        cy.get('input[type=date]');
        //Hay que comprobar los nombres de esos inputs
    })

    it('Comprobar Tabla de disponibilidad', function() {
        cy.get('[name="start_date"]').type('2022-09-16');
        cy.get('[name="end_date"]').type('2022-09-18');
        cy.get('.btn')
            .should('contain.text', 'Buscar disponibilidad')
            .click();
        cy.get('body').find('table');
        cy.get('td')
            .should($td => {
                expect($td.get(0).textContent).to.equal('Individual');
                expect($td.get(2).textContent).to.equal('9'); //10
                expect($td.get(5).textContent).to.equal('Doble');
                expect($td.get(7).textContent).to.equal('5');
                expect($td.get(10).textContent).to.equal('Triple');
                expect($td.get(12).textContent).to.equal('3'); //4
                expect($td.get(15).textContent).to.equal('Cuádruple');
                expect($td.get(17).textContent).to.equal('6');
            });
    });

});