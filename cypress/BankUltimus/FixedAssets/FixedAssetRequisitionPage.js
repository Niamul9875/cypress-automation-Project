class FixedAssetRequisitionPage {

    fixedAssetRequisition() {
        const dataFixedAssetRequisition = Cypress.env('excelData');
        //Description Group Type Asset_Category No_of_Assets Department_Name  Remarks

        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtassetDesc').type(dataFixedAssetRequisition.Description);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlAssetGroup').select(dataFixedAssetRequisition.Group);
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlAssetType').select(dataFixedAssetRequisition.Type);
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlAssetCategory').select(dataFixedAssetRequisition.Asset_Category);
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtMultipleQuintity').type(dataFixedAssetRequisition.No_of_Assets);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlDepartment').select(dataFixedAssetRequisition.Department_Name);
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtRemarks').type(dataFixedAssetRequisition.Remarks);
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_butAdd').click();
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
        cy.wait(2000);

        cy.get('.ui-dialog-content', { timeout: 10000 })  // popup content ধরার জন্য
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                // Regex update: "ID" এর পরের সংখ্যা ধরার জন্য
                const match = text.match(/ID\s+(\d+)/);

                if (match) {
                    const requisitionId = match[1];
                    expect(requisitionId).to.not.be.null;
                    Cypress.env('requisitionId', requisitionId);
                    cy.log('✅ Requisition ID:', requisitionId);

                } else {
                    throw new Error('❌ Requisition ID not found!');
                }
            });

        cy.wait(3000);
        cy.get('.ui-button-text').click();   // Ok বাটন ক্লিক

        

    }
}

export default FixedAssetRequisitionPage;