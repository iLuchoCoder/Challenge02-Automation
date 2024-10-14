/// <reference types="cypress" />

describe('Challenge02-Automation', () => {

  it('userStory01', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#twotabsearchtextbox').type('Keyboards{enter}')
    cy.contains('results for "Keyboards"')
  })
})