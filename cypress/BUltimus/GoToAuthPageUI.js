class UserinfoAuth {
  UA() {

    const dataLogin = Cypress.env('excelData');

    cy.visit(dataLogin.url); // Visit the URL
    cy.get('#UserId').type(dataLogin.username); // Enter username
   // cy.get('#UserId').type('rubel');

    cy.get('#PasswordString').type(dataLogin.password); // Enter password
   // cy.get('#PasswordString').type('1');
   // cy.get('#Application').select('Security Management')
   //cy.get('#Application').select('Security Management', { force: true });
   cy.get('#Application').select(dataLogin.dropdown, { force: true });

   



   //cy.get('#Application').scrollIntoView().should('be.visible').select('Security Management');





    cy.get('#btnlogin').click(); // Click login button

    //cy.get('.ui-button-text').click();
  }
}

export default UserinfoAuth;

  