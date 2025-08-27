
const { readExcelData } = require('../../support/readExcel.js'); // Node-style import
import LoginPage from '../../BankUltimus/Common/LoginPage'; // ES Module import
import MenuSearch from '../../BankUltimus/Common/MenuSearchPage'; // ES Module import
import SchemeDepositAccOpen from '../../BankUltimus/Deposit/SchemeDepositAccOpenPage'; // ES Module import 
import LogoutPage from '../../BankUltimus/Common/LogoutPage'; // ES Module import
import NFTAuthorize from '../../BankUltimus/Common/NFTAuthorizeQueuePage'; // ES Module import
import SchemeDepositCshTrans from '../../BankUltimus/Deposit/SchemeDepositCashTransPage';
import TransAuth from '../../BankUltimus/Common/TransactionAuthorizePage'; // ES Module import
import AccInquary from '../../BankUltimus/Common/DepositAccountBalanceInquaryPage'; // ES Module import
import DepositAccNominee from '../../BankUltimus/Common/DepositAccNomineePage'; // ES Module import
import DepositAccBeneficiary from '../../BankUltimus/Common/DepositAccBeneficiaryPage'; // ES Module import
describe('Bank Ultimus', () => {
    it('Step 1: Scheme Deposit Account Open', function () {
        const loginPage = new LoginPage();
        const menuSearch = new MenuSearch();
        const sdAccOpen = new SchemeDepositAccOpen();
        const logoutPage = new LogoutPage();
        //Login with valid Maker User ID
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'Login'
        }).then((dataLogin) => {
            Cypress.env('excelData', dataLogin[0]); // Use first row
            loginPage.Login();
        });

        // Go to DDAccOpen Page (FP: 2001)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[8]); // Use first row
            menuSearch.menu();
        });
        // Fill up all information at 2001
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'SDAccOpen'
        }).then((dataSDAccOpen) => {
            Cypress.env('excelData', dataSDAccOpen[0]); // Use first row
            sdAccOpen.SDAccOpen();
        });
        logoutPage.Logout();//logout maker user   

    });
    it('Step 2: Scheme Deposit Account Authorize & Add Nominee', function () {
        const loginPage = new LoginPage();
        const menuSearch = new MenuSearch();
        const nftAuthorize = new NFTAuthorize();
        const accNominee = new DepositAccNominee();
        const logoutPage = new LogoutPage();
        //Login with valid Maker User ID
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'Login'
        }).then((dataLogin) => {
            Cypress.env('excelData', dataLogin[1]); // Use first row
            loginPage.Login();
        });

        //Go to NFTAuthQueue Page (FP: 8002)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[1]); // Use first row
            menuSearch.menu();
        });
        // Authoriza Page (FP: 2001)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'NftAuth'
        }).then((dataNftAuth) => {
            Cypress.env('excelData', dataNftAuth[2]); // Use first row
            nftAuthorize.NftAuth();
        });
        //=========Nominee Information===========
        //Go to DepositAccNominee Page (FP: 2004)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[15]); // Use first row
            menuSearch.menu();
        });
        // Add Nominee For DD(FP: 2004)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'AccNominee'
        }).then((dataddtrfTrans) => {
            Cypress.env('excelData', dataddtrfTrans[0]); // Use first row
            accNominee.nominee();
        });
        logoutPage.Logout();//logout maker user      

    });
    it('Step 3: Nominee Authorize & Add Beneficiary', function () {
        const loginPage = new LoginPage();
        const menuSearch = new MenuSearch();
        const nftAuthorize = new NFTAuthorize();
        const accBeneficiary = new DepositAccBeneficiary();

        const logoutPage = new LogoutPage();
        //Login with valid Maker User ID
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'Login'
        }).then((dataLogin) => {
            Cypress.env('excelData', dataLogin[0]); // Use first row
            loginPage.Login();
        });

        //Go to NFTAuthQueue Page (FP: 8002)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[1]); // Use first row
            menuSearch.menu();
        });
        // Authoriza Page (FP: 2001)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'NftAuth'
        }).then((dataNftAuth) => {
            Cypress.env('excelData', dataNftAuth[5]); // Use first row
            nftAuthorize.NftAuth();
        });
        //=========Beneficiary Information===========
        //Go to DepositAccBeneficiary Page (FP: 2005)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[18]); // Use first row
            menuSearch.menu();
        });
        // Add Nominee For DD(FP: 2004)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'DepoAccBeneficiary'
        }).then((dataBeneficiary) => {
            Cypress.env('excelData', dataBeneficiary[0]); // Use first row
            accBeneficiary.beneficiary();
        });
        logoutPage.Logout();//logout maker user

    });
    it('Step 4: Beneficiary Authorize & Transaction', function () {
        const loginPage = new LoginPage();
        const menuSearch = new MenuSearch();
        const nftAuthorize = new NFTAuthorize();
        const sdCshTrans = new SchemeDepositCshTrans();
        // const sdAccOpen = new SchemeDepositAccOpen();
        const logoutPage = new LogoutPage();
        //Login with valid Maker User ID
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'Login'
        }).then((dataLogin) => {
            Cypress.env('excelData', dataLogin[1]); // Use first row
            loginPage.Login();
        });

        //Go to NFTAuthQueue Page (FP: 8002)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[1]); // Use first row
            menuSearch.menu();
        });
        // Authoriza Page (FP: 2001)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'NftAuth'
        }).then((dataNftAuth) => {
            Cypress.env('excelData', dataNftAuth[7]); // Use first row
            nftAuthorize.NftAuth();
        });

        //Go to TDTrfTransaction Page (FP: 7032)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[20]); // Use first row
            menuSearch.menu();
        });

        //ddtrfTrans.DDtrfTrans();
        //Make SDTrfTransaction (FP: 7032)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'SDTrans'
        }).then((datasdCshTrans) => {
            Cypress.env('excelData', datasdCshTrans[0]); // Use first row
            sdCshTrans.SDCashTrans();
        });

        logoutPage.Logout();//logout maker user

    });
    it('Step 5: Transaction Authorization & Balance Inquary', function () {
        const loginPage = new LoginPage();
        const menuSearch = new MenuSearch();
        const transAuth = new TransAuth();
        const accInquary = new AccInquary();
        //Login with valid Maker User ID
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'Login'
        }).then((dataLogin) => {
            Cypress.env('excelData', dataLogin[0]); // Use first row
            loginPage.Login();
        });

        //Go to Transaction Authorize Page (FP: 8001)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[3]); // Use first row
            menuSearch.menu();
        });
        // Transaction Authorize (FP: 8001)
        transAuth.TransAuth();
        //const menuSearch = new MenuSearch();
        //Go to Account Inquary page (FP: 2013)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'MenuSearch'
        }).then((dataMenuSearch) => {
            Cypress.env('excelData', dataMenuSearch[12]); // Use first row
            menuSearch.menu();
        });
        //demand deposit account inquary 
        accInquary.AccInquary();


    });


});