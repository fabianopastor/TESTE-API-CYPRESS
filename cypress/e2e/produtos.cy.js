<<<<<<< HEAD
/// <reference types="cypress"/>
import contrato from '../contratos/produtos.contratos'

describe('Login - Teste de listar produtos', () => {
    let token

    before(() => {
        cy.token('fulano@qa.com', 'teste').then(tkn => { token = tkn })
    })

   it('Deve Validar Contratos de Produtos', () => {
      cy.request('produtos').then(response => {
        return contrato.validateAsync(response.body)
      })
   }); 


    it('Deve listar produto', () => {
        cy.request({
            method: 'GET',
            url: 'produtos'
        }).then((response) => {
            expect(response.status).to.equal(200)            
            expect(response.body).to.have.property('produtos')
            expect(response.duration).to.be.lessThan(20) //espero q a resposta seja ate 20 ms, utilizado em testes de performace 
        })
    });

    it('Cadastrar Produto', () => {   
        let produto = `Produto eBAC ${Math.floor(Math.random() * 10000000)}`
        cy.request({ 
            method: 'POST',
            url: 'Produtos',
            body: { 
                "nome": produto,                
                "preco": 470,
                "descricao": "Prod Novo",
                "quantidade": 381
            },
            headers: { authorization: token }

        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        })
    });

    
    it('Deve Cadastrar Produto repetido', () => {
        cy.CadastrarProduto(token, "Produto EBAC Novo 1", 250, "Descricao do prod novo", 180)

            .then((response) => {
                expect(response.status).to.equal(400)
                //expect(response.body.message).to.equal('Ja existe produto com este nome')
            })
    });


    it('Deve editar um Produto cadastrado', () => {
        let produto = `Produto eBAC ${Math.floor(Math.random() * 10000000)}`
        cy.CadastrarProduto(token, produto, 250, "Descricao do Produto", 180)
        .then((response) => {
            let id = response.body._id; // pega o ID do produto cadastrado
            
            cy.request({
                method: 'PUT',
                url: `Produtos/${id}`,
                headers: { authorization: token },
                body: {
                    "nome": produto,
                    "preco": 200,
                    "descricao": "Produto Editado",
                    "quantidade": 300
                }
            }).then(response => {
                expect(response.body.message).to.equal('Registro alterado com sucesso')
                })    
              
            })
    });

    it('Deve deletar um produto previamente cadastrado', () => {
        let produto = `Produto eBAC ${Math.floor(Math.random() * 10000000)}`
        cy.CadastrarProduto(token, produto, 250, "Descricao do Produto", 180)
        .then((response) => {
            let id = response.body._id; // pega o ID do produto cadastrado
            
            cy.request({
                method: 'DELETE',
                url: `Produtos/${id}`,
                headers: { authorization: token },
                
            }).then(response => {
                expect(response.body.message).to.equal('Registro excluído com sucesso')
                expect(response.status).to.equal(200)
                })    
              
            })


        
        
        
    });


    


});

=======
/// <reference types="cypress"/>

describe('Login - Teste de listar produtos', () => {
    let token

    before(() => {
        cy.token('fulano@qa.com', 'teste').then(tkn => { token = tkn })
    })

    it('Deve listar produto', () => {
        cy.request({
            method: 'GET',
            url: 'produtos'
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.produtos[1].nome).to.equal('Samsung 60 polegadas')
            expect(response.body).to.have.property('produtos')
            expect(response.duration).to.be.lessThan(20) //espero q a resposta seja ate 20 ms, utilizado em testes de performace 
        })
    });

    it('Cadastrar Produto', () => {   
        let produto = `Produto eBAC ${Math.floor(Math.random() * 10000000)}`
        cy.request({ 
            method: 'POST',
            url: 'Produtos',
            body: { 
                "nome": produto,
                // todo Criar prod dinamicamente
                "preco": 470,
                "descricao": "Prod Novo",
                "quantidade": 381
            },
            headers: { authorization: token }

        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        })
    });

    
    it.only('Deve Cadastrar Produto repetido', () => {
        cy.CadastrarProduto(token, "Produto EBAC Novo 1", 250, "Descricao do prod novo", 180)

            .then((response) => {
                expect(response.status).to.equal(400)
                expect(response.body.message).to.equal('Ja existe produto com este nome')
            })
    });
    


});

>>>>>>> ff94dbfab72f0ebe32d402777398dd6dae764951
