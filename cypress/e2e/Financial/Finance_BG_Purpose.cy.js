const { readExcelData } = require('../../support/readExcel.js'); // Node-style import
import LoginPage from '../../BankUltimus/Common/LoginPage'; // ES Module import
import MenuSearch from '../../BankUltimus/Common/MenuSearchPage'; // ES Module import
import FinancialProposalRegister from '../../BankUltimus/Finance/Lon_FinancialProposalRegisterPage'; // ES Module import
import FinancingApproval from '../../BankUltimus/Finance/Lon_FinancingApprovalPage'; // ES Module import
import CommitmentPortfolioRegisterPage from '../../BankUltimus/Finance/Lon_CommitmentPortfolioRegisterPage'; // ES Module import
import Lon_AccountOpen from '../../BankUltimus/Finance/Lon_AccountOpenPage'; // ES Module import
import LogoutPage from '../../BankUltimus/Common/LogoutPage'; // ES Module import
import NFTAuthorize from '../../BankUltimus/Common/NFTAuthorizeQueuePage'; // ES Module import
import LonAccTrfTrans from '../../BankUltimus/Finance/Lon_AccountDisbursementByTransfer'; // ES Module import
import LonAccRepayTrfTrans from '../../BankUltimus/Finance/Lon_AccountRepaymentByTransfer copy'; // ES Module import
import LonAllowLimitSetup from '../../BankUltimus/Finance/Lon_AccAllowLimitSetup'; // ES Module import
import TransAuth from '../../BankUltimus/Common/TransactionAuthorizePage'; // ES Module import
import LonBalInquary from '../../BankUltimus/Finance/Lon_AccBalanceInquary'; // ES Module import
import BankGuraranteeIssuePage from '../../BankUltimus/BankGuarantee/BankGuraranteeIssuePage'; // ES Module import
import RegisterTransactionAuthorizationPage from '../../BankUltimus/Common/8003_RegisterTransactionAuthorizationPage'; // ES Module import


