describe('Test de página nueva reserva', function() {
    beforeEach(function() {
        cy.visit('https://mggp.pythonanywhere.com/room_types/');
    });

    it('Campos requeridos Nueva Reserva', function() {
        cy.visit('https://mggp.pythonanywhere.com/room_types/');
        cy.get('input[type=number]');
        cy.get('input[type=date]');
        cy.get('th')
            .should($th => {
                expect($th.get(0).textContent).to.equal('Tipo habitación');
                expect($th.get(1).textContent).to.equal('Capacidad');
                expect($th.get(2).textContent).to.contain('Cantidad');
                expect($th.get(3).textContent).to.contain('Precio');
                expect($th.get(4).textContent).to.contain('');
            });
    });

    it('Comprobar Tabla de disponibilidad', function() {
        cy.get('[name="start_date"]').type('2022-09-16');
        cy.get('[name="end_date"]').type('2022-09-17');
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

    after(function() {
        cy.get('td')
            .should($td => {
                expect($td.get(3).textContent).to.equal('20,00');
                expect($td.get(8).textContent).to.equal('30,00');
                expect($td.get(13).textContent).to.equal('40,00');
                expect($td.get(18).textContent).to.equal('50,00');
            });
    });


});