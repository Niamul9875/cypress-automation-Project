const { readExcelData } = require('../../support/readExcel.js'); // Node-style import
import ERPLoginPageQC from '../../ERP/ERPLoginPageQC'; // ES Module import
  
import testphotoUpload from '../../ERP/testPhotoUpload';
// import CandidateEducation from '../../../ERP/Recruitment/CandidateEducationPage';
// import CandidateSkill from '../../../ERP/Recruitment/CandidateSkillPage';
// import CandidateFinalSubmission from '../../../ERP/Recruitment/CandidateFinalSubmission';


describe('CenterPoint ERP', () => {
  // beforeEach(() => {
  //   cy.login('anamika', '12345');  // runs only once per username/password
  // });

  it('Test Suite 1: Add New Budget', function () {
    const photpUpload = new testphotoUpload();
    const erploginQC = new ERPLoginPageQC();
  

    erploginQC.erpLoginQC();
     photpUpload.CandidateInfo();
    

  });

});