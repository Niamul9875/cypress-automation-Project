
class userinfo {

  uiInfo() {

    const defineuser1 = Cypress.env('excelData');   //define object

    

    //.get('#ctl00_contPlcHdrMasterHolder_LstxtIndividualSalutation').type(dataCIFInfo.Title);
    //cy.get('#LoginId').type('foysal9')
   cy.get('#LoginId').type(defineuser1.UserID);   
   // cy.wait(4000)
    
    cy.intercept('POST', '/BankUltimusSPARK//UserProfile/IsActiveDirectoryUser').as('formReload1');
    cy.intercept('POST', '/BankUltimusSPARK//BusinessIntegration/Integrate').as('formReload2');
    cy.wait(4000);
    cy.get('tr > :nth-child(1) > :nth-child(2) > .form-control').type(defineuser1.UserName);
    cy.get('tr > :nth-child(1) > :nth-child(2) > .form-control').type('{enter}');
   // cy.wait('@formReload1');
     cy.wait(4000)
  //  cy.wait('@formReload2');
     //cy.get('tr > :nth-child(1) > :nth-child(2) > .form-control').type(defineuser1.UserName)
    cy.get('tr > :nth-child(1) > :nth-child(2) > .form-control').type('faysola')
    

    cy.get('#BankStaff').uncheck()
    cy.get('#UserEmailId').type(defineuser1.EmailID)
    //cy.get(':nth-child(8) > .form-control').click()

   // cy.get('#Application').select('Dhanmondi Branch (1007)', { force: true });
    //cy.get(':nth-child(8) > .form-control').select('Dhanmondi Branch (1007)', { force: true });
    cy.get(':nth-child(8) > .form-control').select(defineuser1.BranchOffice);
    cy.get(':nth-child(9) > .form-control').type(defineuser1.UserDescription)
   // cy.get('.col-md-12 > .form-group > .form-control').type('1')
    cy.get('#AnyBranchReportAccess').check() 
    cy.get('[type="submit"] > .ng-binding').click()
   // cy.get('#PageAlertStrip')
    cy.get('#PageAlertStrip')
  .should('be.visible')
  .and('include.text', 'User Created successfully');

    //User Created successfully. Input Password has been set as user Password. User profile created without profile picture.


    










  }
}

export default userinfo;