class Lon_AccountOpen {

    LoanAccountOpenPage() {

        //cy.wait(3000);
        const dataLoanAccountOpenPage = Cypress.env('excelData');
        cy.intercept('POST', 'http://192.168.20.127/BankUltimus/src/BankUltimus.UI/BU_Finance/CorLonCommitRegUI.aspx?FUNCTION_ID=0110001&FAST_PATH=3131').as('formReload');


        //------use this block for dynamically use acc no. 
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustomerID').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustomerID').focus().type(dataLoanAccountOpenPage.cus_ID).type('{enter}');
        //cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustomerID').focus().type('0000876410').type('{enter}');
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustomerID').focus().type('{enter}');

        cy.wait(3000);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCommitmentID').click();
        //cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCommitmentID').(1).click();   // index starts at 0

        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCommitmentID')
        //     .find('option')
        //     .eq(1) // pick the 2nd option
        //     .then(option => {
        //         cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCommitmentID')
        //             .select(option.text());
        //     });
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCommitmentID')
            .find('option')
            .last() // pick the last option
            .then(option => {
                cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCommitmentID')
                    .select(option.text()); // select by text
            });


        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProduct')
            .find('option')
            .eq(1) // pick the 2nd option
            .then(option => {
                cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProduct')
                    .select(option.text());
            });
        cy.wait(3000);
        // const product_type = Cypress.env('Product_Type');
        // cy.log('Product Type:', product_type);
        const product_type = String(dataLoanAccountOpenPage.Product_Type).trim();

        // Save to Cypress env (use same variable name)
        Cypress.env('Product_Type', product_type);
        //console.log('Product_Type:', product_type);
        cy.log('Product Type:', product_type);

        if (product_type === 'is_purpose_wise') {
            cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProductCreditPurposeMap')
                .find('option')
                .eq(1) // pick the 2nd option
                .then(option => {
                    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProductCreditPurposeMap')
                        .select(option.text());
                });
            cy.wait(3000);
            cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProductCreditPurposeSequence')
                .find('option')
                .eq(1) // pick the 2nd option
                .then(option => {
                    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProductCreditPurposeSequence')
                        .select(option.text());
                });

            cy.wait(3000);
        }

        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtLimitAmt')   // adjust selector
            .invoke('val')                // get value from textbox
            .then(limitValue => {
                cy.log('Fetched Limit:', limitValue);
                Cypress.env('loanLimit', limitValue);
                // 3. Type the value into another textbox
                cy.get('#ctl00_contPlcHdrMasterHolder_LstxtInvestmentAmt').clear().type(limitValue);
            });
        //cy.get('#ctl00_contPlcHdrMasterHolder_LstxtIDCBORG');
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtIDCBORG')
            .find('option')
            .eq(0) // pick the 2nd option
            .then(option => {
                cy.get('#ctl00_contPlcHdrMasterHolder_LstxtIDCBORG')
                    .select(option.text());
            });

        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProductCode');
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProductCode')
            .find('option')
            .eq(5) // pick the 2nd option
            .then(option => {
                cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProductCode')
                    .select(option.text());
            });

        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlMailingAddressType').focus().blur();
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlMailingAddressType', { timeout: 10000 })
            .should('not.be.disabled')
            .should('contain.text', 'Permanent')
            .select(dataLoanAccountOpenPage.address_type, { force: true });
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlMailingAddressType');

        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTrNat');
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlTransPeriod');
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtNoTrans');
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtTransAmt');
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtTotalValue');
        // cy.get('#ctl00_contPlcHdrMasterHolder_BtnKYCAdd');
        // cy.get('#ctl00_contPlcHdrMasterHolder_btnOk');
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtRemarks').type(dataCommitmentPortfolioRegister.remarks).type('{enter}');
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();

        // cy.wait(3000);
        cy.wait(3000);


        // Wait for popup to be visible and contain expected text
        cy.get('.ui-dialog-content', { timeout: 10000 }) // 10s wait
            .should('be.visible')
            .invoke('text')
            .then((popupText) => {
                // Debug print
                cy.log('Popup Text: ' + popupText);
                const match = popupText.match(/AC NO\s*:\s*(\d+)/);
                if (!match) {
                    throw new Error("❌ Account Number not found in popup text.");
                }
                const accountNumber = match[1];
                expect(accountNumber).to.not.be.null;

                Cypress.env('commitmentId', null);
                Cypress.env('collateralID', null);
                Cypress.env('accountNumber', accountNumber);
                cy.log('✅ Extracted Loan Account Number: ' + accountNumber);
            });

        cy.wait(3000);
        cy.get('.ui-button-text').click();

    }
}

export default Lon_AccountOpen;