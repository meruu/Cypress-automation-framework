class AutoStore_Homepage_PO{

    accessHomepage(){
        cy.visit("https://www.automationteststore.com/",{timeout:60000})
    }

    clickOn_HairCare_Link(){
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click({timeout:60000})
    }

}

export default AutoStore_Homepage_PO