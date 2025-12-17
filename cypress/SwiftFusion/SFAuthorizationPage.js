class SF_AuthorizeQueuePage {

  SFAuth() {

    const dataSFAuth = Cypress.env('excelData');

    cy.wait(3000);
    cy.get('.select-wrapper > .mat-mdc-tooltip-trigger').click().type(dataSFAuth.auth_func);

    cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
      .contains(dataSFAuth.auth_func)
      .click();

    const bmId = Cypress.env('BM_ID'); // e.g. "1759896297904"
    expect(bmId, 'BM_ID should be available').to.exist;

    // Find the correct row by checking if the Maker column contains the BM_ID
    cy.get('table tbody tr').each(($row) => {
      const makerCell = $row.find('td').eq(2); // adjust column index if needed
      const makerText = makerCell.text().trim();

      if (makerText.includes(bmId)) {
        cy.wrap($row)
          .find('input[type="checkbox"]')
          .check({ force: true }); // check the checkbox

        cy.log(`✅ Checked the row for BM_ID: ${bmId}`);

        // Click on the Authorize button
        //cy.contains('button', 'Authorize').click({ force: true });
        cy.get(':nth-child(1) > .inline-flex').click();
        cy.wait(3000);
        cy.get('.bg-gray-50 > .bg-blue-600').click();
        cy.wait(3000);
        cy.get('.bg-gray-50 > .inline-flex').click();
        // Stop further loop
        return false;
      }
    });




    // cy.then(() => {
    //   const bmID = Cypress.env('BM_ID');

    //   if (bmID) {
    //     cy.log('🔍 Searching by bmID ' + bmID);

    //     cy.get('table tbody tr').then($rows => {
    //       const matchingRows = $rows.filter((index, row) => {
    //         const text = Cypress.$(row).find('td').eq(2).text().trim();
    //         return text.endsWith(bmID);
    //       });

    //       if (matchingRows.length === 0) {
    //         throw new Error(`❌ No matching rows found for Account Number: ${accountNumber}`);
    //       }

    //       cy.wrap(matchingRows[0]).within(() => {
    //         cy.contains('Authorize/Decline').click();
    //       });
    //     });
    //   }
    //   else {
    //     throw new Error("❌ No identifier ( ID ) found in Cypress.env()");
    //   }
    // });


     cy.wait(3000);
    // cy.get('#ctl00_contPlcHdrMasterHolder_btnExit').click();//click exit btn


    // cy.wait(3000);
    // cy.get('.ui-state-focus > .ui-button-text').click();//click exit confirmation btn

    // cy.wait(3000);
    // cy.get('#ctl00_contPlcHdrMasterHolder_btnAuth').click();//click auth btn  

    // cy.wait(3000);
    // cy.get('.ui-button-text').click();   //click auth confirmation btn 


    // cy.wait(3000);
    // cy.get('#imggoHome').click();   //click home btn 
    // cy.wait(3000);
    // cy.get(':nth-child(2) > .ui-button-text').click();   //click home confirmation btn 


  }
}

export default SF_AuthorizeQueuePage;