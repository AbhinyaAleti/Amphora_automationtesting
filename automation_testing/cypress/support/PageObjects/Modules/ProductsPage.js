

import productsPageLocators from '../Locators/ProductsPageLocators';



class ProductsPage {

    clickOnProduct(){

         cy.xpath(productsPageLocators.productDropDownLinks).each(($ele,index) =>{
            cy.xpath(productsPageLocators.productLink).click();
            let url= $ele.prop('href');
            cy.visit(url);
            cy.url().should('eq', url);
        })
     
    }

   

    

  


}

export default new ProductsPage;