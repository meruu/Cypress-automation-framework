/// <reference types="Cypress"/>

describe("Test mouse actions",()=>{

    it("Scroll element inti view",()=>{

        cy.visit("https://webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force:true})

    })

    it("Drag and drop",()=>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force:true})
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})

        // cy.get(`.piece-${number}`)
        // .trigger('mousedown', { which: 1 })
        // .trigger('mousemove', { clientX: x, clientY: y })
        // .trigger('mouseup', { force: true })

    })

    it("Double mouse click",()=>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force:true})
        cy.get('#double-click').dblclick();

    })

    it("Hold down the left mouse click button",()=>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force:true})
        
        cy.get('#click-box').trigger('mousedown',{which:1}).then((ele)=>{
            expect(ele).to.have.css('background-color','rgb(0, 255, 0)')
        })

    })
})