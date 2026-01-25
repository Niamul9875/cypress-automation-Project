class BankGuraranteeIssuePage {
    BankGuraranteeIssue() {
        const dataBankGuraranteeIssue = Cypress.env('excelData');

        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlApplType').select(dataBankGuraranteeIssue.Applicant_Type);

        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtApplCustID').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtApplCustID').focus().type(dataBankGuraranteeIssue.cus_ID).type('{enter}');
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCommitment')
            .find('option')
            .last()
            .then(option => {
                cy.log('Selecting option with value: ' + option.val());
                cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCommitment').select(option.val());
            });
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlGurPrd').select(dataBankGuraranteeIssue.Guarantee_Product);
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProductCreditPurposeMap').select(dataBankGuraranteeIssue.Purpose_Map_Id);
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProductCreditPurposeSequence').select('0');//dataBankGuraranteeIssue.Purpose_Sequence
        cy.wait(2000);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlGurType option:not(:disabled)')
        //     .first()
        //     .then($option => {
        //         cy.get('#ctl00_contPlcHdrMasterHolder_LsddlGurType').select($option.val());
        //     });
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlGurType').find('option').eq(1)
            .then($opt => {
                cy.get('#ctl00_contPlcHdrMasterHolder_LsddlGurType').select($opt.val());
            });
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtContext').clear().type(dataBankGuraranteeIssue.Context);

        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCusMailAddrType').select(dataBankGuraranteeIssue.address_type);
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlSecType').select(dataBankGuraranteeIssue.Security_Type);
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtBenfName').clear().type(dataBankGuraranteeIssue.Beneficiary_Name);
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtBenfAddr').clear().type(dataBankGuraranteeIssue.Beneficiary_Address);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAmtCCY').clear().type(dataBankGuraranteeIssue.Amount);
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtMarginPct').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtMarginPct').type(dataBankGuraranteeIssue.Margin_Percentage);
        //cy.get('@ctl00_contPlcHdrMasterHolder_LstxtMarginPct').should('have.value', dataBankGuraranteeIssue.Margin_Percentage)
        // cy.wait(3000);33
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtMarginPaidPct').clear();
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtMarginPaidPct').type(dataBankGuraranteeIssue.Margin_Paid);
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_btnShowTrans').click().click();
        cy.wait(2000);
        

        cy.get('#ctl00_contPlcHdrMasterHolder_gvTransaction tr').each(($row) => {
            const rawHtml = $row.find('td').eq(2).html()

            if (rawHtml && rawHtml.includes('&nbsp;')) {
                cy.wrap($row).find('a').contains('Select').click()
                return false
            }
        })

        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCientAcNo')
            .find('option')
            .last()
            .then(option => {
                cy.log('Selecting option with value: ' + option.val());
                cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCientAcNo').select(option.val());
            });
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_btnSM').click();
        cy.wait(2000);
        cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
        cy.get('.ui-state-focus > .ui-button-text').click();
        cy.get('.ui-dialog-content')
            .invoke('text')
            .then((text) => {
                const id = text.match(/Guarantee ID\.\s*\[(\d+)\]/)[1]
                cy.log('guaranteeId:', id);
                Cypress.env('guaranteeId', id)
            });

        cy.get('.ui-state-focus > .ui-button-text').click();
        cy.get('.ui-button-text').click(); 
    }


}

export default BankGuraranteeIssuePage;