describe('Test para PruebaQA', function() {
    beforeEach(function() {
        cy.visit('https://mggp.pythonanywhere.com');
    });

    it('Pagina Principal', function() {
        cy.get('table')
            .contains('th', 'fecha entrada')
            .contains('th', 'fecha salida')
            .contains('th', 'tipo de habitación')
            .contains('th', 'nº huéspedes')
            .contains('th', 'datos de contacto')
            .contains('th', 'precio total')
            .contains('th', 'localizador')
            .contains('th', 'habitación');
    });

    it('Boton Nueva Reserva', () => {
        cy.get('.btn').should('contain.text', 'Nueva reserva');
        cy.get('.btn').click();
        cy.location('pathname').should('eq', '/room_types/');
    });
});