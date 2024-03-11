/// <reference types="Cypress"/>

describe("Test Datepicker",()=>{

    it("Select date from the datepicker",()=>{

        cy.visit("https://webdriveruniversity.com")
        cy.get('#datepicker').invoke('removeAttr','target').click({force:true})

        // let date=new Date()
        // date.setDate(date.getDate())
        // cy.log(date.getDate())

        // let date1=new Date()
        // date1.setDate(date.getDate()+6)
        // cy.log(date1.getDate())

        var date=new Date()
        date.setDate(date.getDate()+100)
        //cy.log("Set date"+date.setDate())
        var futureYear=date.getFullYear()
        var futureMonth=date.toLocaleString("default",{month:"long"})
        var futureDay=date.getDate()

        cy.log("Future year to select: "+futureYear)
        cy.log("Future month to select: "+futureMonth)
        cy.log("Future day to select: "+futureDay)
        cy.get('#datepicker').click()

        function selectYearMonthDate(){
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate=>{
                if(!currentDate.text().includes(futureYear)){
                    cy.get('.next').first().click()
                    selectYearMonthDate()
                }
            }).then(()=>{

                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate=>{
                    if(!currentDate.text().includes(futureMonth)){
                        cy.get('.next').first().click()
                        selectYearMonthDate()
                    }

            })

        }).then(()=>{

            cy.get('body').then((body)=>{
                if(body.find('[class="day"]').length>0){
                    cy.get('[class="day"]').contains(futureDay).click()
                    cy.log("I am in loop")
                }
            })
            // cy.get('[class="day"]').contains(futureDay)//.click()
            // cy.log("I am in loop")
        })
        }

        // function selectFutireDay(){
        //     cy.get('[class="day"]').contains(futureDay).click()
        // }
       
        selectYearMonthDate()
        //selectFutireDay()

    })
})