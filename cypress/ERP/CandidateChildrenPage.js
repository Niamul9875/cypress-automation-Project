
class CandidateChildrenPage {

  CandidateChildren () {

    // Updated selector to handle Angular custom component
    cy.get('common-input-field[controlname="name"] input', { timeout: 10000 })
      .should('exist')
      .focus()
      .blur();

// Valid input
    cy.get('common-input-field[controlname="name"] input')
      .clear()
      .type('John');
cy.contains('Name is required').should('not.exist');
    cy.contains('Input maximum 20 characters').should('not.exist');

//  Blood Group dropdown থেকে একটি মান select
    cy.get('common-mat-select-search[controlname="bloodGroup"] mat-select')
      .should('exist')
      .click({ force: true });
    cy.get('mat-option').contains('A+').click();
    cy.get('common-mat-select-search[controlname="bloodGroup"] .mat-mdc-select-value-text span')
      .should('contain.text', 'A+');



    

    //  Gender radio select validation
    cy.get('input[type="radio"][value="MALE"]').check({ force: true });
    cy.get('input[type="radio"][value="MALE"]').should('be.checked');

    //DOB
    // Step 1: Date picker input-এ টাইপ করা
    cy.get('common-date-picker[controlname="dateOfBirth"] input[matinput]')
      .should('be.visible')
      .clear()
      .type('10-10-1995')
      .blur();
    // Step 2: Validation error না থাকার নিশ্চয়তা
    cy.contains('Date of Birth is required').should('not.exist');
    cy.contains('Date of Birth is required').should('not.exist');

//nationality
    cy.get('common-input-field[controlname="nationality"] input')
      .clear()
      .type('Bangladeshi')
      .blur();
    //validation
    cy.contains('Input maximum 20 characters').should('not.exist');

    // NID Field Check
    cy.get('common-input-field[controlname="nationalIdNo"] input')
      .clear()
      .type('1234567890')
      .blur();  // ফোকাস সরানো হলো, ভ্যালিডেশন ট্রিগার হবে

    cy.contains('National ID is required').should('not.exist');
    cy.contains('NID must be 10, 13, or 17 digits').should('not.exist');

    //Address 
    // Type address into the text area
    cy.get('[controlname="address"] textarea')
      .clear()
      .type('1234 Gulshan Avenue, Dhaka')
      .should('be.visible');
    // Verify error is not visible (robust)
    cy.get('[controlname="address"] .text-red-600')
      .should('not.be.visible');


      //occupation
    cy.get('common-input-field[controlname="occupation"] input', { timeout: 10000 })
      .should('exist')
      .clear()
      .type('Student');

    //religion

    // Step 1: ড্রপডাউন ওপেন করো
    cy.get('common-mat-select-search[controlname="religion"] mat-select')
      .click({ force: true });
    // Step 2: সার্চ ইনপুট visible হওয়ার জন্য wait করে তারপর টাইপ করো
    cy.get('div[role="listbox"] input[type="text"]', { timeout: 10000 }) // CDK overlay এর মধ্যে থাকে
      .should('be.visible')
      .type('Islam', { force: true }); // force দিলে hidden অবস্থায়ও type করবে
    // Step 3: 'Islam' অপশন সিলেক্ট করো
    cy.get('mat-option')
      .contains('Islam')
      .click({ force: true });
    // Step 4: নির্বাচন হয়েছে কিনা চেক করো
    cy.get('common-mat-select-search[controlname="religion"] mat-select .mat-mdc-select-value-text')
      .should('contain.text', 'Islam');

//Education level
  cy.get('common-input-field[controlname="educationalLevel"] input[type="text"]')
  .clear()
  .type('class one');

  cy.get('button[type="submit"] span.mdc-button__label').contains('add').click();
    
    
    


    
    

cy.get('button span:contains("Save & Next")')
      .closest('button')
      .click();


  }
}

export default CandidateChildrenPage;

