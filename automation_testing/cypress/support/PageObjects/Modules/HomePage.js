
import homePageLocators from '../Locators/HomePageLocators';
import productsPageLocators from '../Locators/ProductsPageLocators';



class HomePage {

  async  verifyUrl(){
       
        await cy.url().should('include','amphora.net');
     
    }

    async verifyLogo(){

           await cy.get(homePageLocators.amphor_Logo,{ timeout: 10000 }).should('be.visible');
     
    }

  async  navigatesToUrl(){
       
      await cy.origin('https://amphora.net', {
            args: {
              logoSelector: homePageLocators.amphor_Logo,
              productDropDownLinks: productsPageLocators.productDropDownLinks,
              productLinks: productsPageLocators.productLink,
              productNames: productsPageLocators.productNames,
              }
          }, ({ logoSelector,productDropDownLinks,productLinks,productNames }) => {
            console.log('Logo Selector:', logoSelector);
           cy.get(logoSelector,{ timeout: 10000 }).should('be.visible'); 
           cy.get(productLinks).find('a') .contains('Products').click(); 
           cy.get('#menu-main-menu li > a').contains('Products').next('.sub-menu').find('a').each(($ele,index) =>{
            cy.wrap($ele).click();
          

        
         
        })
      
            
             });
      
     
    }

    

  


}

export default new HomePage;

