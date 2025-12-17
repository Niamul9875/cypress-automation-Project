import React from 'react';
class CustomComponents {

    customComponents() {
        const dataLogin = Cypress.env('excelData');

        cy.visit(dataLogin.url); // Visit the URL

        cy.mount(
            <input type="text" title="Auto-generated based on currency and category" />
        )

        // hover simulate
        cy.get('input[placeholder="Enter Text Box"]').trigger('mouseover')

        // tooltip টেক্সট চেক
        cy.get('input[placeholder="Enter Text Box"]')
            .invoke('attr', 'title')
            .should('eq', 'Auto-generated based on currency and category')
        // cy.get('input[placeholder="Enter Text Box"]')
        //     .should('be.visible')
        //     .clear()
        //     .type('Md. Niamul Islam');
        // cy.contains('label', 'Text Box')
        //     .parent()
        //     .find('input')
        //     .should('be.visible')
        //     .clear()
        //     .type('Md. Niamul Islam');

        // Cypress.Commands.add('validateTextBox', (label, value) => {
        //     cy.contains('label', label)
        //         .parent()
        //         .find('input')
        //         .as('textBox');

        //     cy.get('@textBox')
        //         .clear()
        //         .type(value)
        //         .blur();

        //     cy.get('div.text-red-500.text-sm.mt-1').then(($msg) => {
        //         if ($msg.length) {
        //             const message = $msg.text().trim();

        //             if (message.includes('at least 3 characters')) {
        //                 cy.log(`❌ "${label}" failed: ${message}`);
        //             } else if (message.includes('cannot be more than 20 characters')) {
        //                 cy.log(`❌ "${label}" failed: ${message}`);
        //             } else {
        //                 cy.log(`⚠️ Unexpected validation message: ${message}`);
        //             }
        //         } else {
        //             cy.log(`✅ "${label}" accepted value: ${value}`);
        //         }
        //     });
        // });

        // describe('Text Box Validation', () => {
        //     it('should validate min, max, and valid values', () => {
        //         // Min length check
        //         cy.validateTextBox('Text Box', 'ab');

        //         // Max length check
        //         cy.validateTextBox('Text Box', 'abcdefghijklmnopqrstuvwxyz');

        //         // Valid input check
        //         cy.validateTextBox('Text Box', 'Md. Niamul Islam');
        //     });
        // });


    }
}

export default CustomComponents;
