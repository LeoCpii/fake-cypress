export default {
    someText() {
        return cy.get('[data-cy=some-text-message]')
            .scrollIntoView();
    },
};
