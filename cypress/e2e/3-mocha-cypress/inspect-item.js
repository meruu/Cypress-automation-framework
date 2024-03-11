/// <reference types="Cypress"/>

describe('Inspect AUTOMATION TEST STORE ITEMS USING CHAIN OF COMMANDS',()=>{

    it.only('Click on th first item using item text',()=>{

        cy.visit("https://www.automationteststore.com/")
        cy.get('.prdocutname').contains("Skinsheen Bronzer Stick").click().then((productName)=>{
            console.log('Product name'+productName.text())
        })

    })


    it('Click on th first item using item through find',()=>{

        cy.visit("https://www.automationteststore.com/")
        cy.get('.fixed_wrapper').find('.prdocutname').eq(5).click()

    })
})