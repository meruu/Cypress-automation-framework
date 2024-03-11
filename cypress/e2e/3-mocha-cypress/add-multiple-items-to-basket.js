/// <reference types="Cypress" />

  import AutoStore_Homepage_PO from "../../support/automation-test-store/AutoStore_Homepage_PO";
  const autoStore_Homepage_PO=new AutoStore_Homepage_PO() 
  describe('Iterate over elements',()=>{

    before(function(){
        cy.fixture('products').then(function (data) {
            globalThis.data=data
        })
    });
    beforeEach('',() => {
        // cy.visit("https://automationteststore.com/")
        // cy.get("a[href*='product/category&path=']").contains('Hair Care').click() 
        autoStore_Homepage_PO.accessHomepage()
        autoStore_Homepage_PO.clickOn_HairCare_Link()
    });

    it('Add specific items to basket', () => {
    globalThis.data.productName.forEach(function(ele){
            cy.addProductToBasket(ele).then(()=>{
                //debugger
            })
        })

        cy.get('.dropdown-toggle > .fa').click()//.debug()
    });

})