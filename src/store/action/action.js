import ActionTypes from '../constant/constant';
import history from '../../History';

import * as firebase from 'firebase';



var config = {
    apiKey: "AIzaSyDscKyrfzDW_AFdvcGngmeuAQ1rw-1w4Ds",
    authDomain: "feeling-500cd.firebaseapp.com",
    databaseURL: "https://feeling-500cd.firebaseio.com",
    projectId: "feeling-500cd",
    storageBucket: "feeling-500cd.appspot.com",
    messagingSenderId: "912309983567"
};
firebase.initializeApp(config);





////////////////////////////////////////student login & signup ////////////////////////////////////////////////////



export function signupAction(user) {

    return dispatch => {
        console.log('user', user);

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((createdUser) => {
                console.log('signed up successfully', createdUser.uid);
                //delete user.password;
                user.uid = createdUser.uid;
                firebase.database().ref('users/student/' + createdUser.uid + '/').set(user)
                .then(() => {
                    
                    let currentUserUid = firebase.auth().currentUser.uid;
                    
                    dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserUid })
                    dispatch({type:ActionTypes.AUTHED , payload:true })
                    localStorage.setItem('uid',currentUserUid)
                        history.push('/studentpanel');



                    })
            })
    }
}
export function signinAction(user) {
    console.log(history);
    return dispatch => {
        console.log('user in signin', user);


        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((signedinUser) => {
                let userid = signedinUser.uid
                console.log(userid);
                firebase.database().ref(`users/student/${userid}`).once('value')
                    .then((snapshot) => {
                        console.log(snapshot.val());
                        if (snapshot.val() === null) {
                            alert('user not found');

                            firebase.auth().signOut().then(function () {

                                history.push('/')

                            })

                        } else {


                            if (snapshot.val().displayName === 'student') {



                                // firebase.database().ref('users/student/').once('value')
                                //     .then((userData) => {

                                //         let allUsers = userData.val();
                                //         console.log('a',allUsers);
                                //         let currentUserUid = firebase.auth().currentUser.uid;
                                //         console.log('63', currentUserUid);
                                //         // let student = {
                                //         //     name:currentUserUid.username,
                                //         //     email:currentUserUid.email,
                                //         //     number:currentUserUid.number,
                                //         //     gender:currentUserUid.gender,
                                //         //     uid:currentUserUid
                                //         // }
                                //         // console.log(student);
                                //         let allUsersArr = [];

                                //         for (var key in allUsers) {
                                //             allUsersArr.push(allUsers[key]);
                                //         }
                                //         console.log('8', allUsersArr);
                                //         let student={};
                                //         for(let i=0;i<allUsersArr.length;i++){
                                //             // console.log(allUsersArr[i].uid);
                                //             // console.log(currentUserUid);
                                //             if(allUsersArr[i].uid === currentUserUid){
                                //                 console.log('matched');
                                //                 student = allUsersArr[i]
                                //                 console.log(student);
                                //             }

                                //             console.log(student);
                                //         }
                                //         console.log(student);
                                //         dispatch({ type: ActionTypes.CURRENTUSER, payload: student })
                                dispatch({type:ActionTypes.AUTHED , payload:true })
                                localStorage.setItem('uid',userid);
                                history.push('/studentpanel');




                                // })

                            }
                        }

                    })

            })
    }
}

////////////////////////////////////////student login & signup ////////////////////////////////////////////////////



////////////////////////////////////////company login & signup ////////////////////////////////////////////////////

export function companySignupAction(company) {

    return dispatch => {
        console.log('user', company);

        firebase.auth().createUserWithEmailAndPassword(company.email, company.password)
            .then((createdCompany) => {
                console.log('signed up successfully', createdCompany.uid);

                company.uid = createdCompany.uid;
                firebase.database().ref('users/company/' + createdCompany.uid + '/').set(company)
                    .then(() => {

                        let currentCompanyUid = firebase.auth().currentUser.uid;

                        dispatch({ type: ActionTypes.CURRENTCOMPANY, payload: currentCompanyUid })
                        dispatch({type:ActionTypes.AUTHED , payload:true })
                                localStorage.setItem('uid',currentCompanyUid);
                        history.push('/companypanel');

                    })
            })
    }
}

