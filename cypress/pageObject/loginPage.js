class login{    
    
    constructor(){

        this.url = "https://opensource-demo.orangehrmlive.com/"
        this.uname = "input[placeholder='Username']"
        this.pword = "input[placeholder='Password']"
        this.submitButton = "button[type='submit']"
        this.userMenu = ".oxd-userdropdown"
        this.logoutButton = "header[class='oxd-topbar'] li:nth-child(4)"

    }

    launchURL()
    {
        cy.visit(this.url)
    }

    doLogin(username, password)
    {
        cy.get(this.uname).type(username)
        cy.get(this.pword).type(password)
        cy.get(this.submitButton).click()
        cy.wait(10000)

    }

    doLoginOut()
    {
        // Logout from application        
        cy.get(this.userMenu).click()
        cy.get(this.logoutButton).click()
        cy.wait(10000)

    }

}

export default login