class LoginPageSYS {
  LoginasAdmin() {

    const dataLogin = Cypress.env('excelData');

    cy.visit(dataLogin.url); // Visit the URL
    cy.get('#UserId').type(dataLogin.username); // Enter username
    cy.get('#PasswordString').type(dataLogin.password); // Enter password
    cy.get('#Application').select(dataLogin.dropdown, { force: true });
    cy.get('#btnlogin').click(); // Click login button

    //cy.get('.ui-button-text').click();
  }
}

export default LoginPageSYS

  