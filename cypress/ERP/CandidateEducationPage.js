
class CandidateEducationPage {

  CandidateEducation() {
    
    
  
    //Education level
    cy.get('common-input-field[controlname="levelOfEducation"] input[type="text"]')
      .clear()
      .type('Masters of Science');

    //examDegreeTitle
    cy.get('common-input-field[controlname="examDegreeTitle"] input')
      .should('be.visible')
      .type('Bachelor of Science'); // Enter a valid degree title

    //Concentration/Group/Major *
    cy.get('common-input-field[controlname="concentrationGroupMajor"] input', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .clear()
      .type('Computer Science')
      .should('have.value', 'Computer Science');
    //instituteName
    cy.get('common-input-field[controlname="instituteName"] input')
      .should('be.visible')
      .type('University of Dhaka'); // or any valid test value

    //result
    cy.get('common-input-field[controlname="result"] input', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type('First Division')
      .should('have.value', 'First Division');

    //Obtained CGPA
    cy.get('common-input-field[controlname="obtainedCgpa"] input', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .clear()
      .type('3')
      .should('have.value', '3');
    //Scale Of GPA
    cy.get('common-input-field[controlname="scaleOfGpa"] input', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .type('4')
      .should('have.value', '4');
    //Duration
    cy.contains('span', 'Duration')     // "Duration" লেখা খোঁজে
      .parent()                         // তার parent এ যায়
      .find('input')                    // সেই parent এর ভেতর input খোঁজে
      .type('5');                       // ডেটা টাইপ করে

    //passing year
    cy.contains('span', 'Passing Year') // 'Passing Year' খুঁজে বের করে
      .parent()                         // তার parent div ধরবে
      .find('input')                    // input খুঁজবে
      .type('2001')                     // টাইপ করবে
      .should('have.value', '2001');    // ভ্যালু টেস্ট করবে


    //Remarks *
    cy.contains('span', 'Remarks')
      .parent()
      .find('input')
      .type('This is a test remark.')
      .should('have.value', 'This is a test remark.');

    //Latest degree certificate *
    cy.get('input[type="file"][accept="application/pdf"]', { timeout: 10000 })
      .should('exist')
      .attachFile('ceducertificate.pdf', { force: true });

    //   //Add
    cy.get('button[type="submit"] span.mdc-button__label')
      .contains('Add') // Capital A
      .click();

    //  Save & Next button 
    cy.get('button span:contains("Save & Next")')
      .closest('button')
      .click();

  }
}

export default CandidateEducationPage;

