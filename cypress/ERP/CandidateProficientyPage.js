
class CandidateProficientyPage {

 CandidateProficienty () {

   //cy.visit('http://192.168.10.36:4600/candidate-portal/language-proficiency');

  
    

cy.get('[controlname="language"] mat-select').click({ force: true });
            cy.get('mat-option').contains('Bengali').click({ force: true });
            //readingStrength
            cy.get('[controlname="readingStrength"] mat-select').click({ force: true });
            cy.get('mat-option').contains('High').click({ force: true });
            //writingStrength
            cy.get('[controlname="writingStrength"] mat-select').click({ force: true });
            cy.get('mat-option').contains('High').click({ force: true });
            //speakingStrength
            cy.get('[controlname="speakingStrength"] mat-select').click({ force: true });
            cy.get('mat-option').contains('High').click({ force: true });

              //Add
 //   //Add
    cy.get('span.mdc-button__label')
  .contains('add') // lowercase!
  .should('be.visible')
  .click({ force: true }); // if only span is clickable
    


    
    


    
    

cy.get('button span:contains("Save & Next")')
      .closest('button')
      .click();


  }
}

export default CandidateProficientyPage;

