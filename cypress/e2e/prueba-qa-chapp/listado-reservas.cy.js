describe('Test de página listado de reservas', function() {
    beforeEach(function() {
        cy.visit('https://mggp.pythonanywhere.com');
    });

    it.skip('Pagina Principal', function() {
        cy.get('table')
            .contains('th', 'Check-in') //Fecha entrada
            .contains('th', 'Check-out') //Fecha salida
            .contains('th', 'habitación')
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