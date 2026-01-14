class RegisterTransactionAuthorizationPage {

    RegisterTransactionAuthorization() {

        const dataRegTransAuth = Cypress.env('excelData');
        cy.get('#ctl00_contPlcHdrMasterHolder_LsddlFunction').focus().select(dataRegTransAuth.auth_func, { force: true });

        cy.get('#ctl00_contPlcHdrMasterHolder_btnFind').focus().click({ force: true }); //search Auth Function
        cy.wait(3000);

        const guaranteeId = Cypress.env('guaranteeId')

        cy.get('table tr').each(($row) => {
            const cellText = $row.find('td').eq(3).text().trim()
            if (cellText === guaranteeId) {
                cy.wrap($row)
                    .find('input[type="checkbox"]')
                    .check({ force: true })

                return false // stop loop after match
            }
        })

        cy.wait(3000);
        cy.get('#ctl00_contPlcHdrMasterHolder_btnOk').click();//click exit btn


        cy.wait(3000);
        cy.get('.ui-state-focus > .ui-button-text').click();//click exit confirmation btn

        cy.wait(3000);
        cy.get('.ui-button-text').click();//click auth btn  

        // cy.wait(3000);
        // cy.get('.ui-button-text').click();   //click auth confirmation btn 


        // cy.wait(3000);
        // cy.get('#imggoHome').click();   //click home btn 
        // cy.wait(3000);
        // cy.get(':nth-child(2) > .ui-button-text').click();   //click home confirmation btn 


    }
}

export default RegisterTransactionAuthorizationPage;