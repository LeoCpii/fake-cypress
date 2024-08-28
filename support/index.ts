import { openPage } from './commands';

// VISIT PAGES
Cypress.Commands.add('principal', () => { openPage(''); });

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to select DOM element by data-cy attribute.
             * @example cy.home('greeting')
            */

            // PAGES
            principal(): void;
        }
    }
}
