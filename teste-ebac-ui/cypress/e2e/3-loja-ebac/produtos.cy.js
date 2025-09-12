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
        produtosPage.visitarProduto('Autumn Pullie')
        cy.get('.product_title').should('contain', 'Autumn Pullie' )      
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Grayson Crewneck Sweatshirt')
        produtosPage.addProdutoCarrinho('M', 'Orange', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Grayson Crewneck Sweatshirt” foram adicionados no seu carrinho.')
        
    });

     it('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
         cy.fixture('produtos').then(dados => {
         //let qtd = 7
         produtosPage.buscarProduto(dados[2].nomeProduto)
         produtosPage.addProdutoCarrinho(
            dados[2].tamanho, 
            dados[2].cor,
            dados[2].quantidade)
         cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
         })
    });
});