Feature('login');

Scenario('Login com sucesso',  ({ I }) => {

I.amOnPage('http://automationpratice.com.br/')
I.click('Login') 
I.fillField('#user','padilha.a.w@gmail.com')
I.fillField('#password','qazando00##')  
I.click('#btnLogin')
I.waitForText('Login realizado', 3)

}).tag('@sucesso')

Scenario('Tentando logar digitando apenas o e-mail',  ({ I }) => {

I.amOnPage('http://automationpratice.com.br/')
I.click('Login') 
I.fillField('#user','padilha.a.w@gmail.com')
I.click('#btnLogin')
I.waitForText('Senha inválida', 3)  
    
})
 
Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {

I.amOnPage('http://automationpratice.com.br/')
I.click('Login')
I.click('#btnLogin')
I.waitForText('Login realizado', 3)  
        
})
    
Scenario('Tentando logar digitando apenas a senha',  ({ I }) => {

I.amOnPage('http://automationpratice.com.br/')
I.click('Login')
I.fillField('#password','qazando00##')
I.click('#btnLogin')
I.waitForText('Login realizado', 3)       
        
})
    


