/// <reference types="cypress" />


class Comprar {

    pesquisaProduto() {

        cy.get('[itemprop="query-input"]').type('nike')

        cy.get('[qa-automation = "home-search-button"]').click()



    }

    validacaoDePesquisa() {

        cy.wait(3000)

        return cy.get('.search-query')





    }

    selecionarProdutoedicionarAoCarrinho() {

       
        cy.get('[href="//www.netshoes.com.br/tenis-nike-downshifter-11-masculino-preto+branco-HZM-5208-026"] > .item-card > .item-card__images > .item-card__images__image-link > .loaded').click()
    cy.get('.active > a > span > img').click()
    cy.get(':nth-child(5) > .product-item').click()
    cy.wait(3000)
    cy.get('#buy-button-now')
        .click()
    cy.get('.cart__items > .cart__title').should('contain','Meu carrinho')
    return cy.get('.product-item')



    }

    selecionarProdutoedicionarAoCarrinho1(){

        cy.visit('https://www.netshoes.com.br/')

    
        cy.get('[itemprop="query-input"]').type('camiseta')
    
        cy.get('[qa-automation = "home-search-button"]').click()
    
        
        cy.wait(3000)

        cy.get('.search-query').should('contain', 'Resultados de busca para "Camiseta"')
    
        cy.get('div.item-card__images').eq(2).click()
            
    
        //cy.get(':nth-child(2)').click()
    
        cy.get('li.thumb-image').eq(1).click()
    
    
        cy.wait(3000)
    
        cy.get(':nth-child(2) > .product-item').click()
    
        cy.wait(3000)
    
    
        cy.get('.shipping__input').type('07131-285')
        cy.wait(3000)



    }
selecionarProdutoedicionarAoCarrinhoEFinliza(){


    cy.get('[itemprop="query-input"]').type('brasil')
    

    cy.get('[qa-automation = "home-search-button"]').click()

    
    cy.wait(3000)

     cy.get('.search-query').should('contain', 'Resultados de busca para "Brasil"')


    cy.get('div.item-card__images').eq(2).click()
        

    //cy.get(':nth-child(2)').click()

    cy.get('li.thumb-image').eq(0).click()


    cy.wait(3000)

    cy.get(':nth-child(2) > .product-item').click()

    cy.wait(3000)


   
    
    cy.get('.shipping__button--calculate').click({ force: true })

    cy.get('#buy-button-now').click({ force: true })


    cy.get('.summary__actions > .btn--primary').click({ force: true })

}

    selecionarMaisUmProduto(){

        cy.get('.shipping__button--calculate').click({ force: true })

        cy.get('#buy-button-now').click()
    
        cy.get('.btn--secondary').click()
        
    }

}

export default new Comprar();