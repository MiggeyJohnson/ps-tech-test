// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// I had to add this to ignore an uncaught exception on the Poker Stars Home Page
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

// I had to add this libarary to ignore spaces when comparing text.
chai.use(require('chai-string'))
