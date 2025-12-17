import { faker } from '@faker-js/faker';

class DepositAccMarkLien {

    AccMarkLien() {

        const dataAccMarkLien = Cypress.env('excelData');
        //cy.intercept('POST', 'http://192.168.20.127/BankUltimus/src/BankUltimus.UI/BU_Deposit/DepositAccBeneficiaryInfoUI.aspx?FUNCTION_ID=0201095&FAST_PATH=2005').as('formReload');

        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccNo')
            .clear() // Optional: clear input first
            .type(dataAccMarkLien.acc_no).type('{enter}').type('{enter}');


        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlLienReq').select(dataAccMarkLien.lien_Request, { force: true });
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlLienAmountType').select(dataAccMarkLien.amount_Type, { force: true });
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_btnLien').click(); // Click Add beneficiary button
        cy.wait(3000);
        cy.get('.ui-dialog-content', { timeout: 10000 }) // 10s wait
            .should('be.visible')
            .invoke('text')
            .then((popupText) => {
                // Debug print
                cy.log('Popup Text: ' + popupText);

                const match = popupText.match(/Account No\s*:\s*(\d+)/);

                if (!match) {
                    throw new Error("❌ Account Number not found in popup text.");
                }

                const accountNumber = match[1];
                expect(accountNumber).to.not.be.null;

                Cypress.env('accountNumber', accountNumber);
                cy.log('✅ Extracted Account Number: ' + accountNumber);
            });
        //cy.wait(3000);
        // cy.get('.ui-button-text').click(); // Click OK button to close the dialog

    }
}

export default DepositAccMarkLien;

