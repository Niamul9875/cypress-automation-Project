const { readExcelData } = require('../support/readExcel.js'); // Node-style import
//import LoginPage from '../../BUltimus/LogIn.js'; // ES Module import
import userinfo from '../BUltimus/DefineUser.js';
import UserinfoAuth from '../BUltimus/GoToAuthPageUI.js';
import authuser from '../BUltimus/AuthorizeUser.js';
import GoToFastPath from '../BUltimus/SMSFastpath.js';
import LoginPageSYS from '../BUltimus/LoginPage.js';
import DoLogOut from '../BUltimus/LogOut.js';
import SMSauth from '../BUltimus/SMSuserAuthorization.js';
//import GoToCIFPage from '../BUltimus/CIFPage.js'
//import CIFInfo from '../BUltimus/CIFInfo.js'

describe('Login Test Using Excel Data', () => {
  
  const loginadmin = new LoginPageSYS ();
  //const cifPage = new GoToCIFPage();
  //const cifInfo = new CIFInfo();
  // uinfo = new userinfo();
  const GoToAuthpageuserprofile = new UserinfoAuth();
  const authuserinfo = new authuser();
  const bruser = new userinfo();
  const userpath1= new GoToFastPath();
  const smslogout= new DoLogOut();
  const userapprove = new SMSauth();
  

  it('should login using Excel data', () => {

    //Login with valid User ID
    //  cy.task('readExcel', {
    //  fileName: 'loginData.xlsx',
    //   sheetName: 'Sheet1'
    //  }).then((dataLogin) => {
    //    Cypress.env('excelData', dataLogin[0]); // Use first row
    //  loginPage.Login();
    //  });
     cy.task('readExcel', {
     fileName: 'DefineUser.xlsx',
     sheetName: 'Sheet1'
    }).then((dataLogin) => {
      Cypress.env('excelData', dataLogin[0]); // Use first 
      loginadmin.LoginasAdmin()
     // GoToAuthpageuserprofile.UA()
      
     });
 
      cy.task('readExcel', {
     fileName: 'DefineUser.xlsx',
     sheetName: 'Sheet2'
    }).then((dataLogin) => {
      Cypress.env('excelData', dataLogin[0]); // Use first 

     userpath1.FastPath()
     // GoToAuthpageuserprofile.UA()
      
     });


    cy.task('readExcel', {
    fileName: 'DefineUser.xlsx',
     sheetName: 'Sheet3'
   }).then((dataLogin) => {
     Cypress.env('excelData', dataLogin[0]); // Use first 
   bruser.uiInfo();
  // loginadmin.LoginasAdmin()
      //GoToAuthpageuserprofile.UA()

      
   });

smslogout.LogOut()

  cy.task('readExcel', {
    fileName: 'DefineUser.xlsx',
     sheetName: 'Sheet1'
   }).then((dataLogin) => {
     Cypress.env('excelData', dataLogin[1]); // Use first 
  // bruser.uiInfo();
     // GoToAuthpageuserprofile.UA()

     loginadmin.LoginasAdmin()

      
   });


///Authorization
 cy.task('readExcel', {
     fileName: 'DefineUser.xlsx',
     sheetName: 'Sheet2'
    }).then((dataLogin) => {
      Cypress.env('excelData', dataLogin[1]); // Use first 

     userpath1.FastPath()
     // GoToAuthpageuserprofile.UA()
      
     });

  cy.task('readExcel', {
     fileName: 'DefineUser.xlsx',
     sheetName: 'Sheet3'
    }).then((dataLogin) => {
      Cypress.env('excelData', dataLogin[0]); // Use first 

     userapprove.userauthorization();
     // GoToAuthpageuserprofile.UA()
      
     });


  
  //  cy.wait(4000)
//cy.get('#txtMenuSearch').type('0954').type('{enter}');
//cy.get('#txtfastpath').type('0954').type('{enter}');
//bruser.uiInfo();
//cy.get('#txtfastpath').type('8008').type('{enter}');
//authuserinfo.uiauth();



 //uinfo.uiInfo()
    
    // Go to Customer Individual Page (FP: 1501)
    // cy.task('readExcel', {
    //   fileName: 'loginData.xlsx',
    //   sheetName: 'Sheet2'
    // }).then((dataCIFPage) => {
    //   Cypress.env('excelData', dataCIFPage[0]); // Use first row
    //   cifPage.CIFPage();
    // });

    // // Fill in Customer Individual Page -BASIC INFO (FP: 1501)
    // cy.task('readExcel', {
    //   fileName: 'loginData.xlsx',
    //   sheetName: 'Sheet3'
    // }).then((dataCIFInfo) => {
    //   Cypress.env('excelData', dataCIFInfo[0]); // Use first row
    //   cifInfo.cifInfo();
    // });

    

  });

});