export function companyLoginAction(company) {
    return dispatch => {
        console.log('user in signin', company);
        firebase.auth().signInWithEmailAndPassword(company.email, company.password)
            .then((signedinUser) => {
                let companyid = signedinUser.uid
                console.log(companyid);
                firebase.database().ref(`users/company/${companyid}`).once('value')
                    .then((snapshot) => {
                        console.log(snapshot.val());
                        // let currentCompany = snapshot.val();
                        if (snapshot.val() === null) {
                            alert('user not found');
                            firebase.auth().signOut().then(function () {

                                history.push('/')
                            })

                        } else {


                            if (snapshot.val().displayName === 'company') {
                                localStorage.setItem("uid", companyid);
                                //     firebase.database().ref('users/company/').once('value')
                                //         .then((companyData) => {
                                //             console.log(companyData);

                                //            let currentCompanyUid = firebase.auth().currentUser.uid;
                                //            console.log(currentCompanyUid);
                                // console.log(companyid);
                                // dispatch({ type: ActionTypes.CURRENTCOMPANY, payload: companyid })
                                dispatch({type:ActionTypes.AUTHED , payload:true })
                                
                                history.push('/companypanel');

                                // })
                            }
                        }
                    })
            })
    }
}


////////////////////////////////////////company login & signup ////////////////////////////////////////////////////

////////////////////////////////////////signout ////////////////////////////////////////////////////
export function signout() {
    return dispatch => {
        // firebase.auth().onAuthStateChanged((user)=>{
        firebase.auth().signOut().then(function () {
            //    dispatch({type: ActionTypes.CURRENTUSER,payload:null})
            localStorage.clear()
            // console.log(user)
            history.push('/')
            window.location.reload();
        }).catch(function (error) {

        });

        // })
    }
}
////////////////////////////////////////signout ////////////////////////////////////////////////////

////////////////////////////////////////admin login ////////////////////////////////////////////////////
export function adminLogin(admin) {
    return dispatch => {
        console.log('user in signin', admin);
        firebase.auth().signInWithEmailAndPassword(admin.email, admin.password)
            .then((adminsignedinUser) => {
                firebase.database().ref('users/admin').once('value')
                    .then((userData) => {
                        let admincurrentUserUid1 = firebase.auth().currentUser.uid;
                        dispatch({type:ActionTypes.AUTHED , payload:true })
                        dispatch({ type: ActionTypes.ADMINLOGIN, payload: admincurrentUserUid1 })
                        history.push('/adminpanel');
                    })
            })
    }
}
////////////////////////////////////////admin login ////////////////////////////////////////////////////

////////////////////////////////////////admin data ////////////////////////////////////////////////////
export function ShowCompanyJobs() {
    return dispatch => {
        firebase.database().ref(`/jobPost`).on('value', snap => {
            let data = snap.val();
            let arr = [];
            for (let key in data) {
                let data1 = data[key];
                for (let key1 in data1) {
                    arr.push(data1[key1])
                }
            }
            dispatch({ type: ActionTypes.SHOWCOMPANYJOBS, payload: arr });
        })
    }
}

export function ShowCompanyData() {
    return dispatch => {
        firebase.database().ref('users/company').on('value', data => {
            console.log(data);

            // .then((data) => {
            let dbdata = data.val();
            console.log(dbdata);
            var arraydata = []
            for (let value in dbdata) {
                arraydata.push(dbdata[value])
            }
            console.log(arraydata);
            dispatch({ type: ActionTypes.SHOWDATACOMPANY, payload: arraydata })
        })

    }
}



