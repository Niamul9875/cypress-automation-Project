class SwiftFusionLogin {

   Login() {

      const dataLogin = Cypress.env('excelData');

      cy.visit(dataLogin.url); // Visit the URL
      cy.get(':nth-child(1) > .relative > .w-full').type(dataLogin.username); // Enter username username
      cy.get(':nth-child(2) > .relative > .w-full').type(dataLogin.password); // Enter password
      cy.get('.cursor-pointer').click(); // Click login button
 
   }


}
export default SwiftFusionLogin;
