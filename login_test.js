Feature('login');

Scenario('Login com sucesso',  ({ I }) => {

I.amOnPage('http://automationpratice.com.br/')
I.click('Login') 
I.fillField('#user','padilha.a.w@gmail.com')


})

Scenario('Tentando logar digitando apenas o e-mail',  ({ I }) => {

I.amOnPage('http://automationpratice.com.br/')
    
    
})


Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {

I.amOnPage('http://automationpratice.com.br/')
        
        
})
    
Scenario('Tentando logar digitando apenas a senha',  ({ I }) => {

I.amOnPage('http://automationpratice.com.br/')
        
        
})
    


