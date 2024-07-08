/// <reference types = "cypress" />

import "../../support/commands";

const testData = require("../../fixtures/createUserData.json")

describe("Verify create user endpoint", function() {

    let accessToken = "bd66f4bccd92acbb22b269a320408ba2966ee04bceafb2ee405fd3bdaaae8f8f"   
    let user_id

    it("test POST method", function() {
        cy.generateRandomEmail().then((randomEmail) => {
            cy.log(randomEmail);         
            const payload = {
                "name": testData.name,
                "gender": testData.gender,
                "email": randomEmail,
                "status": testData.status
            }       

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization' : 'Bearer ' + accessToken
            },
            body: payload

            }).then((response)=>{          
                expect(response.status).to.eq(201)            
                expect(response.body).to.have.property('email', payload.email)
                user_id = response.body.id
                expect(user_id).to.not.be.null
        })
        })

    })

    it("Verify to get user id GET Method",function() {
            cy.log("user id is: "+ user_id)
            cy.request({
                method: 'GET',
                url: "https://gorest.co.in/public/v2/users/"+ user_id,
                headers: {
                    'Authorization' : 'Bearer '+ accessToken
                }

            }).then((res)=>{
                    expect(res.status).to.eq(200)
            })
                
        
    })

    it("Verify to delete user id DELETE Method",function() {        
        cy.request({
            method: 'DELETE',
            url: "https://gorest.co.in/public/v2/users/"+ user_id,
            headers: {
                'Authorization' : 'Bearer '+ accessToken
            }

        }).then((res)=>{
                expect(res.status).to.eq(204)  // No content
        })
            
    
})

})