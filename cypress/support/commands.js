
Cypress.Commands.add('createRequest', (name,salary,age) => {
    const options = {
        method: 'POST',
        url:Cypress.config('apiUrl')+'create',
        failOnStatusCode:false, 
        log:false,
      
        headers: {
        },
        body: {
          "name": name,
          "slary": salary,
          "age": age,
       }
    }
 cy.request(options); 
});