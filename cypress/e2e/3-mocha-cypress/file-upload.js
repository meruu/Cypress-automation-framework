///<reference types="Cypress"/>
describe('Test file upload', () => {

    it('File upload', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get('#file-upload').invoke('removeAttr','target').click({force:true})

        cy.get('#myFile').selectFile("cypress/fixtures/profile.json")
        cy.get('#submit-button').click()

    });

    it('No File upload', () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get('#file-upload').invoke('removeAttr','target').click({force:true})

        //cy.get('#myFile').selectFile("cypress/fixtures/profile.json")
        cy.get('#submit-button').click()

    });
    
});