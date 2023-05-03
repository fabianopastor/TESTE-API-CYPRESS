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

const cypress = require("cypress")

// -- This is a parent command --
Cypress.Commands.add('token', (email, senha) => { 
    cy.request({
        method: 'POST',
        url: 'login',
        body: {
            "email": email,
            "password": senha
              }
    }).then((response) =>{
        expect(response.status).to.equal(200)
        return response.body.authorization
    })
 })

cypress.Commands.add('CadastrarProduto' , (token, produto, preco, descricao,quantidade)=> {
    cy.request({
        method: 'POST',
        url: 'Produtos',
        headers:{authorization: token},
        body: {
            "nome": produto,
            "preco": preco,
            "descricao": descricao,
            "quantidade": quantidade
          },
          failOnStatusCode : false
    })
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
