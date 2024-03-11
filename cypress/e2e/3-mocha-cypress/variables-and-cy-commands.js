  /// <reference types="Cypress"/>

describe('Inspect AUTOMATION TEST STORE ITEMS USING CHAIN OF COMMANDS',()=>{

    it('Click on th first item using item text',()=>{
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()
        //cy.get("a[href*='product/category&path=']").contains('Skincare').click()
        cy.get('h1 .maintext').then((text)=>{
            const headerText=text.text()
            cy.log("Found header text: "+headerText)
            expect(headerText).is.eq('Makeup')
        })
    })

    it.only('Validate properties of the contact us page',()=>{
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        //Uses cypress chain commands
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name:')

        //JQuery Approach

        cy.contains('#ContactUsFrm','Contact Us Form').then(text=>{
            const headerText=text.find('#field_11').text()
            expect(headerText).to.contain('First name:')

            // Embedded commands(Closure)

            cy.get('#field_11').then(textfn=>{
                cy.log(textfn.text())
                cy.log(textfn)
            })

        })

    })
})