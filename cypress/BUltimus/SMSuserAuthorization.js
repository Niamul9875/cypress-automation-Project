


class SMSauth {

  userauthorization() {

    const datasmsauth = Cypress.env('excelData');   //define object
    cy.intercept('POST', '/UltimusSSO/src/UltimusSSOAPP/UFS.Web//BusinessIntegration/Integrate').as('formReload1');
    cy.waitForOptionalRequest('@formReload1');

    //.get('#ctl00_contPlcHdrMasterHolder_LstxtIndividualSalutation').type(dataCIFInfo.Title);


    cy.get('.form-group > div > .form-control').focus();
    cy.get('.form-group > div > .form-control').select('0951 - Define User Profile', { force: true });


    cy.wait('@formReload1');

    cy.get('.gridStyle')
      .find('div[ng-row]', { timeout: 4000 })
      .should('have.length.greaterThan', 0);

    // Search for the row containing the text
    // cy.get('.gridStyle')
    //   .find('div[ng-row]')
    //   .contains('div[role="gridcell"]', datasmsauth.UserID)
    //   .should('exist')
    //   .parents('div[ng-row]')
    //   .within(() => {
    //     // Find and check the checkbox in the first column
    //     cy.get('input[type="checkbox"]').first().check({ force: true });
    //   });

    cy.get('.gridStyle')
      .find('div[ng-row]')
      // Filter rows where ANY cell contains the text 'abid7' (case insensitive)
      .filter((index, row) => {
        return Cypress.$(row).text().includes(datasmsauth.UserID);
      })
      .first() // pick the first matching row
      .should('exist') // assert it exists
      .within(() => {
        // Check the checkbox inside this row
        cy.get('input[type="checkbox"]').eq(0).check({ force: true });
      });

    cy.get('[type="submit"]').click();

    cy.wait('@formReload1');

    cy.get('#PageAlertStrip').should('be.visible');
    cy.get('#PageAlertStrip').contains('Process Completed');




    //cy.get('.lspagetitle')
    // .should('be.visible')
    //.and('include.text', 'Security (NFT) Authorization');

    // cy.get('#Application').select('Dhanmondi Branch (1007)', { force: true });
    //cy.get(':nth-child(8) > .form-control').select('Dhanmondi Branch (1007)', { force: true });


    // cy.get('.form-group > div > .form-control').select('0954 - Define User Profiles', { force: true })


    //User Created successfully. Input Password has been set as user Password. User profile created without profile picture.













  }
}

export default SMSauth;