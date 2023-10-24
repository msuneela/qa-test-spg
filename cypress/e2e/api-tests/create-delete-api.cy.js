import commonHelper from '../../support/helper'
describe('Test3 & Test4 - Create and Delete Employee', () => {

  it('Should able to create and delete employee ', () => {
    cy.createRequest('John' + commonHelper.generateNowTime, 23, 30).then((response) => {
      expect(response.status).to.eq(200);
    }).then((res) => {
      cy.wait(50, {log:false});
      const userId = res.body.data.id;
      cy.request({
        method: 'DELETE',
        failOnStatusCode:false, 
        log:false,       
        url: Cypress.config('apiUrl') + 'delete/' + userId,
        headers: {

        }
      }).then((res) => {
        cy.wait(50, {log:false});
        expect(res.status).to.eq(200);
        expect(res.body.message).to.eq('Successfully! Record has been deleted');

      })
    })

  })
})