import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    adminUser:'',
    currentUser:{},
    currentCompany: {},
    companyData: [],
    studentData: [],
    jobs: [],
    comJob: [],
    jobCompanyUid:'',
    authed:false
   
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.AUTHED:
        console.log(action.payload)
            return ({
                ...state,
               authed: action.payload
                
            })
        case ActionTypes.ADMINLOGIN:
            return ({
                ...state,
                adminUser: action.payload
                
            })
        case ActionTypes.CURRENTUSER:
        // console.log(currentUser);
            return ({
                ...state,
                currentUser: action.payload
                
            })  
        case ActionTypes.CURRENTCOMPANY: 
            return ({
                ...state,
                currentCompany: action.payload
            })   
        case ActionTypes.SHOWDATACOMPANY:
        
            return({
                ...state,
                // companyData: state.companyData.concat(action.payload)
                companyData:action.payload

            })
            case ActionTypes.SHOWCOMPANYJOBS:
        
            return({
                ...state,
                // jobs: state.jobs.concat(action.payload)
                jobs: action.payload

            })    
        case ActionTypes.SHOWDATASTUDENT:
        
            return({
                ...state,
                // studentData: state.studentData.concat(action.payload)
                studentData:action.payload
            })  
        case ActionTypes.JOBCOMPANY:
            return({
                ...state,   
                comJob: action.payload
            }) 
        case ActionTypes.JOBCOMPANYUID:
            return({
                ...state,
                jobCompanyUid:action.payload
            })
        // case ActionTypes.ALLUSERS:
        //     return ({
        //         ...state,
        //         users: action.payload
        //     }) 
        // case ActionTypes.CHANGERECPUID:
        //     return ({
        //         ...state,
        //         recipientID: action.payload
        //     })
        // case ActionTypes.MESSAGES:
        //     return ({
        //         ...state,
        //         messages: action.payload
        //     })
        default:
            return state;
    }

}