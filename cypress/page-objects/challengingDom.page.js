class challengingDomPage{
 get buttons(){
    return cy.get('.large-2.columns a', {timeout:10000})
 }
}
export default new challengingDomPage();