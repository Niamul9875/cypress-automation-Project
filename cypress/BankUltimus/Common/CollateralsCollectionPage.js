
class CollateralsCollection {

    CollateralsCollection() {

        const dataCollateralsCollection = Cypress.env('excelData');

        const commitmentId = Cypress.env('commitmentId');
        cy.get('#ctl00_contPlcHdrMasterHolder_lsddlCollateralTypeID').select(dataCollateralsCollection.collateral_Type_ID);
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtDescription').clear().type(dataCollateralsCollection.description).type('{enter}');
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCollateralCattegory').select(dataCollateralsCollection.collateral_Category);
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCollateralSecurityType').select(dataCollateralsCollection.security_Type);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCharge_Type').select(dataCollateralsCollection.charge_Type);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustomerID').clear().type(dataCollateralsCollection.cus_ID).type('{enter}');
        cy.get('#ctl00_contPlcHdrMasterHolder_lschkOWN_BANK_ACCOUNT_FLAG').check(dataCollateralsCollection.OwnBankAccountFlag);
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_lstxtACCOUNT_BR_ID').clear().type(dataCollateralsCollection.branch_ID).type('{enter}').type('{enter}');
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_lstxtACCOUNT_NO').clear().type(dataCollateralsCollection.account_No).type('{enter}').type('{enter}');
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCollateralType').focus().select(dataCollateralsCollection.collateral_Value_Type, { force: true });
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_btnAddLien').click();
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCommitmentID').clear().type(commitmentId).type('{enter}');
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_btnAddCollateralPoolTrackingInfoOnGrid').click();
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCommitmentID').invoke('val').then((text) => {
            if (text) {
                // If empty, type the purpose and click OK
                cy.get('#ctl00_contPlcHdrMasterHolder_btnAddCollateralPoolTrackingInfoOnGrid').click();
            }
        });
        cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
        cy.wait(2000);
        // Wait for popup to be visible and contain expected text
        cy.get('.ui-dialog-content', { timeout: 10000 }) // 10s wait
            .should('be.visible')
            .invoke('text')
            .then((popupText) => {
                // Debug print
                cy.log('Popup Text: ' + popupText);
                const match = popupText.match(/Collateral ID\s*:\s*(\d+)/);
                if (!match) {
                    throw new Error("❌ Collateral ID not found in popup text.");
                }
                const collateralID = match[1];
                expect(collateralID).to.not.be.null;
                Cypress.env('collateralID', collateralID);                
                Cypress.env('commitmentId', null);
                cy.log('✅ Extracted Collateral ID: ' + collateralID);
            });
        cy.get('.ui-button-text').click();
        //cy.get('#dialog')

    }
}

export default CollateralsCollection;

