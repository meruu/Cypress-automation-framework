/// <reference types="Cypress"/>

describe("Handling IFrame & modals",()=>{

    it("Handle webdriveruni IFrame & modal",()=>{

        cy.visit("https://webdriveruniversity.com")
        cy.get('#iframe').invoke('removeAttr','target').click({force:true})

        cy.get('#frame').then(($frame)=>{
            const body=$frame.contents().find('body')
            cy.wrap(body).as('iframe')
        })

        cy.get('@iframe').find('#button-find-out-more').click()

        cy.get('@iframe').find('#myModal').as('modal')

        cy.get('@modal').then(($expectedText)=>{
            const text=$expectedText.text()
            expect(text).to.include('Welcome')
        })

        cy.get('@modal').contains('Close').click()

    })
})