class LonAccountInquary {

    LonBalInquary() {   
         //------use this block for dynamically use acc no. 
        cy.then(() => {
            const accountNumber = Cypress.env('accountNumber');
            //const accountNumber = Cypress.env('6699251000013');
            //const productCode = accountNumber.substring(4, 7);  
            cy.log('Account Number:', accountNumber); // Log the account number for debugging
           cy.get('#ctl00_contPlcHdrMasterHolder_LstxtAccountNo')
                .clear() // Optional: clear input first
                .type(accountNumber).type('{enter}');

        });

     }
}

export default LonAccountInquary;
