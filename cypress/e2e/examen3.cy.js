import Registration from '../PageObject/registration'

describe ('Registration', () => 

{
it("correctregistration" , () =>{
const registr = new Registration
registr.visit()
registr.typetel().type("909065551")
registr.enter().click()
registr.agreement().click()
registr.enter('').click()
registr.otp().type("123456")//напиши отп номер'span[
registr.continue().click()
registr.name().type("madina")
registr.enter2().click()
})

it("probelregistration" , () =>{
const registr = new Registration
registr.visit()
registr.typetel().type(" ")
registr.enter().click()
cy.contains('Некорректный номер').should('be.visible')
    
})

it("uncorrectregistration" , () =>{
const registr = new Registration
registr.visit()
registr.typetel().type("909005551")
registr.enter().click()
registr.agreement().click()
registr.enter().click()
registr.otp().type("000000")
registr.continue().click()
cy.contains('Код введён не правильно').should('be.visible')
})
 

it("probelnameregistration" , () => {
const registr = new Registration
registr.visit()
registr.typetel().type("909065551")
registr.enter().click()
registr.agreement().click()
registr.enter().click
registr.otp().type("123456")//напиши отп номер 
registr.continue().click()
registr.name().type(" ")
registr.enter2().click()
cy.contains('Заполните это поле').should('be.visible')
})
})


