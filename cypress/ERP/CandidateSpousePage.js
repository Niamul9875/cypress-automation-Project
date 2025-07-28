
class CandidateSpousePage {

  CandidateSpouse() {

    // Updated selector to handle Angular custom component
    cy.get('common-input-field[controlname="name"] input', { timeout: 10000 })
      .should('exist')
      .focus()
      .blur();

    // Max length test
    cy.get('common-input-field[controlname="name"] input')
      .clear()
      .type('A very long name that exceeds limit');

    cy.contains('Input maximum 20 characters').should('be.visible');

    // Valid input
    cy.get('common-input-field[controlname="name"] input')
      .clear()
      .type('John');

    cy.contains('Name is required').should('not.exist');
    cy.contains('Input maximum 20 characters').should('not.exist');

    //occupation
    cy.get('common-input-field[controlname="occupation"] input', { timeout: 10000 })
      .should('exist')
      .clear()
      .type('Software Engineer');

    //  Gender radio select validation
    cy.get('input[type="radio"][value="MALE"]').check({ force: true });
    cy.get('input[type="radio"][value="MALE"]').should('be.checked');
    //  Blood Group dropdown থেকে একটি মান select
    cy.get('common-mat-select-search[controlname="bloodGroup"] mat-select')
      .should('exist')
      .click({ force: true });
    cy.get('mat-option').contains('A+').click();
    cy.get('common-mat-select-search[controlname="bloodGroup"] .mat-mdc-select-value-text span')
      .should('contain.text', 'A+');

    cy.contains('span', 'Mobile No')
      .parent()
      .find('input')
      .clear()
      .type('01712345678');
    cy.contains('Mobile number is required').should('not.exist');
    cy.contains('Valid Bangladeshi mobile number').should('not.exist');


    //email

    cy.get('common-input-field[controlname="email"] input')
      .clear()
      .type('user@example.com')
      .should('have.value', 'user@example.com');


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


    // Passport No ফিল্ডে টাইপ করা
    cy.get('common-input-field[controlname="passportNo"] input[matinput]')
      .should('be.visible')
      .clear()
      .type('AB1234567')
      .blur();

    // Validation message না থাকার চেক
    cy.contains('Max length 15').should('not.exist');


    //passportIssueDate
    cy.get('common-date-picker[controlname="passportIssueDate"] input')
      .clear()
      .type('23-07-2025')   // যেহেতু placeholder এ DD-MM-YYYY দেওয়া আছে, তাই তার ফরম্যাটে দিবে
      .blur();
    cy.contains('Date is required').should('not.exist');  // বা তোমার ভ্যালিডেশন মেসেজ অনুযায়ী

    //passportExpiryDate
    cy.get('common-date-picker[controlname="passportExpiryDate"] input')
      .clear()
      .type('24-07-2030')  // DD-MM-YYYY ফরম্যাটে তারিখ দিন
      .blur();
    cy.contains('Expiry date must be after issue date').should('not.exist');


    // Checkbox টা চেক করা dualCitizenshipStatus
    cy.get('mat-checkbox[formcontrolname="dualCitizenshipStatus"] input[type="checkbox"]')
      .check({ force: true });

    // PR Status চেক করতে
    cy.get('mat-checkbox[formcontrolname="prStatus"] input[type="checkbox"]')
      .check({ force: true });

    //spouseMarriageDate
    cy.get('common-date-picker[controlname="spouseMarriageDate"] input.mat-datepicker-input')
      .clear()
      .type('23-07-2025')  // যেকোনো প্রয়োজনীয় তারিখ দিন, অবশ্যই DD-MM-YYYY ফরম্যাটে
      .blur();  // blur দিয়ে ফোকাস সরিয়ে দিন যাতে ভ্যালিডেশন ট্রিগার হয়

    // Step 1: Trigger select dropdown (Country)
    cy.get('common-mat-select-search[controlname="permanentCountry"] mat-select')
      .should('be.visible')
      .click({ force: true });
    // Step 2: Wait for and select the option "Bangladesh"
    cy.get('mat-option')
      .contains('Bangladesh')
      .should('be.visible')
      .click({ force: true });
    // Step 3: Verify selection
    cy.get('common-mat-select-search[controlname="permanentCountry"] .mat-mdc-select-value-text')
      .should('contain.text', 'Bangladesh');


    // Step 1: Click on the Division dropdown
    cy.get('common-mat-select-search[controlname="permanentDivision"] mat-select') // adjust controlname if different
      .should('be.visible')
      .click({ force: true });
    // Step 2: Wait and click the desired division
    cy.get('mat-option')
      .contains('Dhaka') // or any division name like 'Chattogram'
      .should('be.visible')
      .click({ force: true });
    // Step 3: Confirm that the correct division is selected
    cy.get('common-mat-select-search[controlname="permanentDivision"] .mat-mdc-select-value-text')
      .should('contain.text', 'Dhaka');
    //District
    // Step 1: Click on the District dropdown using controlname or placeholder
    cy.get('common-mat-select-search[controlname="permanentDivision"] mat-select')
      .should('be.visible')
      .click({ force: true });
    // Optional: wait for options to appear (for safety)
    cy.wait(500);
    // Step 2: Select specific district (e.g., Dhaka)
    cy.get('mat-option')
      .contains('Dhaka')
      .should('be.visible')
      .click({ force: true });
    // Step 3: Verify that 'Dhaka' is selected
    cy.get('common-mat-select-search[controlname="permanentDivision"] .mat-mdc-select-value-text')
      .should('contain.text', 'Dhaka');

       //District
    // Step 1: Click on the District dropdown using controlname or placeholder
    cy.get('common-mat-select-search[controlname="permanentDistrict"] mat-select')
      .should('be.visible')
      .click({ force: true });
    // Optional: wait for options to appear (for safety)
    cy.wait(500);
    // Step 2: Select specific district (e.g., Dhaka)
    cy.get('mat-option')
      .contains('Dhaka')
      .should('be.visible')
      .click({ force: true });
    // Step 3: Verify that 'Dhaka' is selected
    cy.get('common-mat-select-search[controlname="permanentDistrict"] .mat-mdc-select-value-text')
      .should('contain.text', 'Dhaka');
    // Dropdown খুলা
    cy.get('common-mat-select-search[controlname="permanentDistrict"] mat-select')
      .should('be.visible')
      .click({ force: true });
    // Dropdown option এ Dhaka সিলেক্ট করা
    cy.get('mat-option', { timeout: 10000 })
      .contains('Dhaka')
      .should('be.visible')
      .click({ force: true });

    //Upazila
    // Wait for Upazila options to load — better than hard wait
    cy.get('[controlname="permanentUpazila"] mat-select').click();
    cy.get('mat-option').should('contain.text', 'Rupganj');
    cy.get('mat-option').contains('Rupganj').click();

    //PostCode
    cy.get('[controlname="permanentPostCode"] input')
      .clear()
      .type('1234') // valid input
      .blur()
      .should('have.value', '1234');

    //Address 
    // Type address into the text area
    cy.get('[controlname="address"] textarea')
      .clear()
      .type('1234 Gulshan Avenue, Dhaka')
      .should('be.visible');
    // Verify error is not visible (robust)
    cy.get('[controlname="address"] .text-red-600')
      .should('not.be.visible');

cy.get('button span:contains("Save & Next")')
      .closest('button')
      .click();


  }
}

export default CandidateSpousePage;

