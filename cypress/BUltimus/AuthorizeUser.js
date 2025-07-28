
class authuser {

  uiauth() {

    //const dataCIFInfo = Cypress.env('excelData');   //define object


    //.get('#ctl00_contPlcHdrMasterHolder_LstxtIndividualSalutation').type(dataCIFInfo.Title);
 
   // cy.wait(4000)
  

 //cy.get('.lspagetitle')
 // .should('be.visible')
  //.and('include.text', 'Security (NFT) Authorization');

   // cy.get('#Application').select('Dhanmondi Branch (1007)', { force: true });
    //cy.get(':nth-child(8) > .form-control').select('Dhanmondi Branch (1007)', { force: true });
        
cy.wait(4000)
    cy.get('.form-group > div > .form-control').select('0954 - Define User Profiles', { force: true })
   

    //User Created successfully. Input Password has been set as user Password. User profile created without profile picture.


    










  }
}

export default authuser;