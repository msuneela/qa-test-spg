class mainPage{
 get examples(){
    return cy.get('li a');
 }
}
export default new mainPage();