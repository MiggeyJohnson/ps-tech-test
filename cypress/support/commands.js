// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add('visitPokerStars', () => {
    cy.visit('https://www.pokerstarssports.uk/')
})

Cypress.Commands.add('setupPokerStarsDartsRoutes', () => {
    cy.server()
    cy.route('GET', 'sportsbook/v1/api/getCompetitionEvents**').as('getComp')
    cy.route('GET', '/sportsbook/v1/api/getEvent**').as('getEvent')
})
