class FixedAssetCreatePage {

    fixedAssetCreate() {
        const dataFixedAssetCreate = Cypress.env('excelData');
        //Description Group Type Asset_Category No_of_Assets Department_Name  Remarks

        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtSearchBranchID').type('6699').type('{enter}');
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_btnSearch').click();
        cy.wait(2000);
        cy.get('.ui-button-text').click();   // Ok বাটন ক্লিক
        const requisitionNo = '669900000004';
        cy.get('table tbody tr').each(($row) => {
            const text = $row.find('td').eq(0).text().trim(); // 0 = Requisition No column
            if (text === requisitionNo) {
                cy.wrap($row).within(() => {
                    cy.contains('Select').click();
                });
                return false; // stop loop after match
            }
        });
         cy.wait(2000);
         
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtVendorID').type(dataFixedAssetCreate.Vendor_Name).type('{enter}');
          cy.wait(3000);
         cy.get('#ctl00_contPlcHdrMasterHolder_LstxtPurchaseVal').type(dataFixedAssetCreate.Purchase_Value).type('{enter}');
       
         cy.wait(2000);
         cy.get('#ctl00_contPlcHdrMasterHolder_LsddlAcqType').select(dataFixedAssetCreate.Acquisition_Type);
         cy.wait(2000);
         cy.get('#ctl00_contPlcHdrMasterHolder_LsddlAssetPayType').select(dataFixedAssetCreate.Payment_Status);

        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlAssetGroup').select(dataFixedAssetCreate.Group);
        // cy.wait(2000);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlAssetType').select(dataFixedAssetCreate.Type);
        // cy.wait(2000);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlAssetCategory').select(dataFixedAssetCreate.Asset_Category);
        // cy.wait(2000);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtMultipleQuintity').type(dataFixedAssetCreate.No_of_Assets);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlDepartment').select(dataFixedAssetCreate.Department_Name);
        // cy.wait(2000);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtRemarks').type(dataFixedAssetCreate.Remarks);
        // cy.wait(2000);
        // cy.get('#ctl00_contPlcHdrMasterHolder_butAdd').click();
        // cy.wait(2000);
        // cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
        // cy.wait(2000);

        // cy.get('.ui-dialog-content', { timeout: 10000 })  // popup content ধরার জন্য
        //     .should('be.visible')
        //     .invoke('text')
        //     .then((text) => {
        //         // Regex update: "ID" এর পরের সংখ্যা ধরার জন্য
        //         const match = text.match(/ID\s+(\d+)/);

        //         if (match) {
        //             const CreateId = match[1];
        //             expect(CreateId).to.not.be.null;
        //             Cypress.env('CreateId', CreateId);
        //             cy.log('✅ Create ID:', CreateId);

        //         } else {
        //             throw new Error('❌ Create ID not found!');
        //         }
        //     });

        // cy.wait(3000);
        // cy.get('.ui-button-text').click();   // Ok বাটন ক্লিক



    }
}

export default FixedAssetCreatePage;