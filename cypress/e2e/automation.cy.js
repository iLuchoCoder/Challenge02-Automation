/// <reference types="cypress" />

describe('Challenge02-Automation', () => {

  it('userStory01', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#twotabsearchtextbox').type('Keyboards{enter}')
    cy.contains('results for "Keyboards"')
  })

  it('userStory02', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#twotabsearchtextbox').type('Laptops{enter}')
    cy.get('div[class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1"] h2[class="a-size-mini a-spacing-none a-color-base s-line-clamp-2"] span:nth-child(1)').click()
    cy.contains("Back to results")
  })

})