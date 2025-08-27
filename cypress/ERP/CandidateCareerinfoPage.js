
class CandidateCareerinfoPage {


  CandidateCareerinfo() {


    cy.visit('http://192.168.10.36:4600/candidate-portal/career');

    cy.get('common-input-field[controlname="organization"] input[type="text"]')
      .clear()
      .type('Leads Corporation BD');


    cy.get('common-input-field[controlname="divisionDepartmentUnit"] input')
      .should('be.visible')
      .type(' CSE');

    cy.contains('span', 'Employment Period')
      .parent()
      .find('input')
      .type('Jan 2020 - Jul 2025');

    cy.contains('span', 'Responsibilities')
      .parent()
      .find('textarea')
      .type('Handle team coordination, client meetings, and daily reporting.');

    cy.get('common-input-textarea[controlname="areaOfExpertise"] textarea')
      .should('be.visible')
      .clear()
      .type('Automation Testing, Cypress, JavaScript');

    cy.get('common-input-field[controlname="certification"] input')
      .should('be.visible')

      .type('University of Dhaka');
    cy.get('common-input-field[controlname="institute"] input')
      .should('be.visible')
      .type('University of Dhaka');

    cy.contains('span', 'Location')
      .parent()
      .find('input')
      .type('Dhaka, Bangladesh');

    cy.contains('span', 'Duration')
      .parent()
      .find('input')
      .type('5');
    //result
    cy.get('common-input-field[controlname="resultGrade"] input', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type('First Division')
      .should('have.value', 'First Division');
    cy.get('common-input-textarea[controlname="remarks"] textarea')
      .should('be.visible')
      .clear()
      .type('Candidate has relevant experience and strong communication skills.');
    //Add
    cy.get('button[type="submit"] span.mdc-button__label')
      .contains('Add')
      .click();


    cy.contains('span', 'Present Salary')
      .parent()
      .find('input[type="number"]')
      .type('55000');

    cy.contains('Expected Salary')        // Finds the label
      .parent()                           // Goes to the parent div
      .find('input[type="number"]')       // Finds the input inside that label container
      .should('be.visible')               // Ensures it’s rendered
      .clear()
      .type('65000')                      // Types the expected salary
      .should('have.value', '65000');     // Asserts value is correctly set

    cy.contains('Present Designation')        // Locate the label
      .parent()                               // Go to the parent container
      .find('input[type="text"]')             // Find the actual input field
      .should('be.visible')                   // Ensure it's visible
      .clear()
      .type('Senior Software Engineer')       // Type a valid value
      .should('have.value', 'Senior Software Engineer');


    cy.get('common-input-field[controlname="expectedDesignation"]')
      .find('input')   // find the input inside this component
      .clear()
      .type('Senior Developer');

    //---------------------File Upload--------------------------

    cy.get('input[type="file"]') // or use a more specific selector like '#file-upload'
      .selectFile('cypress/fixtures/document.pdf', { force: true });



    cy.get('button span:contains("Save & Next")')
      .closest('button')
      .click({ force: true });





  }
}

export default CandidateCareerinfoPage;

