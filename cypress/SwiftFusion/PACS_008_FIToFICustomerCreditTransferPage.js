class PACS_008_FIToFICustomerCreditTransferPage {
    PACS_008() {
        const dataPACS_008 = Cypress.env('excelData');
        //Business Application Header--From
        cy.get('#mat-input-0').type(dataPACS_008.Char_Set);
        cy.get('.form-wrapper > :nth-child(1) > :nth-child(3) > .form-grid-col-1 > app-select-option-field > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger')
            .click().type(dataPACS_008.Clg_Sys_ID_Code);
        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataPACS_008.Clg_Sys_ID_Code).click();
        cy.get('#mat-input-8').type(dataPACS_008.Member_ID);
        cy.get('#mat-input-9').type(dataPACS_008.LEI);

        //Business Application Header--To
        cy.get('#mat-input-10').type('bd').dblclick(); // Message Identification
        //cy.get(':nth-child(1) > .flex > lds-btn > .inline-flex').click(); // Generate
        cy.get(':nth-child(1) > :nth-child(4) > .text-green-600').click(); // Copy

        cy.get('.mb-2 > .form-grid-col-1 > app-select-option-field > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger')
            .click().type(dataPACS_008.Clg_Sys_ID_Code);
        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataPACS_008.Clg_Sys_ID_Code).click();

        cy.get('#mat-input-12').type(dataPACS_008.Member_ID);
        cy.get('#mat-input-13').type(dataPACS_008.LEI);
        const BMID = `${Date.now()}`;
        cy.get('#mat-input-1')
            .should('be.visible')
            .clear()
            .type(BMID);
        // Log it so you can see in test runner
        cy.log('Generated BMID:', BMID);

        //Market Practice

        cy.get(':nth-child(5) > :nth-child(6) > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger').click().type(dataPACS_008.Copy_Duplicate);

        cy.get('.dropdown-menu > :nth-child(2)', { timeout: 10000 })
            .contains(dataPACS_008.Copy_Duplicate)
            .click();

        cy.get(':nth-child(7) > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger').click().type(dataPACS_008.Possible_Duplicate);

        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataPACS_008.Possible_Duplicate)
            .click();
        cy.get('#mat-input-20').type(dataPACS_008.Clg_Sys_Ref);
        cy.get(':nth-child(3) > .form-grid-col-1 > :nth-child(1) > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger')
            .click().type(dataPACS_008.Currency);

        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataPACS_008.Currency)
            .click();


        cy.get('#mat-input-21').type(dataPACS_008.Amount);
        cy.get(':nth-child(3) > .form-grid-col-1 > :nth-child(4) > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger').click().type(dataPACS_008.Settl_Priority);
        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataPACS_008.Settl_Priority)
            .click();
        cy.get(':nth-child(2) > :nth-child(6) > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger').click().type(dataPACS_008.Currency);

        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataPACS_008.Currency)
            .click();
        cy.get('#mat-input-5').type(dataPACS_008.Amount);
        //cy.get('#mat-input-47').type(dataPACS_008.Exchange_Rate);
        cy.get(':nth-child(9) > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger')
            .click().type(dataPACS_008.Charge_Bearer);

        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataPACS_008.Charge_Bearer)
            .click();//Charge Bearer



        cy.get(':nth-child(5) > :nth-child(2) > :nth-child(1) > .form-grid-col-1 > app-select-option-field > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger')
            .click().type(dataPACS_008.Clg_Sys_ID_Code);
        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataPACS_008.Clg_Sys_ID_Code).click();

        cy.get('#mat-input-25').type(dataPACS_008.Member_ID);
        cy.get('#mat-input-26').type(dataPACS_008.LEI);



        cy.get(':nth-child(5) > :nth-child(2) > :nth-child(2) > .form-grid-col-1 > app-select-option-field > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger')
            .click().type(dataPACS_008.Clg_Sys_ID_Code);
        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataPACS_008.Clg_Sys_ID_Code).click();

        cy.get('#mat-input-28').type(dataPACS_008.Member_ID);
        cy.get('#mat-input-29').type(dataPACS_008.LEI);
        cy.get('#mat-input-30').type(dataPACS_008.Debtor_Name);
        cy.get(':nth-child(7) > :nth-child(2) > :nth-child(1) > .form-grid-col-1 > app-select-option-field > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger')
            .click().type(dataPACS_008.Country);
        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataPACS_008.Country).click();
        cy.get(':nth-child(2) > :nth-child(1) > .form-grid-col-1 > :nth-child(4) > app-expansion-sub-panel-header > .expansion-sub-header > .relative > :nth-child(2) > .mat-icon')
            .click(); // Click to expand Remittance Information section
        cy.get('#mat-input-61').type(dataPACS_008.Address_Line1);
        cy.get('#mat-input-62').type(dataPACS_008.Address_Line2);
        cy.get('#mat-input-32').type(dataPACS_008.LEI);

        cy.get(':nth-child(7) > :nth-child(2) > :nth-child(3) > .form-grid-col-1 > app-select-option-field > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger')
            .click().type(dataPACS_008.Clg_Sys_ID_Code);
        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataPACS_008.Clg_Sys_ID_Code).click();

        cy.get('#mat-input-33').type(dataPACS_008.Member_ID);
        //cy.get('#mat-input-34').type(dataPACS_008.Name); 

        cy.get('#mat-input-35').dblclick(); // Message Identification
        cy.get(':nth-child(1) > .flex > .relative > .w-full').type('bd');
        cy.get(':nth-child(1) > .flex > lds-btn > .inline-flex').click();
        //cy.get(':nth-child(1) > .flex > lds-btn > .inline-flex').click(); // Generate
        cy.get(':nth-child(1) > :nth-child(4) > .text-green-600').click(); // Copy
        cy.get('#mat-input-39').type(dataPACS_008.Creditor_Name);

        cy.get(':nth-child(2) > :nth-child(3) > :nth-child(2) > :nth-child(4) > app-expansion-sub-panel-header > .expansion-sub-header > .relative > :nth-child(2) > .mat-icon')
            .click(); // Click to expand Remittance Information section
        cy.get('#mat-input-76').type(dataPACS_008.Address_Line1);
        cy.get('#mat-input-77').type(dataPACS_008.Address_Line2);

        cy.get('#mat-input-42').type(dataPACS_008.Type);


        // Get today's date in correct format (e.g. 09 Oct, 2025)
        const today = new Date();
        const formattedDate = today.toLocaleString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        }).replace(',', '');

        // Example result: "09 Oct 2025"

        cy.get('#mat-input-43') // change selector as needed
            .clear()
            .type(formattedDate); // or .invoke('val', formattedDate)

        cy.get('[formarrayname="dtlsForm"] > .form-grid-col-1 > :nth-child(3) > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger')
            .click().type(dataPACS_008.Country);
        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataPACS_008.Country).click();
        cy.get('#mat-input-44').type(dataPACS_008.Code);
        cy.get(':nth-child(5) > .input-container-horizontal > .select-wrapper > .mat-mdc-tooltip-trigger')
            .click().type(dataPACS_008.Currency);
        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataPACS_008.Currency)
            .click();
        cy.get('#mat-input-45').type(dataPACS_008.Amount);

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
} export default PACS_008_FIToFICustomerCreditTransferPage;