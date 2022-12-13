describe('automated login test', () => {
  it('passes', () => {
    cy.visit('https://localhost/konseling')
    cy.get('input[name="username"]').type('yanuautomated')
    cy.get('input[name="password"]').type('yanu')
    cy.get('button[name="login"]').click() 
    cy.get('img').click()
  })
  
})