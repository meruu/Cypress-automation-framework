/// <reference types="Cypress"/>

describe("Handle js alerts",()=>{

    it.skip("Confirm js alert contains the correct text",()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()

        cy.get('#button1').click()

        cy.on('window:alert',(str)=>{
            expect(str).to.equal('I am an alert box!')
        })
    })

    it("Confirm js alert cab be clicked",()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()

        cy.get('#button4').click()

        cy.on('window:confirm',(str)=>{
           return false
        })

        cy.get('#confirm-alert-text').contains('You pressed Cancel!')

    })

    it.only("Confirm js alert using stubs",()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()

        const stub=cy.stub()
        cy.on('window:confirm',stub)

        cy.get('#button4').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        })
        .then(()=>{
            return true
        })
        .then(()=>{
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })

    })
})