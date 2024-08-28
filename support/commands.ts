export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const openPage = (path: string, options: Partial<Cypress.VisitOptions> = {}) => {
    const url = [Cypress.config('baseUrl'), path].join('/');
    cy.visit(url, options);
};