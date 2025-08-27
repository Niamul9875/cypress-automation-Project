
class CandidateTrainingPage {

  CandidateTraining() {

     cy.visit('http://192.168.10.36:4600/candidate-portal/training');
    
    cy.get('common-input-field[controlname="trainingTitle"] input')
      .should('be.visible')
      .type('java se foundation');

    cy.get('common-input-field[controlname="location"]')
      .find('input[matinput]')
      .clear()
      .type('Dhaka')
      .should('have.value', 'Dhaka');

    cy.contains('span', ' Year')
      .parent()
      .find('input')
      .type('2001')
      .should('have.value', '2001');
    cy.get('common-input-field[controlname="institute"] input')
      .should('be.visible')
      .type('University of Dhaka'); // or any valid test value
    cy.get('common-input-field[controlname="gradeOrResult"] input', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type('First Division')
      .should('have.value', 'First Division');

    cy.contains('span', 'Duration')
      .parent()
      .find('input')
      .type('5');

    cy.contains('span', 'Remarks')
      .parent()
      .find('input')
      .type('This is a test remark.')
      .should('have.value', 'This is a test remark.');
    //Add
    cy.get('button[type="submit"] span.mdc-button__label')
      .contains('Add')
      .click();

    //  Save & Next button 
    cy.get('button span:contains("Save & Next")')
      .closest('button')
      .click();

  }
}

export default CandidateTrainingPage;

