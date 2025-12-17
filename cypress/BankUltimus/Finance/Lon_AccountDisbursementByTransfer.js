class LonAccountTrfTrans {

    LonAccTrfTrans() {
        const dataLonTrfTrans = Cypress.env('excelData');
        //------use this block for dynamically use acc no. 
        cy.then(() => {
            const accountNumber = Cypress.env('accountNumber');
            cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccountNo')
                .clear() // Optional: clear input first
                .type(accountNumber).type('{enter}');
                //.type('6699605000009').type('{enter}').type('{enter}');

        });
         
        cy.wait(3000); 
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAmountCcy').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAmountCcy').type(dataLonTrfTrans.amount).type('{enter}');
 
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtNarrationDr').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtNarrationDr').type(dataLonTrfTrans.narration).type('{enter}');

        cy.get('#ctl00_contPlcHdrMasterHolder_LsChkWithoutContra').check(); //without contra
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
        cy.wait(3000);
        cy.get('.ui-state-focus > .ui-button-text').click();//click ok btn of confirmation popup

        cy.wait(3000);
        cy.get('#dialog') // or the actual selector that targets the text container
            .should('contain.text', 'Batch No')
            .invoke('text')
            .then((popupText) => {
                cy.log(`Popup Text: "${popupText}"`);

                const match = popupText.match(/Batch\s*No\s*:\s*(\d+)/i);

                if (!match) {
                    throw new Error("❌ Batch No. not found in popup text.");
                }

                const batchNo = match[1];
                Cypress.env('batchNo', batchNo);
                cy.log(`✅ Batch No: ${batchNo}`);
            });
        cy.wait(3000);
        cy.get('.ui-button-text').click();
    }
}

export default LonAccountTrfTrans;