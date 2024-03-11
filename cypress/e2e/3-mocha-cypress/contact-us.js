/// <reference types="Cypress" />

import HomePage_PO from "../../support/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/webdriver-uni/Contact_Us_PO";

describe("Test Contact Us form via WebdriverUni",()=>{
    //let data
    const homePage_PO=new HomePage_PO()
    const contact_Us_PO=new Contact_Us_PO()
    before(function(){
        //cy.viewport(350,750)
        cy.fixture('users').then(function(data){
            //this.data=data
            globalThis.data=data
        })

        //cy.fixture('users').as('user')
    });

    it("Should be able to submit a successful submission via contact us form",()=>{
        //cy.log("Name --->"+data.name)
        //cy.visit("/Contact-Us/contactus.html")
        //cy.get('#contact-us').click({force:true})

        //cy.visit(Cypress.env('webdriveruni_homepage')+'/Contact-Us/contactus.html')
        homePage_PO.visitHomepage()
        homePage_PO.clickOn_ContactUs_Button()
        //cy.pause()
      
        contact_Us_PO.contactForm_Submission(data[0].name,data[0].username,data[0].email,Cypress.env('feedback'),"h1","Thank You for your Message!")
  /*      cy.get('@user').then((user)=>{

            cy.get('[name="first_name"]').type(user[0].name)
            cy.get('[name="last_name"]').type(user[0].username)
            cy.get('[name="email"]').type(user[0].email)

        })
     
        cy.get('textarea.feedback-input').type(Cypress.env('feedback'))
        cy.get('[type="submit"]').click()
        console.log("Test has completed");
        cy.log("Test has completed")*/

        
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required",{
        retries:{
            runMode:3,
            openMode:2
        }
    },()=>{

        cy.visit("/")
        cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
        cy.get('[name="first_name"]').type('Test')
        cy.get('[name="last_name"]').type('Cypress')
        cy.screenshot()
        cy.screenshot('Conatact form')
        cy.get('textarea.feedback-input').type('Test automation framework')
        cy.get('[type="submit"]').click()

    })
})

