import challengingDomPage from "../../page-objects/challengingDom.page";
import dynamicLoadingPage from "../../page-objects/dynamicLoading.page";
import mainPage from "../../page-objects/mainPage";
describe('Test2: Dynamic loading page and Helloworld text', () => {
    beforeEach(()=>{
        cy.visit(Cypress.config('baseUrl'));

    });
    it('Should able to click Dynamic Loading',()=> {
        mainPage.examples.contains('Dynamic Loading').click();
    })
    it('Should able to click Example2 and click Start button and Verify text',()=> {
        mainPage.examples.contains('Dynamic Loading').click();
        dynamicLoadingPage.exampleLinks.contains('Example 2: Element rendered after the fact').click();
        dynamicLoadingPage.startButton.click();
        dynamicLoadingPage.helloText.invoke('text').should('contain', 'Hello World!');
    })
})