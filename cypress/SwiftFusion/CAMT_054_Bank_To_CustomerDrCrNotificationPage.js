class CAMT_054_Bank_To_CustomerDrCrNotificationPage {
    CAMT_054() {
        const dataCAMT_054 = Cypress.env('excelData');
        // Convert Excel date format to required format
        // Convert the Excel date string to a Date object
        // 🔹 Helper: Convert Excel date (string or number) to JS Date safely
        function parseExcelDate(excelDate) {
            // If it's a number (Excel serial)
            if (!isNaN(excelDate)) {
                // Excel counts from 1900-01-01
                return new Date((excelDate - 25569) * 86400 * 1000);
            }

            // If it's a string like "7/9/2022" or "2022-09-07"
            const parts = excelDate.split(/[\/\-]/);
            let day, month, year;

            if (parts[0].length === 4) {
                // Format: YYYY/MM/DD
                [year, month, day] = parts;
            } else {
                // Format: DD/MM/YYYY or M/D/YYYY
                [day, month, year] = parts;
            }

            return new Date(`${year}-${month}-${day}`);
        }

        // 🔹 Then use:
        const startDate = parseExcelDate(dataCAMT_054.Start_Date);
        const endDate = parseExcelDate(dataCAMT_054.End_Date);

        // 🔹 Format: dd/mm/yyyy
        const formatDate = (date) => {
            const d = String(date.getDate()).padStart(2, '0');
            const m = String(date.getMonth() + 1).padStart(2, '0');
            const y = date.getFullYear();
            return `${d}/${m}/${y}`;
        };
        const today = new Date();
        const formattedDate = today.toLocaleString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        }).replace(',', '');
        const formattedStartDate = formatDate(startDate);
        const formattedEndDate = formatDate(endDate);
        const todayASEndDate = formatDate(today);

        // 🔹 Type into inputs
        cy.get('[controlname="startDate"]')
            .clear()
            .type(formattedStartDate, { force: true });

        // cy.get('#mat-input-1')
        //     .clear()
        //     .type(formattedEndDate, { force: true });//custom date
        cy.get('[controlname="endDate"]')
            .clear()
            .type(todayASEndDate, { force: true });//sysdate


        cy.get('.select-wrapper > .mat-mdc-tooltip-trigger').click().type(dataCAMT_054.Branch);
        cy.get('.dropdown-menu > :nth-child(1)', { timeout: 10000 })
            .contains(dataCAMT_054.Branch)
            .click();
        cy.get('[controlname="accountNo"]').clear().type(dataCAMT_054.Account_No);
        cy.get('.inline-flex').click(); // Click on Submit button

        cy.get('[controlname="fromBicfi"]').clear().type('bd').dblclick();
        cy.get(':nth-child(2) > :nth-child(4) > .text-green-600').click(); // Copy

          cy.get('[controlname="toBicfi"]').clear().type('bd').dblclick();
        cy.get(':nth-child(1) > :nth-child(4) > .text-green-600').click(); // Copy


        cy.get('app-save > .save-btn')
            .contains('Save')
            .click();

    }
} export default CAMT_054_Bank_To_CustomerDrCrNotificationPage;