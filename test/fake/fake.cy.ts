/// <reference types='cypress' />

import mapper from './mapper';

describe('Fake Test', () => {
    beforeEach(() => { cy.principal(); });

    it('should show correct message', () => {
        mapper.someText()
            .should('contain', 'Sou uma mensagem de texto maneira');
    });
});
