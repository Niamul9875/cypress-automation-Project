const { readExcelData } = require('../../support/readExcel.js'); // Node-style import
import LoginPage from '../../BankUltimus/Common/LoginPage'; // ES Module import
import MenuSearch from '../../BankUltimus/Common/MenuSearchPage'; // ES Module import
import LogoutPage from '../../BankUltimus/Common/LogoutPage'; // ES Module import
import FixedAssetRequisitionPage from '../../BankUltimus/FixedAssets/FixedAssetRequisitionPage'; // ES Module import
import NFTAuthorize from '../../BankUltimus/Common/NFTAuthorizeQueuePage'; // ES Module import
import FixedAssetCreatePage from '../../BankUltimus/FixedAssets/FixedAssetCreatePage'; // ES Module import
describe('Fixed Asset', () => {

    // it('Step 1: Fixed Asset Requisition && Requisition Authorization', function () {
    //     const loginPage = new LoginPage();
    //     const menuSearch = new MenuSearch();
    //     const logoutPage = new LogoutPage();
    //     const fixedAssetRequisition = new FixedAssetRequisitionPage();


    //     // //Login with valid Maker User ID
    //     cy.task('readExcel', {
    //         fileName: 'FixedAsset.xlsx',
    //         sheetName: 'Login'
    //     }).then((dataLogin) => {
    //         Cypress.env('excelData', dataLogin[0]); // Use first row
    //         loginPage.Login();
    //     });

    //     // Go to Financial proposal Page (FP: 3111)
    //     cy.task('readExcel', {
    //         fileName: 'FixedAsset.xlsx',
    //         sheetName: 'MenuSearch'
    //     }).then((dataMenuSearch) => {
    //         Cypress.env('excelData', dataMenuSearch[1]); // Use first row
    //         menuSearch.menu();
    //     });
    //     // Fill up all information at 3111
    //     cy.task('readExcel', {
    //         fileName: 'FixedAsset.xlsx',
    //         sheetName: 'FA_Requisition'
    //     }).then((dataFixedAssetRequisition) => {
    //         Cypress.env('excelData', dataFixedAssetRequisition[0]); // Use first row
    //         fixedAssetRequisition.fixedAssetRequisition();
    //     });

    //     logoutPage.Logout();//logout maker user 
    //     //Login with valid Maker User ID
    //     cy.task('readExcel', {
    //         fileName: 'FixedAsset.xlsx',
    //         sheetName: 'Login'
    //     }).then((dataLogin) => {
    //         Cypress.env('excelData', dataLogin[1]); // Use first row
    //         loginPage.Login();
    //     });
    //     //Go to NFTAuthQueue Page (FP: 8002)
    //     cy.task('readExcel', {
    //         fileName: 'FixedAsset.xlsx',
    //         sheetName: 'MenuSearch'
    //     }).then((dataMenuSearch) => {
    //         Cypress.env('excelData', dataMenuSearch[0]); // Use 2nd row
    //         menuSearch.menu();
    //     });
    //     // Authoriza Page (FP: 8002)
    //     cy.task('readExcel', {
    //         fileName: 'FixedAsset.xlsx',
    //         sheetName: 'NftAuth'
    //     }).then((dataNftAuth) => {
    //         Cypress.env('excelData', dataNftAuth[0]); // Use first row
    //         nftAuthorize.NftAuth();
    //     });
    //     //Go to Financing Approval Page (FP: 3121)
    //     cy.task('readExcel', {
    //         fileName: 'loginData3.xlsx',
    //         sheetName: 'MenuSearch'
    //     }).then((dataMenuSearch) => {
    //         Cypress.env('excelData', dataMenuSearch[16]);
    //         menuSearch.menu();
    //     });
    //     logoutPage.Logout();//logout maker user 
    // });
    it('Step 2: Create Fixed Asset By HO', function () {
        const loginPage = new LoginPage();
        const menuSearch = new MenuSearch();
        //const nftAuthorize = new NFTAuthorize();
        const fixedAssetCreatePage = new FixedAssetCreatePage();
        // const logoutPage = new LogoutPage();

        //Login with valid Maker User ID
        cy.task('readExcel', {
            fileName: 'FixedAsset.xlsx',
            sheetName: 'Login'
        }).then((dataLogin) => {
            Cypress.env('excelData', dataLogin[2]); // Use first row
            loginPage.Login();
        });
        //Go to NFTAuthQueue Page (FP: 8002)
        cy.task('readExcel', {
            fileName: 'FixedAsset.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[2]); // Use 2nd row
            menuSearch.menu();
        });
         // Fill up all information at 3111
        cy.task('readExcel', {
            fileName: 'FixedAsset.xlsx',
            sheetName: 'FA_Create'
        }).then((dataFixedAssetCreate) => {
            Cypress.env('excelData', dataFixedAssetCreate[0]); // Use first row
            fixedAssetCreatePage.fixedAssetCreate();
        });
        // // Authoriza Page (FP: 8002)
        // cy.task('readExcel', {
        //     fileName: 'FixedAsset.xlsx',
        //     sheetName: 'NftAuth'
        // }).then((dataNftAuth) => {
        //     Cypress.env('excelData', dataNftAuth[0]); // Use first row
        //     nftAuthorize.NftAuth();
        // });
        // //Go to Financing Approval Page (FP: 3121)
        // cy.task('readExcel', {
        //     fileName: 'loginData3.xlsx',
        //     sheetName: 'MenuSearch'
        // }).then((dataMenuSearch) => {
        //     Cypress.env('excelData', dataMenuSearch[16]);
        //     menuSearch.menu();
        // });
        // // Fill up all information at 3121
        // cy.task('readExcel', {
        //     fileName: 'loginData3.xlsx',
        //     sheetName: 'FinApproval'
        // }).then((dataFinancialApproval) => {
        //     Cypress.env('excelData', dataFinancialApproval[0]); // Use first row
        //     financingApproval.FinancingApproval();
        // });

        // logoutPage.Logout();//logout maker user   

    });

})