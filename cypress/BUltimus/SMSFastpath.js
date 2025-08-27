class GoToFastPath {
   
  FastPath() {
 
      const dataSMSPage = Cypress.env('excelData');
 
      cy.url().should('eq', dataSMSPage.HomePageUrl);
     // cy.get('#txtMenuSearch').type(dataSMSPage.FastPath).type('{enter}'); // Enter username
      cy.get('#txtfastpath').type(dataSMSPage.FastPath).type('{enter}');
     // cy.get('#txtfastpath').type('0954').type('{enter}');
     
    }
  }
 
  export default GoToFastPath;