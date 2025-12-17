class LonAccAllowLimitSetup {

    LonAccAllowLimit() {
        //const dataAccAllowLimit = Cypress.env('excelData');
        //------use this block for dynamically use acc no. 
        cy.then(() => {
            const accountNumber = Cypress.env('accountNumber');
            cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccountNo')
                .clear() // Optional: clear input first
                .type(accountNumber).type('{enter}');
                //.type('6699605000008').type('{enter}');

        });
        cy.wait(3000);
        cy.then(() => {
            const loanLimit = Cypress.env('loanLimit');
            cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAllowableLimits')
                .clear() // Optional: clear input first
                .type(loanLimit).type('{enter}');
                //.type('100000').type('{enter}');

        });
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtRemarks').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtRemarks').type('Allow Limit Setup').type('{enter}');
        cy.wait(3000);

        cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
        cy.wait(3000);

        cy.get('.ui-button-text').click();
    }
}

export default LonAccAllowLimitSetup;