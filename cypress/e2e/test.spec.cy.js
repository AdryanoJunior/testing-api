describe('Test API EBAC - Login', () => {
  
  it.only('You must log in successfully', () => {
     cy.login('fulano@qa.com', 'teste')  
    .then((response) => {
        cy.log(response.body.authorization)
        expect(response.body.message).equal('Login realizado com sucesso')
        expect(response.status).equal(200)
       })
     })
  });