export function ShowStudentData() {
    return dispatch => {
        firebase.database().ref('users/student').on('value',
            data => {
                console.log(data);
                let dbdata = data.val();
                console.log(dbdata);
                var arraydata = []
                for (let value in dbdata) {
                    arraydata.push(dbdata[value])
                }
                console.log(arraydata);
                dispatch({ type: ActionTypes.SHOWDATASTUDENT, payload: arraydata })
            })
    }
}

////////////////////////////////////////admin data ////////////////////////////////////////////////////

////////////////////////////////////////job post ////////////////////////////////////////////////////


export function postJob(job) {
    console.log(job)
    return dispatch => {
        console.log(job)

        let currentuser = firebase.auth().currentUser.uid;
        firebase.database().ref(`jobPost/${currentuser}`).push(job)
            .then((obj) => {
                console.log(obj.key);
                // console.log(obj.uid);
                job.uid = obj.key;
                firebase.auth().onAuthStateChanged((user) => {
                    if (user) {
                        // .then(()=>{})
                        //  console.log(user.uid);
                        job.useruid = user.uid
                        firebase.database().ref(`jobPost/${currentuser}/${job.uid}/`).set(job)
                            .then((obj) => {
                                ShowCompanyData()
                                // history.push('/companypanel')
                            })
                    }
                })
            })

    }
}


////////////////////////////////////////job post ////////////////////////////////////////////////////


////////////////////////////////////////student delete ////////////////////////////////////////////////////
export function studentdelete(value) {
    return dispatch => {
        firebase.database().ref(`users/student/${value}`).remove()
        console.log('check firebase')
    }
}

////////////////////////////////////////student delete ////////////////////////////////////////////////////

////////////////////////////////////////company delete ////////////////////////////////////////////////////
export function companydelete(value) {
    return dispatch => {
        firebase.database().ref(`jobPost/${value}`).remove()
        firebase.database().ref(`users/company/${value}`).remove()
        console.log('check firebase')
    }
}
////////////////////////////////////////company delete ////////////////////////////////////////////////////

////////////////////////////////////////job delete ////////////////////////////////////////////////////
export function jobsdelete(valueuid, valueuseruid) {
    console.log(valueuid, valueuseruid);

    return dispatch => {
        firebase.database().ref(`jobPost/${valueuseruid}/${valueuid}`).remove()


        // firebase.database().ref(`jobPost/`).on('value',
        //     data => {
        //         let jobComObj = data.val();
        //         console.log(jobComObj);
        //         let jobComArr = []
        //         for (let key in jobComObj) {
        //             jobComArr.push(jobComObj[key]);
        //         }
        //         console.log(jobComArr);
        //         let finalArr = [];
        //         for (let i = 0; i < jobComArr.length; i++) {
        //             for (let key in jobComArr[i]) {
        //                 let a = jobComArr[i]
        //                 console.log(a, i);
        //                 finalArr.push(a[key]);
        //                 // jobComArr[i]

        //             }
        //             console.log(finalArr);


        //             for (let i = 0; i < finalArr.length; i++) {
        //                 if (value === finalArr[i].uid) {
        //                     firebase.database().ref(`jobPost/${finalArr[i].useruid}/${finalArr[i].uid}/`).remove()
        //                     console.log('done', finalArr[i].useruid, finalArr[i].uid);
        //                     break;
        //                 }

        //             }
        // }
        // })
        // console.log('check firebase')
    }
}
////////////////////////////////////////job delete ////////////////////////////////////////////////////

//////////////////////////////////////Current Company////////////////////////////////////////////
export function currentCompany() {
    return dispatch => {
        firebase.auth().onAuthStateChanged((user) => {
            // .then(()=>{})
            if (user) {

                console.log(user.uid);
                let uid = user.uid
                firebase.database().ref(`users/company/${uid}`).once('value')
                    .then((currentUser) => {
                        console.log(currentUser.val());
                        let company = currentUser.val();
                        dispatch({ type: ActionTypes.CURRENTCOMPANY, payload: company })
                    })
            }

        })

    }
}
//////////////////////////////////////Current Company////////////////////////////////////////////


