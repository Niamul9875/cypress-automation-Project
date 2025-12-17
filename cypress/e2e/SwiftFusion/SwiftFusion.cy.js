const { readExcelData } = require('../../support/readExcel.js'); // Node-style import
//import LoginPage from '../../SwiftFusion/SFLoginPage'; // ES Module import
import LoginPage from '../../SwiftFusion/SFLoginPage'; // ES Module import
import MenuSearch from '../../SwiftFusion/SFMenuSearchPage'; // ES Module import
import PACS_009 from '../../SwiftFusion/PACS_009_FinancialInstitutionCreditTransferPage'; // ES Module import
import PACS_008 from '../../SwiftFusion/PACS_008_FIToFICustomerCreditTransferPage'; // ES Module import
import CAMT_054 from '../../SwiftFusion/CAMT_054_Bank_To_CustomerDrCrNotificationPage'; // ES Module import
import SFAuthorize from '../../SwiftFusion/SFAuthorizationPage'; // ES Module import
import LogoutPage from '../../SwiftFusion/SFLogoutPage'; // ES Module import



describe('Swift Fusion', () => {
    // it('Step 1: pacs-009', function () {
    //     // const loginPage = new LoginPage();
    //     // const menuSearch = new MenuSearch();
    //     // const pacs_009 = new PACS_009();
    //     // const sfAuthorize = new SFAuthorize();
    //     // const logoutPage = new LogoutPage();

    //     // // //Login with valid Maker User ID
    //     // cy.task('readExcel', {
    //     //     fileName: 'SwiftFusion.xlsx',
    //     //     sheetName: 'Login'
    //     // }).then((dataLogin) => {
    //     //     Cypress.env('excelData', dataLogin[0]); // Use first row
    //     //     loginPage.Login();
    //     // });

    //     // // Go to  
    //     // cy.task('readExcel', {
    //     //     fileName: 'SwiftFusion.xlsx',
    //     //     sheetName: 'MenuSearch'
    //     // }).then((dataMenuSearch) => {
    //     //     Cypress.env('excelData', dataMenuSearch[0]); // Use first row
    //     //     menuSearch.menu();
    //     // });
    //     // // Fill up all information  
    //     // cy.task('readExcel', {
    //     //     fileName: 'SwiftFusion.xlsx',
    //     //     sheetName: 'PACS_009'
    //     // }).then((dataPACS_009) => {
    //     //     Cypress.env('excelData', dataPACS_009[0]); // Use first row
    //     //     pacs_009.PACS_009();
    //     // });
    //     // //Go to  
    //     // cy.task('readExcel', {
    //     //     fileName: 'SwiftFusion.xlsx',
    //     //     sheetName: 'MenuSearch'
    //     // }).then((dataMenuSearch) => {
    //     //     Cypress.env('excelData', dataMenuSearch[1]); // Use first row
    //     //     menuSearch.menu();
    //     // });
    //     // // Fill up all information  
    //     // cy.task('readExcel', {
    //     //     fileName: 'SwiftFusion.xlsx',
    //     //     sheetName: 'SFAuthorization'
    //     // }).then((dataSFAuthorization) => {
    //     //     Cypress.env('excelData', dataSFAuthorization[1]); // Use first row
    //     //     sfAuthorize.SFAuth();
    //     // });
    //     //logoutPage.Logout();//logout maker user 
    // });
    
//     it('Step 2: pacs-008', function () {
//         const loginPage = new LoginPage();
//         const menuSearch = new MenuSearch();
//         const pacs_008 = new PACS_008();
//         const sfAuthorize = new SFAuthorize();


//  // //Login with valid Maker User ID
//         cy.task('readExcel', {
//             fileName: 'SwiftFusion.xlsx',
//             sheetName: 'Login'
//         }).then((dataLogin) => {
//             Cypress.env('excelData', dataLogin[0]); // Use first row
//             loginPage.Login();
//         });
//         // Go to  
//         cy.task('readExcel', {
//             fileName: 'SwiftFusion.xlsx',
//             sheetName: 'MenuSearch'
//         }).then((dataMenuSearch) => {
//             Cypress.env('excelData', dataMenuSearch[2]); // Use first row
//             menuSearch.menu();
//         });
//         // Fill up all information  
//         cy.task('readExcel', {
//             fileName: 'SwiftFusion.xlsx',
//             sheetName: 'PACS_008'
//         }).then((dataPACS_008) => {
//             Cypress.env('excelData', dataPACS_008[0]); // Use first row
//             pacs_008.PACS_008();
//         });
//         //Go to  
//         cy.task('readExcel', {
//             fileName: 'SwiftFusion.xlsx',
//             sheetName: 'MenuSearch'
//         }).then((dataMenuSearch) => {
//             Cypress.env('excelData', dataMenuSearch[3]); // Use first row
//             menuSearch.menu();
//         });
//         // Fill up all information  
//         cy.task('readExcel', {
//             fileName: 'SwiftFusion.xlsx',
//             sheetName: 'SFAuthorization'
//         }).then((dataSFAuthorization) => {
//             Cypress.env('excelData', dataSFAuthorization[0]); // Use first row
//             sfAuthorize.SFAuth();
//         });
//     });
      it('Step 3: CAMT-054', function () {
        const loginPage = new LoginPage();
        const menuSearch = new MenuSearch();
        const camt_054 = new CAMT_054();
        const sfAuthorize = new SFAuthorize();


 // //Login with valid Maker User ID
        cy.task('readExcel', {
            fileName: 'SwiftFusion.xlsx',
            sheetName: 'Login'
        }).then((dataLogin) => {
            Cypress.env('excelData', dataLogin[0]); // Use first row
            loginPage.Login();
        });
        // Go to  
        cy.task('readExcel', {
            fileName: 'SwiftFusion.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[4]); // Use first row
            menuSearch.menu();
        });
        // Fill up all information  
        cy.task('readExcel', {
            fileName: 'SwiftFusion.xlsx',
            sheetName: 'CAMT_054'
        }).then((dataCAMT_054) => {
            Cypress.env('excelData', dataCAMT_054[0]); // Use first row
            camt_054.CAMT_054();
        });
        // //Go to  
        // cy.task('readExcel', {
        //     fileName: 'SwiftFusion.xlsx',
        //     sheetName: 'MenuSearch'
        // }).then((dataMenuSearch) => {
        //     Cypress.env('excelData', dataMenuSearch[3]); // Use first row
        //     menuSearch.menu();
        // });
        // // Fill up all information  
        // cy.task('readExcel', {
        //     fileName: 'SwiftFusion.xlsx',
        //     sheetName: 'SFAuthorization'
        // }).then((dataSFAuthorization) => {
        //     Cypress.env('excelData', dataSFAuthorization[0]); // Use first row
        //     sfAuthorize.SFAuth();
        // });
    });



})