describe('Bank Ultimus', () => {
    // it('Step 1: Financial Proposal Register', function () {
    //     const loginPage = new LoginPage();
    //     const menuSearch = new MenuSearch();
    //     const financialProposal = new FinancialProposalRegister();
    //     const logoutPage = new LogoutPage();


    //     // //Login with valid Maker User ID
    //     cy.task('readExcel', {
    //         fileName: 'loginData3.xlsx',
    //         sheetName: 'Login'
    //     }).then((dataLogin) => {
    //         Cypress.env('excelData', dataLogin[0]); // Use first row
    //         loginPage.Login();
    //     });

    //     // Go to Financial proposal Page (FP: 3111)
    //     cy.task('readExcel', {
    //         fileName: 'loginData3.xlsx',
    //         sheetName: 'MenuSearch'
    //     }).then((dataMenuSearch) => {
    //         Cypress.env('excelData', dataMenuSearch[10]); // Use first row
    //         menuSearch.menu();
    //     });
    //     // Fill up all information at 3111
    //     cy.task('readExcel', {
    //         fileName: 'loginData3.xlsx',
    //         sheetName: 'FinProposalRegister'
    //     }).then((dataFinancialProposal) => {
    //         Cypress.env('excelData', dataFinancialProposal[5]); // Use first row
    //         financialProposal.FinancialProposalRegister();
    //     });
    //     logoutPage.Logout();//logout maker user 
    // });
    // it('Step 2: Proposal Authorization & Financing Approval', function () {
    //     const loginPage = new LoginPage();
    //     const menuSearch = new MenuSearch();
    //     const nftAuthorize = new NFTAuthorize();
    //     const financingApproval = new FinancingApproval();
    //     const logoutPage = new LogoutPage();

    //     //Login with valid Maker User ID
    //     cy.task('readExcel', {
    //         fileName: 'loginData3.xlsx',
    //         sheetName: 'Login'
    //     }).then((dataLogin) => {
    //         Cypress.env('excelData', dataLogin[1]); // Use first row
    //         loginPage.Login();
    //     });
    //     //Go to NFTAuthQueue Page (FP: 8002)
    //     cy.task('readExcel', {
    //         fileName: 'loginData3.xlsx',
    //         sheetName: 'MenuSearch'
    //     }).then((dataMenuSearch) => {
    //         Cypress.env('excelData', dataMenuSearch[1]); // Use 2nd row
    //         menuSearch.menu();
    //     });
    //     // Authoriza Page (FP: 8002)
    //     cy.task('readExcel', {
    //         fileName: 'loginData3.xlsx',
    //         sheetName: 'NftAuth'
    //     }).then((dataNftAuth) => {
    //         Cypress.env('excelData', dataNftAuth[4]); // Use first row
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
    //     // Fill up all information at 3121
    //     cy.task('readExcel', {
    //         fileName: 'loginData3.xlsx',
    //         sheetName: 'FinApproval'
    //     }).then((dataFinancialApproval) => {
    //         Cypress.env('excelData', dataFinancialApproval[0]); // Use first row
    //         financingApproval.FinancingApproval();
    //     });

    //     logoutPage.Logout();//logout maker user   

    // });
    // it('Step 3: Financing Approval Authorization & Commitment Portfolio Register', function () {
    //     const loginPage = new LoginPage();
    //     const menuSearch = new MenuSearch();
    //     const nftAuthorize = new NFTAuthorize();
    //     const logoutPage = new LogoutPage();
    //     const commitmentPortfolioRegisterPage = new CommitmentPortfolioRegisterPage

    //     //Login with valid Maker User ID
    //     cy.task('readExcel', {
    //         fileName: 'loginData3.xlsx',
    //         sheetName: 'Login'
    //     }).then((dataLogin) => {
    //         Cypress.env('excelData', dataLogin[0]); // Use first row
    //         loginPage.Login();
    //     });
    //     //Go to NFTAuthQueue Page (FP: 8002)
    //     cy.task('readExcel', {
    //         fileName: 'loginData3.xlsx',
    //         sheetName: 'MenuSearch'
    //     }).then((dataMenuSearch) => {
    //         Cypress.env('excelData', dataMenuSearch[1]); // Use 2nd row
    //         menuSearch.menu();
    //     });
    //     // Authoriza Page (FP: 8002)
    //     cy.task('readExcel', {
    //         fileName: 'loginData3.xlsx',
    //         sheetName: 'NftAuth'
    //     }).then((dataNftAuth) => {
    //         Cypress.env('excelData', dataNftAuth[6]); // Use first row
    //         nftAuthorize.NftAuth();
    //     });
    //     //Go to Financing Approval Page (FP: 3131)
    //     cy.task('readExcel', {
    //         fileName: 'loginData3.xlsx',
    //         sheetName: 'MenuSearch'
    //     }).then((dataMenuSearch) => {
    //         Cypress.env('excelData', dataMenuSearch[17]); // Use 2nd row
    //         menuSearch.menu();
    //     });
    //     // Fill up all information at 3121
    //     cy.task('readExcel', {
    //         fileName: 'loginData3.xlsx',
    //         sheetName: 'FinCommitment'
    //     }).then((dataCommitmentPortfolioRegister) => {
    //         Cypress.env('excelData', dataCommitmentPortfolioRegister[0]); // Use first row
    //         commitmentPortfolioRegisterPage.CommitmentPortfolioRegister();
    //     });

    //     logoutPage.Logout();//logout maker user   

    // });
    // it('Step 4: Commitment Authorization & Bank Gurarantee Issue', function () {
    //     const loginPage = new LoginPage();
    //     const menuSearch = new MenuSearch();
    //     const logoutPage = new LogoutPage();
    //     const nftAuthorize = new NFTAuthorize();
    //     const bankGurarantee = new BankGuraranteeIssuePage();

    //     //Login with valid Maker User ID
    //     cy.task('readExcel', {
    //         fileName: 'loginData3.xlsx',
    //         sheetName: 'Login'
    //     }).then((dataLogin) => {
    //         Cypress.env('excelData', dataLogin[1]); // Use first row
    //         loginPage.Login();
    //     });
    //     // //Go to NFTAuthQueue Page (FP: 8002)
    //     // cy.task('readExcel', {
    //     //     fileName: 'loginData3.xlsx',
    //     //     sheetName: 'MenuSearch'
    //     // }).then((dataMenuSearch) => {
    //     //     Cypress.env('excelData', dataMenuSearch[1]); // Use 2nd row
    //     //     menuSearch.menu();
    //     // });
    //     // // Authoriza Page (FP: 8002)
    //     // cy.task('readExcel', {
    //     //     fileName: 'loginData3.xlsx',
    //     //     sheetName: 'NftAuth'
    //     // }).then((dataNftAuth) => {
    //     //     Cypress.env('excelData', dataNftAuth[8]); // Use first row
    //     //     nftAuthorize.NftAuth();
    //     // });
    //     //Go to Financing Approval Page (FP: 3131)
    //     cy.task('readExcel', {
    //         fileName: 'loginData3.xlsx',
    //         sheetName: 'MenuSearch'
    //     }).then((dataMenuSearch) => {
    //         Cypress.env('excelData', dataMenuSearch[29]); // Use 2nd row
    //         menuSearch.menu();
    //     });
    //     // Fill up all information at 3121
    //     cy.task('readExcel', {
    //         fileName: 'loginData3.xlsx',
    //         sheetName: 'BankGuraranteeIssue'
    //     }).then((dataBankGurarantee) => {
    //         Cypress.env('excelData', dataBankGurarantee[0]); // Use first row
    //         bankGurarantee.BankGuraranteeIssue();
    //     });
    // });
    it('Step 5: Bank Gurarantee Authorization', function () {
        const loginPage = new LoginPage();
        const menuSearch = new MenuSearch();
        //const nftAuthorize = new NFTAuthorize();
        //const logoutPage = new LogoutPage();
        const regTransAuth = new RegisterTransactionAuthorizationPage();

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
            Cypress.env('excelData', dataMenuSearch[30]); // Use 2nd row
            menuSearch.menu();
        });
        // Authoriza Page (FP: 8002)
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'RegTransAuth'
        }).then((dataRegTransAuth) => {
            Cypress.env('excelData', dataRegTransAuth[0]); // Use first row
            regTransAuth.RegisterTransactionAuthorization();
        });

        //  //Go to Financing Approval Page (FP: 3131)
        //         cy.task('readExcel', {
        //             fileName: 'loginData3.xlsx',
        //             sheetName: 'MenuSearch'
        //         }).then((dataMenuSearch) => {
        //             Cypress.env('excelData', dataMenuSearch[22]); // Use 2nd row
        //             menuSearch.menu();
        //         });
        //         // Fill up all information at 3121
        //         cy.task('readExcel', {
        //             fileName: 'loginData3.xlsx',
        //             sheetName: 'LonAccTrfTrans'
        //         }).then((dataLonAccTrfTrans) => {
        //             Cypress.env('excelData', dataLonAccTrfTrans[0]); // Use first row
        //             lonAccTrfTrans.LonAccTrfTrans();
        //         });

        //         logoutPage.Logout();//logout maker user   
    });
    //     it('Step 6: Transaction Authorization & Loan Account Repayment', function () {
    //         const loginPage = new LoginPage();
    //         const menuSearch = new MenuSearch();
    //         const transAuth = new TransAuth();
    //         const logoutPage = new LogoutPage();
    //         const lonAccRepayTrfTrans = new LonAccRepayTrfTrans();

    //         //Login with valid Checker User ID
    //         cy.task('readExcel', {
    //             fileName: 'loginData3.xlsx',
    //             sheetName: 'Login'
    //         }).then((dataLogin) => {
    //             Cypress.env('excelData', dataLogin[1]); // Use first row
    //             loginPage.Login();
    //         });

    //         //Go to Transaction Authorize Page (FP: 8001)
    //         cy.task('readExcel', {
    //             fileName: 'loginData3.xlsx',
    //             sheetName: 'MenuSearch'
    //         }).then((dataMenuSearch) => {
    //             Cypress.env('excelData', dataMenuSearch[3]); // Use first row
    //             menuSearch.menu();
    //         });

    //         // Transaction Authorize (FP: 8001)
    //         transAuth.TransAuth();
    //         //Go to Financing Approval Page (FP: 3131)
    //         cy.task('readExcel', {
    //             fileName: 'loginData3.xlsx',
    //             sheetName: 'MenuSearch'
    //         }).then((dataMenuSearch) => {
    //             Cypress.env('excelData', dataMenuSearch[25]); // Use 2nd row
    //             menuSearch.menu();
    //         });
    //         // Fill up all information at 3121
    //         cy.task('readExcel', {
    //             fileName: 'loginData3.xlsx',
    //             sheetName: 'LonAccTrfTrans'
    //         }).then((dataLonAccTrfTrans) => {
    //             Cypress.env('excelData', dataLonAccTrfTrans[0]); // Use first row
    //             lonAccRepayTrfTrans.LonAccRePayTrfTrans();
    //         });

    //         logoutPage.Logout();//logout maker user  

    //     });
    //     it('Step 7: Transaction Authorization & Balance Inquary', function () {
    //         const loginPage = new LoginPage();
    //         const menuSearch = new MenuSearch();
    //         const transAuth = new TransAuth();
    //         const accBalInquary = new LonBalInquary();
    //         //const accInquary = new AccInquary();

    //         //Login with valid Checker User ID
    //         cy.task('readExcel', {
    //             fileName: 'loginData3.xlsx',
    //             sheetName: 'Login'
    //         }).then((dataLogin) => {
    //             Cypress.env('excelData', dataLogin[0]); // Use first row
    //             loginPage.Login();
    //         });

    //         //Go to Transaction Authorize Page (FP: 8001)
    //         cy.task('readExcel', {
    //             fileName: 'loginData3.xlsx',
    //             sheetName: 'MenuSearch'
    //         }).then((dataMenuSearch) => {
    //             Cypress.env('excelData', dataMenuSearch[3]); // Use first row
    //             menuSearch.menu();
    //         });

    //         // Transaction Authorize (FP: 8001)
    //         transAuth.TransAuth();
    //         //Go to DD Account Balance Inquary page (FP: 2011)
    //         cy.task('readExcel', {
    //             fileName: 'loginData3.xlsx',
    //             sheetName: 'MenuSearch'
    //         }).then((dataMenuSearch) => {
    //             Cypress.env('excelData', dataMenuSearch[24]); // Use first row
    //             menuSearch.menu();
    //         });
    //         //demand deposit account Balance inquary 
    //         accBalInquary.LonBalInquary();

    //     });
})