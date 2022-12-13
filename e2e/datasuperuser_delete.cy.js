describe('data super user', () =>{
  it('delete', () =>{
    cy.visit('https://localhost/konseling')
    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[name="login"]').click() 
    cy.visit('https://localhost/konseling/admin/index.php')
    cy.get('a[href="super_user.php"]').click()
    //karena auto increment setiap di uji id harus diganti
    cy.get("a[href='hapus-super_user.php?id=26']").click()
  })
})