/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni",()=>{

    it("Should be able to submit a successful submission via contact us form",()=>{
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href$='contact']").click()// xpath=//a[text()='Contact Us']  // //a[contains(@href,'contact')]
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.title().should('include','Contact')
        cy.url().should('include','contact')
       //cy.xpath("//a[contains(@href,'contact')]").click()
        cy.get('#ContactUsFrm_first_name').type('Test')
        cy.get('#ContactUsFrm_email').type('Unknown@gmail.com')
        cy.get('#ContactUsFrm_email').should('have.attr','name','email')
        cy.get('#ContactUsFrm_enquiry').type('Will I get automation job :?')
        cy.get(".form-group button[type='submit']").click()
        cy.get('.mb40 >p:nth-of-type(2)').should('contain.text','Your enquiry has been successfully sent to the store owner!')
    })
})

