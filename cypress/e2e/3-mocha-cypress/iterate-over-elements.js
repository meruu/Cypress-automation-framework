  /// <reference types="Cypress"/>

  describe('Iterate over elements',()=>{

    it('Click on th first item using item text',()=>{
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()

        cy.get(".fixed_wrapper .prdocutname").each((ele,index,arr)=>{
            
            cy.log("Index:"+index+" : "+ele.text())
        })
    })

    it('Validate properties of the contact us page',()=>{
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()

        // cy.get(".fixed_wrapper .prdocutname").each((ele,index,arr)=>{
        //     if(ele.text().includes('Curls to straight Shampoo')){
        //         cy.wrap(ele).click()
        //     }
        // })

        cy.SelectProduct('Curls to straight Shampoo')
    })
})