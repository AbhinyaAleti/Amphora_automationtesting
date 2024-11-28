import { Given,When,Then } from '@badeball/cypress-cucumber-preprocessor';

import googlePage from '../PageObjects/Modules/GooglePage';
import homePage from '../PageObjects/Modules/HomePage';

Given('the user is on the google website', () => {
  cy.viewport(1920, 1080);

    cy.visit('https://www.google.com')
  });

  When('user searches for amphora', () => {
    googlePage.enterTextInSearch('Amphora');
    googlePage.keyboardactionEnter();
    googlePage.verifyException();

  });

  Then('user clicks on the Amphora CTRM link', () => {
   
    googlePage.clickOnExpectedLink();

  });

  

  Then('the user navigates to the amphora website', () => {
    homePage.navigatesToUrl();

  });

