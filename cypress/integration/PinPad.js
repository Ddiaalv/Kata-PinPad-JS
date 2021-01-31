describe('PinPad', () => {
  const URL = 'http://localhost:3000/'
  it('Type the correct pin', function () {
    cy.visit(URL)
    for (let index = 1; index <= 6; index++) {
      cy.get('.css-8bss33 > :nth-child(1)').click()
    }
    cy.get('[data-testid=padScreen]').contains('CORRECT')
  })
  it('Type the incorrect pin', function () {
    cy.visit(URL)
    for (let index = 1; index <= 6; index++) {
      cy.get(`.css-8bss33 > :nth-child(${index})`).click()
    }
    cy.get('[data-testid=padScreen]').contains('ERROR')
  })
})
