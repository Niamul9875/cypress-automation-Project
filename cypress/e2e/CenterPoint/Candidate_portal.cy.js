

import CandidateInfo from '../../ERP/CandidateInfoPage';
import CandidateSpouse from '../../ERP/CandidateSpousePage';
import CandidateChildren from '../../ERP/CandidateChildrenPage';
import CandidateEducation from '../../ERP/CandidateEducationPage';
import CandidateCareerinfo from '../../ERP/CandidateCareerinfoPage';
import CandidateTraining from '../../ERP/CandidateTrainingPage';
import CandidateReference from '../../ERP/CandidateReferencePage';
import CandidateProficienty from '../../ERP/CandidateProficientyPage';


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