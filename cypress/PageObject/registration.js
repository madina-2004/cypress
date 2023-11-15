class Registration {
    
visit(){
return cy.visit('https://uzdplus.uz/registration') //website link
}
typetel(){
return cy.get('input[type="tel"]') //type phone number
}
enter(){
return cy.get('#loginButton')// войти
}
agreement(){
return cy.get('.border') // соглашение
}
enter2(){
return cy.get('button[type="submit"]')//войти после "Напишите свое имя"
}
otp(){
return cy.get('div[id="field-0"]') //код одной отп ячейки
}
continue(){
return cy.contains('Продолжить')
}
name(){
return cy.get('inpu[type="text"]')
}
}
export default Registration 