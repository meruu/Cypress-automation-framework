/// <reference types="Cypress"/>

describe("Verify auto complete",()=>{

    it("Test1",()=>{

        cy.visit("https://webdriveruniversity.com")
        cy.get('#autocomplete-textfield').invoke('removeAttr','target').click({force:true})

        cy.get('#myInput').type('A')

        cy.get('#myInputautocomplete-list > *').each((ele,index)=>{
            if(ele.text().includes('Almond')){
                ele.trigger("click")

                cy.get('#submit-button').click()
                cy.url().should('include','Almond')
            }
        })

    })
})