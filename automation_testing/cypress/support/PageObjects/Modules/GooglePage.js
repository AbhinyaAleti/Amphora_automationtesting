
import googlePageLocators from '../Locators/GooglePageLocators';


class GooglePage {

    async enterTextInSearch(text){

       await cy.get(googlePageLocators.searchTextArea).should('be.visible').type(text);
     
    }

    async keyboardactionEnter(){
        await cy.get(googlePageLocators.searchTextArea).should('be.visible').type('{enter}'); 
     
    }

    async  verifyException(){

        await  cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('null')) {
             return false;
           }
           return true;
         });
     
     
    }

    async  clickOnExpectedLink(){
       
        await cy.contains('Amphora CTRM',{ timeout: 10000 }).scrollIntoView().click();
       
      

       
     
    }







}

export default new GooglePage;

