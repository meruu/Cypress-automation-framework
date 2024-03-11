/// <reference types="Cypress" />

describe("Cypress web security",()=>{

    it.only("Validate visiting two diffrent domains ",()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.visit('https://www.google.com')
        cy.visit("https://www.automationteststore.com/")
       cy.visit("https://github.com/appium/appium-uiautomator2-driver/blob/master/docs/android-mobile-gestures.md")

       cy.go('back')
       cy.go('forward')


        
    })

    it("Validate visting two diffrent domains via user actions",()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr','target').click()

        cy.log(Cypress.version)
    })

    it.skip('Origin',()=>{
        cy.origin('https://webdriveruniversity.com/',()=>{
            cy.visit('/')

        })
    })

    it.skip('same origin',()=>{
        // cy.origin('https://www.google.com',()=>{
        //     //cy.visit('/')

        //     cy.on('uncaught:exception', (e) => {

        //         if (e.message.includes('Things went bad')) {
            
        //           // we expected this error, so let's ignore it
            
        //           // and let the test continue
            
        //           return false
            
        //         }
            
        //       })

        // })

        cy.visit('https://webdriveruniversity.com/')
        cy.visit('https://www.google.com')


    })

    
})