//////////////////////////////////////Current Student////////////////////////////////////////////
export function currentStudent() {
    return dispatch => {
        firebase.auth().onAuthStateChanged((user) => {
            // .then(()=>{})
            if (user) {
                console.log(user.uid);
                firebase.database().ref(`users/student/${user.uid}`).once('value')
                    .then((currentUser1) => {
                        console.log(currentUser1.val());
                        let student = currentUser1.val();
                        dispatch({ type: ActionTypes.CURRENTUSER, payload: student })
                    })
            }
        })
    }
}
//////////////////////////////////////Current Student////////////////////////////////////////////


//////////////////////////////////////Send Company UID////////////////////////////////////////////
export function ShowComJobsUid(uid) {
    console.log(uid)
    return dispatch => {
        // firebase.database().ref(`jobPost/${uid}`).on('value', snapshot =>
        // {
        //     console.log(snapshot.val());
        //     let obj = snapshot.val();
        //     console.log(obj);
        //     let arr = [];
        //     for(let key in obj){
        //         arr.push(obj[key]);
        //         console.log(arr);
        //     }
        dispatch({ type: ActionTypes.JOBCOMPANYUID, payload: uid })
        history.push("/companyjobs")

    }
}
//////////////////////////////////////Send Company UID////////////////////////////////////////////


//////////////////////////////////////Show Company Jobs////////////////////////////////////////////
export function ShowComJobs(uidJob) {
    console.log(uidJob)
    return dispatch => {
        firebase.database().ref(`jobPost/${uidJob}`).on('value', snapshot => {
            console.log(snapshot.val());
            let obj = snapshot.val();
            console.log(obj);
            let arr = [];
            for (let key in obj) {
                arr.push(obj[key]);
                console.log(arr);
            }
            dispatch({ type: ActionTypes.JOBCOMPANY, payload: arr })
            // history.push("/companyjobs")
        })
    }
}
//////////////////////////////////////Show Company Jobs////////////////////////////////////////////


//////////////////////////////////////Edit Profile////////////////////////////////////////////
export function editProfile(obj) {
    console.log(obj.username, obj.number, obj.email)
    return dispatch => {

        firebase.database().ref(`users/${obj.displayName}/${obj.uid}/`).update({
            username: obj.username,
            number: obj.number,
            // email: obj.email,
        })
    }
}
//////////////////////////////////////Edit Profile////////////////////////////////////////////


//////////////////////////////////////Apply Job////////////////////////////////////////////

export function applyJob(uid, uid1, uid2) {
    console.log(uid, uid1, uid2);
    return dispatch => {
        firebase.database().ref(`jobPost/${uid2}/${uid1}/Applications`).once('value').then(snapshot => {
            console.log(snapshot.val());
            let flag = false
            let obj = snapshot.val();
            for (let key in obj) {
                let data = obj[key].uid
                console.log(data.uid)
                if (data === uid) {
                    console.log(flag)
                    flag = true;
                    break;
                }
            }
            if (flag) {
                alert('You are already Applied')
            } else {
                firebase.database().ref(`users/student/${uid}/`).once('value', data => {
                    let dbdata = data.val()
                    firebase.database().ref(`jobPost/${uid2}/${uid1}/Applications/${uid}`).set(dbdata)
                    alert('applied succcesfully')
                })
            }

        })
    }
}



//////////////////////////////////////Apply Job////////////////////////////////////////////

//////////////////////////////////////Applied Students////////////////////////////////////////////
// export function appliedStudents(value){
//     console.log(value)
//     return dipatch => {

//     }
// }
//////////////////////////////////////Applied Students////////////////////////////////////////////
