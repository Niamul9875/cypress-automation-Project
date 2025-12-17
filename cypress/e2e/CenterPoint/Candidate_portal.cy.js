

import CandidateInfo from '../../ERP/EmployeeInfo/CandidateInfoPage';
import CandidateSpouse from '../../ERP/EmployeeInfo/CandidateSpousePage';
import CandidateChildren from '../../ERP/EmployeeInfo/CandidateChildrenPage';
import CandidateEducation from '../../ERP/EmployeeInfo/CandidateEducationPage';
import CandidateCareerinfo from '../../ERP/EmployeeInfo/CandidateCareerinfoPage';
import CandidateTraining from '../../ERP/EmployeeInfo/CandidateTrainingPage';
import CandidateReference from '../../ERP/EmployeeInfo/CandidateReferencePage';
import CandidateProficienty from '../../ERP/EmployeeInfo/CandidateProficientyPage';


import 'cypress-file-upload';

describe('PRMS', () => {
  it('Step 1: Candidate ', function () {

    const candidateInfo = new CandidateInfo();
    const candidateSpouse = new CandidateSpouse();
    const candidateChildren = new CandidateChildren();
    const candidateEducation = new CandidateEducation();
     const candidateCareerinfo = new CandidateCareerinfo();
     const candidateTraining = new CandidateTraining();
    const candidateReference = new CandidateReference();
    const candidateProficienty = new CandidateProficienty();

    candidateInfo.CandidateInfo();
    candidateSpouse.CandidateSpouse();
    candidateChildren.CandidateChildren(); 
    candidateEducation.CandidateEducation();
    candidateCareerinfo.CandidateCareerinfo();
         candidateTraining.CandidateTraining();
    candidateReference.CandidateReference();
     candidateProficienty.CandidateProficienty();

  });
});