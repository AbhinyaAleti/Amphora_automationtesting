class ProductsPageLocators {


    get productLink(){

         return '#menu-main-menu';

    }

    get productDropDownLinks(){

        return '//ul[@id="menu-main-menu"]//a[text()="Products"]/parent::li//ul[@class="sub-menu"]//a';

   }

   get productNames(){

     return '.heading--lg';

}

}

export default new  ProductsPageLocators;