import challengingDomPage from "../../page-objects/challengingDom.page";
import mainPage from "../../page-objects/mainPage";
import commonHelper from '../../support/helper'


describe('Test1:Verify Change of Ids for buttons', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));

    });
    it('Should able to clcik Challengong dom ', () => {
        mainPage.examples.contains('Challenging DOM').click();
    })
    it('Should able to click red button and should not see same id for  blue, green and red buttons as before', () => {
        mainPage.examples.contains('Challenging DOM').click();
        const beforeClickList = []
        for (let i=0; i<3;i++){
            beforeClickList.push(challengingDomPage.buttons.eq(i).invoke('attr', 'id'));
        }
        
        challengingDomPage.buttons.eq(1).click().then(() => {
            for (let i=0; i<3;i++){
                challengingDomPage.buttons.eq(i).invoke('attr', 'id').should('not.equal', beforeClickList[i]);
            }
            
         })
    });
})

