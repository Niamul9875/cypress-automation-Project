
import CandidateInfo from '../../ERP/CandidateInfoPage'; // ES Module import
import CandidateSpouse from '../../ERP/CandidateSpousePage'; // ES Module import
import CandidateChildren from '../../ERP/CandidateChildrenPage'; // ES Module import
import 'cypress-file-upload';

describe('PRMS', () => {
    it('Step 1: Candidate Info', function () {

        const candidateInfo = new CandidateInfo();
        const candidateSpouse = new CandidateSpouse();
        const candidateChildren = new CandidateChildren();


        candidateInfo.CandidateInfo();
        candidateSpouse.CandidateSpouse();
        candidateChildren.CandidateChildren();
    });



})