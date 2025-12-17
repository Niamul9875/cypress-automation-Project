class LonAccountRePayTrfTrans {

    LonAccRePayTrfTrans() {
        const dataLonRePayTrfTrans = Cypress.env('excelData');
        //------use this block for dynamically use acc no. 
        cy.then(() => {
            const accountNumber = Cypress.env('accountNumber');
            cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccountNo')
                .clear() // Optional: clear input first
                .type(accountNumber).type('{enter}');
            //.type('6699605000010').type('{enter}');

        });
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAmtCcyCr').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAmtCcyCr').type(dataLonRePayTrfTrans.amount).type('{enter}');

        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtNarrationCr').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtNarrationCr').type(dataLonRePayTrfTrans.narration).type('{enter}');

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

export default LonAccountRePayTrfTrans;