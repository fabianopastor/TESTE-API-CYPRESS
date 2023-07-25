<<<<<<< HEAD
/// <reference types="cypress"/>

describe('Login - Teste da API ServeRest', () => {
    it('Deve fazer login de sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'login',
            body: {
                "email": "fulano@qa.com",
                "password": "teste"
                  }
        }).then((response) =>{
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Login realizado com sucesso')
            cy.log(response.body.authorization)
        })
        
    });
    
=======
/// <reference types="cypress"/>

describe('Login - Teste da API ServeRest', () => {
    it.only('Deve fazer login de sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "fulano@qa.com",
                "password": "teste"
                  }
        }).then((response) =>{
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Login realizado com sucesso')
            cy.log(response.body.authorization)
        })
        
    });
    
>>>>>>> ff94dbfab72f0ebe32d402777398dd6dae764951
});