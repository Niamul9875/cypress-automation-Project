const { readExcelData } = require('../../support/readExcel.js'); // Node-style import
import Components from '../../CustomComponents/AllComponentsPage'; // ES Module import
  it('Step 1: Custom Components', function () {
        const components = new Components(); 

        // //Login with valid Maker User ID
          // //Login with valid Maker User ID
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'Login'
        }).then((dataLogin) => {
            Cypress.env('excelData', dataLogin[5]); // Use first row
            components.customComponents();       
        });
           

       
     });