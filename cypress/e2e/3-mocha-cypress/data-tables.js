/// <reference types="Cypress"/>

describe("Handling data via webdriveruni",()=>{
    beforeEach("login",()=>{
        cy.visit("https://webdriveruniversity.com");//http://webdriveruniversity.com/
            
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })

    it("Calculate and assert the total age of all users",()=>{
        var userDetails=[]
        let numb=0

        cy.get('#thumbnail-1 td').each((ele,index)=>{
            userDetails[index]=ele.text()
        }).then(()=>{
            var i;
            for(i=0;i<userDetails.length;i++){
                if(Number(userDetails[i])){
                    numb+=Number(userDetails[i])
                }
            }

            cy.log(userDetails.toString())
            cy.log("Total age:"+numb)
        })
    })

    it("Calculate and assert the age of a given user based on last name",()=>{

        cy.get('#thumbnail-1 tr td:nth-child(2)').each((ele,index)=>{
            const text=ele.text()

            if(text.includes("Woods")){
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((age)=>{
                    const userAge=age.text()
                    expect(userAge).to.equal("80")
                })
            }
        })
    })
})