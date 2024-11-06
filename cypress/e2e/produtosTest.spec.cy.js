describe('Test API - Products', () => {

  let token
  beforeEach(() => {
     cy.token('fulano@qa.com', 'teste').then(tkn => {
      token = tkn
     })
     
  });
  
  it('List Products', () => {
      cy.request({
        method: 'GET',
        url: 'produtos'
      }).should((response) => {
        expect(response.status).equal(200)
        expect(response.body).have.property('produtos')
      })

     })
     it('Register Product', () => {
      let product = 'product test' + Math.floor(Math.random() * 9000000)
       cy.registerProduct(token, product, 5000, 'Eletrodoméstico', 400)
      .should((response) => {
        expect(response.status).equal(201)
        expect(response.body.message).equal('Cadastro realizado com sucesso')
       })
     });
     it.only('A product already registered error message should appear', () => {
        cy.registerProduct(token, 'Iphone Pro Max 16', 11000, 'Smartphone', 300)
        .should((response) => {
          expect(response.status).equal(400)
          expect(response.body.message).equal('Já existe produto com esse nome')
        })
     });
  });
