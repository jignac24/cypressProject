/// <reference types="cypress"/>

import login from "../../pageObject/loginPage"

describe("Launch the browser and open URL", ()=>{

    const loginpage = new login()

    beforeEach(() => {
        // Visit the login page before each test
        loginpage.launchURL()
    });

    it("Verify that user is able to access URL", ()=>
    {        
        cy.title().should('eq', 'OrangeHRM')
    })

    it("Verify that user is able to access URL", ()=>
    {        
        cy.title().should('not.eq', 'OrangeHR')
    })   
    
    it("Verify login method", ()=>
    {                
        loginpage.doLogin("Admin", "admin123")
        loginpage.doLoginOut()

    })

    it("Verify login with Invalid creadentials", ()=>
    {
        loginpage.doLogin("Admin", "admin1234")
        cy.get('.error-message').should('be.visible');
        cy.get(".oxd-alert-content.oxd-alert-content--error").should("have.text", 'Invalid Credentials')
    })

    it("Verify side menu list", ()=>{

        loginpage.doLogin("Admin", "admin123")
        cy.get("aside[class='oxd-sidepanel'] li:nth-child(1)").should("have.text", "Admin")
        loginpage.doLoginOut()
    })
    
})

