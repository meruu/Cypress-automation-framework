// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('SelectProduct',(productName)=>{
    cy.get(".fixed_wrapper .prdocutname").each((ele,index,arr)=>{
        if(ele.text().includes(productName)){
            cy.wrap(ele).click()
        }
    })
})

Cypress.Commands.add('addProductToBasket',(productName)=>{
    cy.get(".fixed_wrapper .prdocutname").each((ele,index,arr)=>{
        if(ele.text()===productName){
            cy.log(ele.text())
            cy.get('.productcart').eq(index).click()
        }
    })
})