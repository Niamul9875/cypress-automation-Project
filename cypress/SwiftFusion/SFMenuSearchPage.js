class MenuSearch {
    
  menu() {

      const dataMenuSearch = Cypress.env('excelData');

      cy.url().should('eq', dataMenuSearch.HomePageUrl);
      cy.wait(3000);
      cy.get('app-search > div > .bg-white').type(dataMenuSearch.FastPath).type('{enter}');  
      
    }
  }
  
  export default MenuSearch;
  
    