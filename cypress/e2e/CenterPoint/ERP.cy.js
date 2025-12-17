const { readExcelData } = require('../../support/readExcel.js'); // Node-style import
import ERPLoginPage from '../../ERP/EmployeeInfo/ERPLoginPage'; // ES Module import
//import EmployeeDetails from '../../ERP/EmployeeDetailsPage'; // ES Module import
import EmployeeInfo from '../../ERP/EmployeeInfo/EmployeeInfoPage'; // ES Module import
import OrganizationDetails from '../../ERP/EmployeeInfo/OrganizationDetailsPage'; // ES Module import
import AddtionalInfo from '../../ERP/EmployeeInfo/AddtionalInfoPage'; // ES Module import
import EducationalInfo from '../../ERP/EmployeeInfo/EducationalInfoPage'; // ES Module import
import JobExperience from '../../ERP/EmployeeInfo/JobExperiencePage'; // ES Module import
import Training from '../../ERP/EmployeeInfo/TrainingPage'; // ES Module import   
import Spouse from '../../ERP/EmployeeInfo/SpousePage'; // ES Module import 
import Children from '../../ERP/EmployeeInfo/ChildrenPage'; // ES Module import
import Nominee from '../../ERP/EmployeeInfo/NomineePage'; // ES Module import
import PhotoAndSignature from '../../ERP/EmployeeInfo/PhotoAndSignaturePage'; // ES Module import
import Relatives from '../../ERP/EmployeeInfo/RelativesPage'; // ES Module import
import Reference from '../../ERP/EmployeeInfo/ReferencePage'; // ES Module import
import Proficiency from '../../ERP/EmployeeInfo/ProficiencyPage'; // ES Module import
import Attachment from '../../ERP/EmployeeInfo/AttachmentPage';
import EmployeeList from '../../ERP/EmployeeInfo/EmployeeListPage';


describe('Bank Ultimus', () => {
    it('Step 1: Employee Details', function () {
        const erplogin = new ERPLoginPage();
        const employeeInfo = new EmployeeInfo();
        const organizationDetails = new OrganizationDetails();
        const addtionalInfo = new AddtionalInfo();
        const educationalInfo = new EducationalInfo();
        const jobExperience = new JobExperience();
        const training = new Training();
        const spouse = new Spouse();
        const children = new Children();
        const nominee = new Nominee();
        const photoAndSignature = new PhotoAndSignature();
        const relatives = new Relatives();
        const reference = new Reference();
        const proficiency = new Proficiency();
        const attachment = new Attachment();


        //Login with valid Maker User ID
        cy.task('readExcel', {
            fileName: 'loginData3.xlsx',
            sheetName: 'Login'
        }).then((dataLogin) => {
            Cypress.env('excelData', dataLogin[2]); // Use first row
            erplogin.erpLogin();
        });


        employeeInfo.EmployeeInfo();
        organizationDetails.OrganizationDetails();
        addtionalInfo.AddtionalInfo();
        educationalInfo.EducationalInfo();
        jobExperience.JobExperience();
        training.Training();
        spouse.Spouse();
        children.Children();
        nominee.Nominee();
        //photoAndSignature.Nominee(); // Navigate to Photo & Signature Page
        photoAndSignature.PhotoAndSignature(); // Upload Photo & Signature
        relatives.Relatives(); // Navigate to Relatives Page
        reference.Reference(); // Navigate to Reference Page
        proficiency.Proficiency(); // Navigate to Proficiency Page
        attachment.Attachment(); // Navigate to Attachment Page






    });



})