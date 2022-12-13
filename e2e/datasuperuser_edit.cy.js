describe('data super user edit', () =>{
  it('edit', () =>{
    cy.visit('https://localhost/konseling')
    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[name="login"]').click() 
    cy.visit('https://localhost/konseling/admin/index.php')
    cy.get('a[href="super_user.php"]').click()
    //karena auto increment setiap di uji id harus diganti
    cy.get("a[href='edit-super_user.php?id=26']").click()
    cy.get('input[name=ubah_gambar]').click()
    cy.get("input[name=foto]").selectFile('cypress/fixtures/coba.jpg')
    cy.get('button[name=edit]').click()
  })
})