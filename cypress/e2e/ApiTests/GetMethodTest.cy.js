/// <reference types = "cypress" />

describe("Verify Get Method", ()=>{

    it("validate get use", ()=>{
        cy.request({
            method: 'GET',
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'Authorization' : 'Bearer bd66f4bccd92acbb22b269a320408ba2966ee04bceafb2ee405fd3bdaaae8f8f'
            }

        }).then((res)=>{
                expect(res.status).to.eq(200)
                
        } )
    })



})