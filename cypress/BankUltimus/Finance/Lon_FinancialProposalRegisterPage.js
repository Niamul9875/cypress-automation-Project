class Lon_FinancialProposalRegister {

    FinancialProposalRegister() {

        //cy.wait(3000);
        const dataFinancialProposalRegister = Cypress.env('excelData');
        cy.intercept('POST', '/BankUltimus/src/BankUltimus.UI/BU_Finance/CorLonProposalNewUI.aspx?FUNCTION_ID=0108001&FAST_PATH=3111').as('formReload');
        //cy.intercept('POST', '/BankUltimus/src/BankUltimus.UI/BU_Finance/CorLonProposalNewUI.aspx?FUNCTION_ID=0108001&FAST_PATH=3111').as('formReload2');

        //cy.get('#ctl00_contPlcHdrMasterHolder_LstxtForwardingRefNo').type(dataFinancialProposalRegister.for_ref_no).blur();

        //cy.wait('@formReload');
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtForwardingRefNo').focus().type(dataFinancialProposalRegister.for_ref_no).type('{enter}');

        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCreditDept').select(dataFinancialProposalRegister.fin_Dept);
        cy.wait(3000);
        //cy.get('#')
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustomerID').clear();
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustomerID').focus().type(dataFinancialProposalRegister.cus_ID).type('{enter}');
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtCustomerID').focus().type('{enter}');
        //cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlMailingAddressType').select(dataFinancialProposalRegister.address_type).blur();
        cy.wait(3000);
        //cy.wait('@formReload');       //intercept Post Request call
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlMailingAddressType').focus().select(dataFinancialProposalRegister.address_type, { force: true });

        //cy.wait(3000); 


        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtEconomicPurposeCodeSBS').type(dataFinancialProposalRegister.eco_sbs).type('{enter}');

        // cy.wait('@formReload');
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtSecurityCode').clear().type(dataFinancialProposalRegister.sec_code);
        //cy.get('#ctl00_contPlcHdrMasterHolder_LstxtSecurityCode').clear().type(dataFinancialProposalRegister.sec_code);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LstxtSecurityCode').type(dataFinancialProposalRegister.sec_code).then(() => {
        //     cy.get('#ctl00_contPlcHdrMasterHolder_LstxtSecurityCode').should('have.value', dataFinancialProposalRegister.sec_code);
        // });

        //cy.wait(3000);
        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlLendingPurpose') .focus().blur();
        // cy.wait('@formReload');       //intercept Post Request call

        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlLendingPurpose').select(dataFinancialProposalRegister.credit_Purpose).blur();
        cy.wait(3000);
        //cy.wait('@formReload');       //intercept Post Request call
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlLendingPurpose').focus().select(dataFinancialProposalRegister.credit_Purpose, { force: true });


        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlLendingPurpose')
        //     .contains('option', 'OTHERS') // Partial text match
        //     .then($option => {
        //         const val = $option.attr('value');
        //         cy.get('#ctl00_contPlcHdrMasterHolder_LsddlLendingPurpose')
        //             .select(val, { force: true });
        //     });

        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlLendingPurpose').focus().select(dataFinancialProposalRegister.credit_Purpose, { force: true });
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlLendingConcentration').focus().select(dataFinancialProposalRegister.credit_Concen, { force: true });
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlExportSector').focus().select(dataFinancialProposalRegister.sector, { force: true });
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlExposureType').focus().select(dataFinancialProposalRegister.expo_Type, { force: true });
        //cy.wait(3000);
        // const product_type = String(dataFinancialProposalRegister.Product_Type).trim();
        // Cypress.env('Product_Type', Product_Type);

        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProposalTyp').focus().select(dataFinancialProposalRegister.Proposal_Type, { force: true });
        // cy.wait(3000);

        const product_type = String(dataFinancialProposalRegister.Product_Type).trim();

        // Save to Cypress env (use same variable name)
        Cypress.env('Product_Type', product_type);
        //console.log('Product_Type:', product_type);
        cy.log('Product Type:', product_type);

        // Check condition purpose_wise
        if (product_type === 'is_purpose_wise') {
            cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProposalTyp')
                .focus()
                .select(dataFinancialProposalRegister.Proposal_Type, { force: true });
        }
        // Check condition BankGuarantee
        if (product_type === 'BankGuarantee') {
            cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProposalTyp')
                .focus()
                .select(dataFinancialProposalRegister.Proposal_Type, { force: true });
            cy.wait(2000);
            cy.get('#ctl00_contPlcHdrMasterHolder_LsddlFundedFacility')
                .focus()
                .select(dataFinancialProposalRegister.Facility, { force: true });

        }


        // cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProduct').select(dataFinancialProposalRegister.product).blur();
        cy.wait(3000);
        //cy.wait('@formReload');       //intercept Post Request call
        //cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProduct').focus().select(dataFinancialProposalRegister.product, { force: true });
        // cy.then(() => {
        //     cy.log('Product from Excel:', JSON.stringify(dataFinancialProposalRegister.product));
        //     console.log('Product from Excel:', dataFinancialProposalRegister.product);
        // });
        if (product_type === 'BankGuarantee') {
            cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCreditLineID')
                .focus()
                .select(dataFinancialProposalRegister.CreditLine, { force: true });
            cy.wait(3000);
            cy.get('#ctl00_contPlcHdrMasterHolder_LschkRevolvingLine').check({ force: true });
            cy.wait(3000);

        } else {
            const product = String(dataFinancialProposalRegister.product).trim();
            Cypress.env('product', product);

            cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProduct')
                .find('option')
                .contains(product)   // partial match inside dropdown text
                .then($option => {
                    const val = $option.attr('value');  // get the actual <option value="...">
                    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProduct')
                        .select(val, { force: true });
                });
        }


        if (product_type === 'is_purpose_wise') {
            cy.get('#ctl00_contPlcHdrMasterHolder_LsddlPurposetypemap')
                .focus()
                .select(dataFinancialProposalRegister.Purpose_Map_Type, { force: true });

        } else if (product_type === 'BankGuarantee') {
            cy.get('#ctl00_contPlcHdrMasterHolder_LsddlPurposetypemap')
                .focus()
                .select(dataFinancialProposalRegister.Purpose_Map_Type, { force: true });
            cy.get('#ctl00_contPlcHdrMasterHolder_LsddlBGProd')
                .focus()
                .select(dataFinancialProposalRegister.BGPorduct, { force: true });

        }

        cy.wait(3000);

        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlApprovalAuthority')
            .contains('option', 'Branch Manager') // Partial text match
            .then($option => {
                const val = $option.attr('value');
                cy.get('#ctl00_contPlcHdrMasterHolder_LsddlApprovalAuthority')
                    .select(val, { force: true });
            });

        //cy.get('#ctl00_contPlcHdrMasterHolder_LsddlApprovalAuthority').focus().select(dataFinancialProposalRegister.approval_Auth, { force: true });
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtLimitAmount').type(dataFinancialProposalRegister.limit_Amount).type('{enter}');
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtLimitValidity').type(dataFinancialProposalRegister.limit_Validity).type('{enter}');
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtLimitValidity').type(dataFinancialProposalRegister.limit_Validity).type('{enter}');
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlLimitValidity').focus().select(dataFinancialProposalRegister.limit_Validity2, { force: true });
        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtACValidity').type(dataFinancialProposalRegister.duration).type('{enter}');
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlACValidity').focus().select(dataFinancialProposalRegister.duration2, { force: true });
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlEnvironCategory').focus().select(dataFinancialProposalRegister.env_Category, { force: true });
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlRiskCategory').focus().select(dataFinancialProposalRegister.risk_Category, { force: true });
        cy.wait(3000);
        if (product_type !== 'BankGuarantee') {
            cy.get('#ctl00_contPlcHdrMasterHolder_LsddlInterestRateType').focus().select(dataFinancialProposalRegister.int_Rate, { force: true });
            cy.wait(3000);
        }




        cy.wait(3000);

        if (product_type === 'is_purpose_wise' || product_type === 'BankGuarantee') {
            cy.get('#ctl00_contPlcHdrMasterHolder_btnAdd').click();
            cy.wait(3000);
            if (product_type === 'is_purpose_wise') {

                cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProduct')
                    .find('option')
                    .contains(product)   // partial match inside dropdown text
                    .then($option => {
                        const val = $option.attr('value');  // get the actual <option value="...">
                        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlProduct')
                            .select(val, { force: true });
                        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlPurposetypemap')
                            .focus()
                            .select(dataFinancialProposalRegister.Purpose_Map_Type, { force: true });
                        cy.wait(3000);
                    });
            } else {
                cy.get('#ctl00_contPlcHdrMasterHolder_LsddlCreditLineID')
                    .focus()
                    .select(dataFinancialProposalRegister.CreditLine, { force: true });
                cy.wait(3000);
                cy.get('#ctl00_contPlcHdrMasterHolder_LschkRevolvingLine').check({ force: true });
                cy.wait(3000);

                cy.get('#ctl00_contPlcHdrMasterHolder_LsddlPurposetypemap')
                    .focus()
                    .select(dataFinancialProposalRegister.Purpose_Map_Type, { force: true });
                cy.wait(3000);
                cy.get('#ctl00_contPlcHdrMasterHolder_LsddlBGProd')
                    .focus()
                    .select(dataFinancialProposalRegister.BGPorduct, { force: true });

            }
            cy.wait(3000);


            cy.get('#ctl00_contPlcHdrMasterHolder_LsddlApprovalAuthority')
                .contains('option', 'Branch Manager') // Partial text match
                .then($option => {
                    const val = $option.attr('value');
                    cy.get('#ctl00_contPlcHdrMasterHolder_LsddlApprovalAuthority')
                        .select(val, { force: true });
                });
            cy.wait(3000);
            cy.get('#ctl00_contPlcHdrMasterHolder_LstxtLimitAmount').type('300000').type('{enter}');
            cy.wait(3000);
            cy.get('#ctl00_contPlcHdrMasterHolder_LstxtLimitValidity').type(dataFinancialProposalRegister.limit_Validity).type('{enter}');
            cy.wait(3000);
            cy.get('#ctl00_contPlcHdrMasterHolder_LstxtLimitValidity').type(dataFinancialProposalRegister.limit_Validity).type('{enter}');
            cy.get('#ctl00_contPlcHdrMasterHolder_LsddlLimitValidity').focus().select(dataFinancialProposalRegister.limit_Validity2, { force: true });
            cy.wait(3000);
            cy.get('#ctl00_contPlcHdrMasterHolder_LstxtACValidity').type(dataFinancialProposalRegister.duration).type('{enter}');
            cy.get('#ctl00_contPlcHdrMasterHolder_LsddlACValidity').focus().select(dataFinancialProposalRegister.duration2, { force: true });
            cy.get('#ctl00_contPlcHdrMasterHolder_LschkInnerLimit').check({ force: true });
            cy.wait(3000);
            cy.get('#ctl00_contPlcHdrMasterHolder_LsddlOuterCreditLine').focus().select(dataFinancialProposalRegister.Outer_Credit_Line, { force: true });
            cy.wait(3000);
            cy.get('#ctl00_contPlcHdrMasterHolder_LsddlOuterPurposeMap').focus().select(dataFinancialProposalRegister.Outer_Purpose_Map_Type, { force: true });
            cy.wait(3000);
            cy.get('#ctl00_contPlcHdrMasterHolder_LsddlOutterPurposeSeq').focus().select(dataFinancialProposalRegister.Outer_Purpose_Sequence, { force: true });


            cy.get('#ctl00_contPlcHdrMasterHolder_LsddlEnvironCategory').focus().select(dataFinancialProposalRegister.env_Category, { force: true });
            cy.get('#ctl00_contPlcHdrMasterHolder_LsddlRiskCategory').focus().select(dataFinancialProposalRegister.risk_Category, { force: true });
            cy.wait(3000);
            if (product_type !== 'BankGuarantee') {
                cy.get('#ctl00_contPlcHdrMasterHolder_LsddlInterestRateType').focus().select(dataFinancialProposalRegister.int_Rate, { force: true });
                cy.wait(3000);
            }
            cy.get('#ctl00_contPlcHdrMasterHolder_btnAdd').click();
            cy.wait(3000);
        }

        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtDepositNote').type(dataFinancialProposalRegister.remarks).type('{enter}');
        // Check if textbox is empty

        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtSecurityCode').type(dataFinancialProposalRegister.sec_code).type('{enter}');
        cy.get('#ctl00_contPlcHdrMasterHolder_LstxtSecurityCode').invoke('val').then((text) => {
            if (!text) {
                // If empty, type the purpose and click OK
                cy.get('#ctl00_contPlcHdrMasterHolder_LstxtSecurityCode').type(dataFinancialProposalRegister.sec_code).type('{enter}');

                cy.wait(3000);
                cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
                //cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
            } else {
                // If not empty, directly click OK
                cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
            }
        });


            cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();

            cy.get('.ui-state-focus > .ui-button-text').click();

            //cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();
            cy.get('.ui-dialog-content', { timeout: 10000 })  // বা popup এর selector যেটা ঠিক
                .should('be.visible')
                .invoke('text')
                .then((text) => {
                    const match = text.match(/ID:\s*(\d+)/);

                    if (match) {
                        const proposalId = match[1];
                        expect(proposalId).to.not.be.null;
                        Cypress.env('proposalId', proposalId);
                        cy.log('Proposal ID:', proposalId);

                    } else {
                        throw new Error('❌ Proposal ID not found!');
                    }
                });


            cy.wait(3000);
            cy.get('.ui-button-text').click();

    }
}

export default Lon_FinancialProposalRegister;