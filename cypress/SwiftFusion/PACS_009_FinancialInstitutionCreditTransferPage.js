class PACS_009_FinancialInstitutionCreditTransferPage {

    PACS_009() {

        const dataPACS_009 = Cypress.env('excelData');

        //cy.get('#mat-input-0').type(dataPACS_009.Char_Set);//
        cy.get('[controlname="charSet"]').clear().type(dataPACS_009.Char_Set)
        // fromMmbId
        //fromLei

        cy.get('[controlname="toBicfi"]').clear().type('bd').dblclick();        
        //cy.get('#mat-input-14').type('bd').dblclick(); // Message Identification
       
       
      

        //cy.get(':nth-child(1) > .flex > lds-btn > .inline-flex').click(); // Generate
        cy.get(':nth-child(1) > :nth-child(4) > .text-green-600').click(); // Copy
       
        cy.get(':nth-child(1) > :nth-child(3) > .form-grid-col-1 > app-select-option-field > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger')
            .click().type(dataPACS_009.Clg_Sys_ID_Code);
        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataPACS_009.Clg_Sys_ID_Code).click();
        cy.get('#mat-input-12').type(dataPACS_009.Member_ID); //toMmbId
        cy.get('#mat-input-13').type(dataPACS_009.LEI);  //toLei

        cy.get(':nth-child(1) > :nth-child(4) > .form-grid-col-1 > app-select-option-field > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger').click().type(dataPACS_009.Clg_Sys_ID_Code);

        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataPACS_009.Clg_Sys_ID_Code).click();

        cy.get('#mat-input-15').type(dataPACS_009.Member_ID);
        cy.get('#mat-input-16').type(dataPACS_009.LEI);
        // Generate a unique BMID using current timestamp
        const BMID = `${Date.now()}`;
        cy.get('#mat-input-1')
            .should('be.visible')
            .clear()
            .type(BMID);
        // Log it so you can see in test runner
        cy.log('Generated BMID:', BMID);

        cy.get(':nth-child(6) > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger').click().type(dataPACS_009.Copy_Duplicate);

        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataPACS_009.Copy_Duplicate)
            .click();

        cy.get(':nth-child(7) > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger').click().type(dataPACS_009.Possible_Duplicate);

        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataPACS_009.Possible_Duplicate)
            .click();

        cy.get(':nth-child(8) > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger').click().type(dataPACS_009.Priority);

        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataPACS_009.Priority)
            .click();




        cy.get('#mat-input-17').type(dataPACS_009.M_ID);
        cy.get('#mat-input-20').type(dataPACS_009.INS_ID);
        cy.get('#mat-input-21').type(dataPACS_009.INS_ID);

        // Click to open the dropdown
        // cy.get(':nth-child(4) > .form-grid-col-1 > :nth-child(1) > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger')
        //     .click();
        // // Wait for the dropdown options to render
        // cy.get('body .cdk-overlay-container .mat-option', { timeout: 10000 })
        //     .contains('USD - US Dollar')
        //     .click();


        cy.get('#mat-input-22').type(dataPACS_009.Transaction_ID);
        cy.get('#mat-input-23').type(dataPACS_009.Clg_Sys_Ref);

        cy.get(':nth-child(4) > .form-grid-col-1 > :nth-child(1) > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger').click().type(dataPACS_009.Currency);

        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataPACS_009.Currency)
            .click();


        cy.get('#mat-input-24').type(dataPACS_009.Amount);
        cy.get(':nth-child(4) > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger').click().type(dataPACS_009.Settl_Priority);
        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataPACS_009.Settl_Priority)
            .click();



           // Check if BM_ID textbox has a value and store it
            cy.get('#mat-input-1').then(($input) => {
                const bmId = $input.val(); // get the current value

                if (bmId) {
                    // If value exists, store it in Cypress.env
                    Cypress.env('BM_ID', bmId);
                    cy.log(`✅ BM_ID found: ${bmId}`);
                } else {
                    cy.log('⚠️ No BM_ID value found in the textbox');
                }
            });

            cy.get('app-save > .save-btn')
                .contains('Save')
                .click();







    }
}

export default PACS_009_FinancialInstitutionCreditTransferPage;

