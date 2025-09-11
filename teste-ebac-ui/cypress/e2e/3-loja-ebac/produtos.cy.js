/// <reference types="cypress"/>
 import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
         produtosPage.buscarProdutoLista ('Abominable Hoodie')      
          cy.get('#tab-title-description > a').should('contain' , 'Descrição')
        
    });

    it('Deve buscar um produto com sucesso', () => {
        let Produto = 'Autumn Pullie'  
        produtosPage.buscarProduto(Produto)
        cy.get('.product_title').should('contain', Produto)
    });

    it('Deve visitar a pagina do produto', () => {
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        
    });
});