class Lon_CommitmentPortfolioRegister {

    CommitmentPortfolioRegister() {

        //cy.wait(3000);
        const dataCommitmentPortfolioRegister = Cypress.env('excelData');
        cy.intercept('POST', 'http://192.168.20.127/BankUltimus/src/BankUltimus.UI/BU_Finance/CorLonCommitRegUI.aspx?FUNCTION_ID=0110001&FAST_PATH=3131').as('formReload');


        //------use this block for dynamically use acc no. 
        cy.then(() => {
            const proposalId = Cypress.env('proposalId');
            cy.get('#ctl00_contPlcHdrMasterHolder_LstxtProposalId')
                .clear() // Optional: clear input first
                .type(proposalId).type('{enter}').type('{enter}');

        });//00000000212682
        // cy.then(() => {
        //     //const proposalId = Cypress.env('proposalId');
        //     cy.get('#ctl00_contPlcHdrMasterHolder_LstxtProposalId')
        //         .clear() // Optional: clear input first
        //         .type('00000000212677').type('{enter}').type('{enter}');

        // });
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtProposalId')
        //     .clear() // Optional: clear input first
        //     .type('212682').type('{enter}');
        //cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCommitmentID').click();
        //cy.wait(10000);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtLoanAmount', { timeout: 10000 })
        //     .should('have.value')
        //     .then(() => {
        //         cy.get('#ctl00_contPlcHdrMasterHolder_LstxtRemarks')
        //             .clear()
        //             .type(dataCommitmentPortfolioRegister.remarks)
        //             .type('{enter}');
        //     });

        cy.log('Loan Amount is present');
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_lstxt_remarks')
            .clear()
            .type(dataCommitmentPortfolioRegister.remarks)
            .type('{enter}');

        //     cy.wait(3000);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlMailingAddressType').click();
        // cy.wait(3000);
        // //cy.wait('@formReload');       //intercept Post Request call
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlMailingAddressType').focus().select(dataCommitmentPortfolioRegister.address_type, { force: true });
        //  cy.wait(3000);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtRemarks').type(dataCommitmentPortfolioRegister.remarks).type('{enter}');
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();

        cy.get('.ui-dialog-content', { timeout: 10000 })  // বা popup এর selector যেটা ঠিক
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                const match = text.match(/ID:\s*(\d+)/);

                if (match) {
                    Cypress.env('proposalId', null);
                    const commitmentId = match[1];
                    expect(commitmentId).to.not.be.null;
                    Cypress.env('commitmentId', commitmentId);
                    cy.log('commitment ID:', commitmentId);

                } else {
                    throw new Error('❌ commitment ID not found!');
                }
            });

        // cy.wait(3000);


        cy.wait(3000);
        cy.get('.ui-button-text').click();

    }
}

export default Lon_CommitmentPortfolioRegister;