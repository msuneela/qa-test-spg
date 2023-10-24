class dynamicLoadingPage{
    get exampleLinks(){
       return cy.get('#content > div > a', {timeout:10000})
    }
    get startButton(){
        return cy.get('#start > button', {timeout:10000})
    }
    get helloText(){
        return cy.get('#finish > h4',{timeout:10000})
    }
    get loadingBar(){
        return cy.get('#loading',{timeout:10000});
    }
 
   }
   export default new dynamicLoadingPage();