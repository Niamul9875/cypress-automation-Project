
class CandidateInfoPage {

  CandidateInfo() {

   cy.visit('http://192.168.10.36:4600/candidate-portal/info');

    // Fill Full Name (English)
    cy.get('common-input-field[controlname="fullNameEnglish"] input')
      .should('be.visible')
      .clear()
      .type('John Doe')  // অবশ্যই টাইপ করো, কারণ input required
    // Wait for validation error to disappear
    cy.get('common-input-field[controlname="fullNameEnglish"] mat-error')
      .should('not.exist');



    // Fill Full Name (Bangla)
    cy.get('common-input-field[controlname="fullNameBangla"] input')
      .should('be.visible')
      .clear()
      .type('জন ডো'); // Bangla name type করো

    // Wait for validation error to disappear
    cy.get('common-input-field[controlname="fullNameBangla"] mat-error')
      .should('not.exist');

    cy.get('#mat-radio-0-input').check({ force: true });

    // Fill Father's Name (English)
    cy.get('common-input-field[controlname="fathersName"] input')
      .should('be.visible')
      .clear()
      .type('Mohammad Rahim');

    // যদি error message থাকত, তাহলে এইভাবে check করা যেত
    cy.get('common-input-field[controlname="fathersName"] mat-error')
      .should('not.exist');


    // Fill Father's Contact Number
    cy.get('common-input-field[controlname="fathersContactNumber"] input')
      .should('be.visible')
      .clear()
      .type('01711223344');

    // Ensure no validation error appears
    cy.get('common-input-field[controlname="fathersContactNumber"] mat-error')
      .should('not.exist');


    // Fill Mother's Name (English)
    cy.get('common-input-field[controlname="mothersName"] input')
      .should('be.visible')
      .clear()
      .type('Shahana Begum', { force: true });

    // Ensure no error appears
    cy.get('common-input-field[controlname="mothersName"] mat-error')
      .should('not.exist');


    cy.get('common-input-field[controlname="mothersContactNumber"] input')
      .should('be.visible')
      .clear()
      .type('01712345678', { force: true })  // Valid mobile number
      .should('have.value', '01712345678', { force: true });

    // ভ্যালিডেশন এরর না থাকার নিশ্চিতি
    cy.get('common-input-field[controlname="mothersContactNumber"] mat-error')
      .should('not.exist')


    const imagePath = 'sample.jpg';
    cy.get('input[type="file"]').attachFile(imagePath);
    cy.wait(1000);

    // Check by preview type
    cy.get('img').each(($img) => {
      const src = $img.attr('src');
      if (src && src.startsWith('data:image')) {
        expect(src).to.include('data:image');
      }
    });

    cy.get('#mat-input-6')
      .clear()
      .type('17-07-2015', { force: true })
      .should('have.value', '17-07-2015');



    // Open dropdown
    cy.get('common-mat-select[controlname="religion"] mat-select').click({ force: true });

    // Wait for options to be visible
    cy.get('div[role="listbox"] mat-option', { timeout: 10000 }).should('have.length.greaterThan', 0);

    // Log all options text for debugging
    cy.get('div[role="listbox"] mat-option').then($options => {
      const optionTexts = [...$options].map(o => o.innerText.trim());
      cy.log('Options:', optionTexts);
      console.log('Options:', optionTexts);
    });

    // Select option 'Islam' carefully
    cy.get('div[role="listbox"] mat-option').filter((index, el) => el.innerText.trim() === 'Islam').click({ force: true });

    // Verify selection
    cy.get('common-mat-select[controlname="religion"] mat-select .mat-mdc-select-value-text')
      .should('contain.text', 'Islam');
      
cy.get('common-input-field[controlname="nationalIdNo"] input')
      .clear() // Optional: if you want to clear previous text
      .type('1234567890'); // Your NID value

    cy.get('common-input-field[controlname="nationality"] input')
      .clear()
      .type('Bangladeshi');


    // Step 1: Type a valid date in DD-MM-YYYY format
    cy.get('common-date-picker[controlname="passportIssueDate"] input')
      .should('be.visible')
      .clear()
      .type('21-07-2023'); // adjust the date format as per your app requirement



    cy.get('common-input-field[controlname="passportNo"] input')
      .scrollIntoView()
      .clear({ force: true })
      .type('A1234567', { force: true });

    // Step 2: Verify the input value (optional)
    cy.get('common-date-picker[controlname="passportIssueDate"] input')
      .should('have.value', '21-07-2023', { force: true });


    cy.get('common-date-picker[controlname="passportExpiryDate"] input')
      .should('be.visible')
      .clear()
      .type('29-07-2030', { force: true }); // DD-MM-YYYY format based on placeholder
// Just upload the NID image
    cy.get('input[type="file"][accept="image/*"]').eq(1).attachFile('sample2.jpg');

    // Manually trigger change for Angular to detect
    cy.get('input[type="file"][accept="image/*"]').eq(1).trigger('change', { force: true });

    // Wait for preview to appear
    cy.get('div.max-w-xs img', { timeout: 10000 })
      .should('be.visible')
      .and(($img) => {
        const src = $img.attr('src');
        expect(src).to.include('data:image');
      });

    ///Email
    cy.get('common-input-field[controlname="personalEmail"] input')
      .clear()
      .type('user@example.com');
    // Step 1: Type a valid Bangladeshi mobile number
    cy.get('common-input-field[controlname="personalMobileNo"] input')
      .clear({ force: true })  // Optional: Clear field if needed
      .type('01712345678', { force: true }); // Use a valid 11-digit BD number
    // Step 2: Assert the value
    cy.get('common-input-field[controlname="personalMobileNo"] input')
      .should('have.value', '01712345678');



    cy.get('common-input-field[controlname="officialMobileNo"] input')
      .clear()
      .type('01712345678');  // valid Bangladesh mobile number


    cy.get('common-input-field[controlname="mailingAddress"] input')
      .should('be.visible')
      .should('not.be.disabled')
      .clear()
      .type('123 Example Street, Dhaka')
      .should('have.value', '123 Example Street, Dhaka');

    // Step 1: Open dropdown for Blood Group
    cy.get('common-mat-select-search[controlname="bloodGroup"] mat-select')
      .click({ force: true });

    // Step 2: Wait and select 'A+'
    cy.get('mat-option').should('be.visible');
    cy.get('mat-option').contains('A+').click({ force: true });

    // Step 3: Confirm selection
    cy.get('common-mat-select-search[controlname="bloodGroup"] .mat-mdc-select-value-text span')
      .should('contain.text', 'A+');


    cy.get('common-input-field[controlname="tinNumber"] input')
      .should('be.visible')
      .clear()
      .type('123456789');  // ৯ ডিজিটের valid TIN নম্বর দাও




    // Step 1: Trigger select dropdown (Country)
    cy.get('common-mat-select-search[controlname="presentCountry"] mat-select')
      .should('be.visible')
      .click({ force: true });

    // Step 2: Wait for and select the option "Bangladesh"
    cy.get('mat-option')
      .contains('Bangladesh')
      .should('be.visible')
      .click({ force: true });

    // Step 3: Verify selection
    cy.get('common-mat-select-search[controlname="presentCountry"] .mat-mdc-select-value-text')
      .should('contain.text', 'Bangladesh');




    //Division
    // Step 1: Click on the Division dropdown
    cy.get('common-mat-select-search[controlname="presentDivision"] mat-select') // adjust controlname if different
      .should('be.visible')
      .click({ force: true });

    // Step 2: Wait and click the desired division
    cy.get('mat-option')
      .contains('Dhaka') // or any division name like 'Chattogram'
      .should('be.visible')
      .click({ force: true });

    // Step 3: Confirm that the correct division is selected
    cy.get('common-mat-select-search[controlname="presentDivision"] .mat-mdc-select-value-text')
      .should('contain.text', 'Dhaka');
    //District

    // Step 1: Click on the District dropdown using controlname or placeholder
    cy.get('common-mat-select-search[controlname="presentDistrict"] mat-select')
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
    cy.get('common-mat-select-search[controlname="presentDistrict"] .mat-mdc-select-value-text')
      .should('contain.text', 'Dhaka');

    //Upazila
    // Step 1: Open Present Upazila dropdown safely
    cy.get('common-mat-select-search[controlname="presentUpazila"] mat-select')
      .scrollIntoView()
      .click({ force: true });
    // Step 2: Wait for mat-option to load and select "Savar"
    cy.get('mat-option')
      .contains('Dhamrai')
      .should('be.visible')
      .click({ force: true });

    //PostCode
    cy.get('[controlname="presentPostCode"] input')
      .clear()
      .type('4321')
      .should('have.value', '4321');

    cy.contains('Post code is required').should('not.exist');
    cy.contains('Input maximum 4 digits').should('not.exist');

    //Address
    cy.get('[controlname="presentAddress"] textarea')
      .clear()
      .type('123 Main Street, Dhaka')
      .should('have.value', '123 Main Street, Dhaka');
    cy.contains('Address is required').should('not.be.visible');
    cy.contains('Input maximum 255 characters').should('not.exist');

    cy.contains('Same As Present Address').click();
    cy.get('#sameAsPresentAddress').should('be.checked');

    cy.get('common-input-field[controlname="contactPerson"] input')
      .should('be.visible')
      .clear()
      .type('John Smith');

    cy.get('[controlname="contactPersonRelation"] input')
      .clear()
      .type('Brother')
      .should('have.value', 'Brother');

    cy.contains('Provide Relationship').should('not.exist');
    cy.contains('Input maximum 10 characters').should('not.exist');

    cy.get('[controlname="contactNo"] input')
      .clear()
      .type('01712345678') // example valid mobile number
      .should('have.value', '01712345678');

    cy.contains('Provide Contact Number').should('not.exist');
    cy.contains('Provide valid mobile number').should('not.exist');




    // 10-digit valid NID
    cy.get('[controlname="contactNidNo"] input')
      .clear()
      .type('1234567890')
      .should('have.value', '1234567890');
    // Optionally check no error shown
    cy.contains('Contact Nid No is required').should('not.exist');
    cy.contains('NID must be 10, 13, or 17 digits').should('not.exist');


    cy.get('[controlname="contactEmail"] input')
      .clear()
      .type('user@example.com')
      .should('have.value', 'user@example.com');
    cy.contains('Required Provide Valid Email Address').should('not.exist');
    cy.contains('The email format is incorrect').should('not.exist');
    cy.contains('Input maximum 30 characters').should('not.exist');


    // Step 1: Trigger select dropdown (Country)
    cy.get('common-mat-select-search[controlname="contactCountry"] mat-select')
      .should('be.visible')
      .click({ force: true });

    // Step 2: Wait for and select the option "Bangladesh"
    cy.get('mat-option')
      .contains('Bangladesh')
      .should('be.visible')
      .click({ force: true });

    // Step 3: Verify selection
    cy.get('common-mat-select-search[controlname="contactCountry"] .mat-mdc-select-value-text')
      .should('contain.text', 'Bangladesh');

    //District
    // Step 1: Click on the District dropdown using controlname or placeholder
    cy.get('common-mat-select-search[controlname="contactDistrict"] mat-select')
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
    cy.get('common-mat-select-search[controlname="contactDistrict"] .mat-mdc-select-value-text')
      .should('contain.text', 'Dhaka');
    // Dropdown খুলা
    cy.get('common-mat-select-search[controlname="contactDivision"] mat-select')
      .should('be.visible')
      .click({ force: true });
    // Dropdown option এ Dhaka সিলেক্ট করা
    cy.get('mat-option', { timeout: 10000 })
      .contains('Dhaka')
      .should('be.visible')
      .click({ force: true });

    // সিলেক্ট করা ভ্যালু ভেরিফাই করা
    cy.get('common-mat-select-search[controlname="contactDivision"] mat-select .mat-mdc-select-value')
      .should('contain.text', 'Dhaka');


    //Upazila
    // Wait for Upazila options to load — better than hard wait
    cy.get('[controlname="contactUpazila"] mat-select').click();
    cy.get('mat-option').should('contain.text', 'Rupganj');
    cy.get('mat-option').contains('Rupganj').click();


    //PostCode
    cy.get('[controlname="contactPostCode"] input')
      .clear()
      .type('1234') // valid input
      .blur()
      .should('have.value', '1234');

    //Address 
    // Type address into the text area
    cy.get('[controlname="contactAddress"] textarea')
      .clear()
      .type('1234 Gulshan Avenue, Dhaka')
      .should('be.visible');

    // Verify error is not visible (robust)
    cy.get('[controlname="contactAddress"] .text-red-600')
      .should('not.be.visible');







    // // Click Save button
    // cy.contains('button', 'Save').click({ force: true });

    cy.get('button span:contains("Save & Next")')
      .closest('button')
      .click();


  }
}

export default CandidateInfoPage;

