  /// <reference types="Cypress"/>

  describe('Iterate over web elements',()=>{

    it('Click on th first item using item text',()=>{
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt',5)
        cy.get('@productThumbnail').should('include','Seaweed Conditioner')
    })

    it('challenge',()=>{
        cy.visit("https://automationteststore.com/")
        cy.get('.thumbnails .thumbnail').its('length').as('count')
        cy.get('.thumbnails .thumbnail').as('product')
        cy.get('@product').find('.productcart').should('have.attr','title','Add to Cart')
    //  or
    cy.get('@product').find('.productcart').invoke('attr','title').should('contain','Add to Cart')
    })

    it('count',function(){
        cy.log(this.count)
    })

    it.only('Calculate total of normal and sale products',()=>{
        cy.visit("https://automationteststore.com/")

        cy.get('.thumbnail').as('productThumbnail')

        cy.get('@productThumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('@productThumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal=0
        cy.get('@itemPrice').then($linktext=>{
            var itemPrice=$linktext.split('$')
            var itemsPriceTotal=0
            for(var i=0;i<itemPrice.length;i++){
                cy.log(itemPrice[i])
                itemsPriceTotal+=Number(itemPrice[i])
            }
            itemsTotal+=itemsPriceTotal

            cy.log("Non sale price items total:"+itemsPriceTotal)
        })

        cy.get('@saleItemPrice').then($linktext=>{
            var saleItemPrice=$linktext.split('$')
            var salePriceTotal=0
            for(var i=0;i<saleItemPrice.length;i++){
                cy.log(saleItemPrice[i])
                salePriceTotal+=Number(saleItemPrice[i])
            }
            itemsTotal+=salePriceTotal

            cy.log("Non sale price items total:"+salePriceTotal)
        })
        .then(()=>{
            cy.log("The total of all products:"+itemsTotal)
            expect(itemsTotal).to.eq(660.5)
        })
    })
})
