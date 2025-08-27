
class CandidateReferencePage {

  CandidateReference() {

    // cy.visit('http://192.168.10.36:4600/candidate-portal/reference');

    cy.get('common-input-field[controlname="name"] input')
      .should('be.visible')
      .type('Elise smith');

    cy.get('common-input-field[controlname="designation"]')
      .find('input[matinput]')
      .clear()
      .type('Softwere Engineer')
    cy.get('common-input-field[controlname="organization"] input')
      .should('be.visible')
      .type(' Dhaka'); // or any valid test value

    cy.get('common-input-field[controlname="email"]', { timeout: 10000 })  // ← correct controlname here
      .find('input[matinput]')
      .should('exist')
      .clear()
      .type('user@example.com')
      .should('have.value', 'user@example.com');

    cy.get('common-input-field[controlname="mobile"] input')
      .clear({ force: true })  // Optional: Clear field if needed
      .type('01712345678', { force: true }); // Use a valid 11-digit BD number
    // Step 2: Assert the value
    cy.get('common-input-field[controlname="mobile"] input')
      .should('have.value', '01712345678');


    cy.get('common-input-field[controlname="officeAddress"] input', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type('22,rangkinf street.');
    cy.get('common-input-field[controlname="residenceAddress"] input', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type('22,rangkinf street.');

    cy.get('common-input-field[controlname="skillDescription"] input', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type('JAVA');

    cy.get('common-input-field[controlname="hobbies"] input', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type('Nail Art');



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

export default CandidateReferencePage;

