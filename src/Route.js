import React, { Component } from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import './App.css'
import history from './History';
import firebase from 'firebase';
import { connect } from 'react-redux';



// import Home from './components/home.js';
// import studentpage from './components/studentpage';
// import companypage from './components/companypage';
// import admin from './components/admin';
// import Jobpost from './components/jobpost';
// import Studentdata from './components/studentdata';
// import Companydata from './components/companydata';
// import Adminsignin from './components/adminsignin';
// import StudentProfile from "./components/studentprofile"
// import Companyprofile from "./components/companyprofile"
// import MycompanyPostedJobs from "./components/mycompanypostedjobs"
// import Notfound from './components/notFound';

// import Home from './components/home';
import Signup from './components/signup';
import Signin from './components/signin';
import CompanyLogin from "./components/companylog";
import CompanySignup from "./components/signup-member";
import Main from "./components/main";
import AdminLogin from "./components/adminLogin";
import AdminPanel from "./components/adminpanel";
import CompanyData from './components/companyData';
import StudentData from './components/studentData';
import StudentPanel from './components/studentPanel';
import CompanyPanel from './components/companyPanel';
import JobForm from "./components/companyform";
import CompanyJobsForStudent from "./components/CompanyJobsForStudent";
import CompanyJobsForCompany from "./components/CompanyJobsForCompany"


function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
        />
    )
}

class Routers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authed: false,
            loader: false,
        }
    }



componentWillReceiveProps = (props) => {
    if(props.authed1){
        console.log(props.authed1)
        this.setState({
            authed : props.authed1
        })
    }
}

    componentWillMount() {
        let that = this
        let uide = localStorage.getItem("uid")
        if (uide) {
            console.log(uide)
      that.setState({
                authed: true,
            })
            let type = localStorage.getItem("page")
            console.log(type)
            history.push(type)
        }

        else {
            console.log(uide)
            that.setState({
                authed: false
            })
        }
        // }    );
    }



    render() {
        console.log(this.state.authed)
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Main} />

                        <Route path="/signup" component={Signup} />
                        <Route path="/companysignup" component={CompanySignup} />

                        <Route path="/admin" component={AdminLogin} />
                        <Route path="/signin" component={Signin} />
                        <Route path="/companylogin" component={CompanyLogin} />

                        <PrivateRoute authed={this.state.authed} path='/studentpanel' component={StudentPanel} />
                        <PrivateRoute authed={this.state.authed} path='/companypanel' component={CompanyPanel} />
                        <PrivateRoute authed={this.state.authed} path="/adminpanel" component={AdminPanel} />

                        <PrivateRoute authed={this.state.authed} path="/companyData" component={CompanyData} />
                        <PrivateRoute authed={this.state.authed} path="/studentData" component={StudentData} />

                        <PrivateRoute authed={this.state.authed} path="/jobform" component={JobForm} />

                        <PrivateRoute authed={this.state.authed} path="/CompanyJobsForStudent" component={CompanyJobsForStudent} />
                        <PrivateRoute authed={this.state.authed} path="/CompanyJobsForCompany" component={CompanyJobsForCompany} />
                    </Switch >
                </Router>
            </div>
        )

    }
}
function mapStateToProp(state) {
    console.log(state.root.authed)
    return ({
        authed1: state.root.authed
    })
}

export default connect(mapStateToProp, null)(Routers);









// function PrivateRoute3({ component: Component, authed, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render={(props) => authed === true
//                 ? <Component {...props} />
//                 : <Redirect to={{ pathname: '/studentpage', state: { from: props.location } }} />}
//         />
//     )
// }


// function PrivateRoute4({ component: Component, authed, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render={(props) => authed === true
//                 ? <Component {...props} />
//                 : <Redirect to={{ pathname: '/studentpage', state: { from: props.location } }} />}
//         />
//     )
// }


// function PrivateRoute5({ component: Component, authed, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render={(props) => authed === true
//                 ? <Component {...props} />
//                 : <Redirect to={{ pathname: '/companypage', state: { from: props.location } }} />}
//         />
//     )
// }


// function PrivateRoute6({ component: Component, authed, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render={(props) => authed === true
//                 ? <Component {...props} />
//                 : <Redirect to={{ pathname: '/companypage', state: { from: props.location } }} />}
//         />
//     )
// }


// function PrivateRoute7({ component: Component, authed, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render={(props) => authed === true
//                 ? <Component {...props} />
//                 : <Redirect to={{ pathname: '/adminsignin', state: { from: props.location } }} />}
//         />
//     )
// }



// function PrivateRoute8({ component: Component, authed, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render={(props) => authed === true
//                 ? <Component {...props} />
//                 : <Redirect to={{ pathname: '/companypage', state: { from: props.location } }} />}
//         />
//     )
// }




//                 <Router history={history}>
//                     <Switch>
//                         <Route exact path="/" component={Home} />
//                         <Route path="/studentpage" component={studentpage} />
//                         <Route path="/companypage" component={companypage} />
//                         <Route path="/adminsignin" component={Adminsignin} />
//                         <PrivateRoute2 authed={this.state.authed} path="/companydata" component={Companydata} />
//                         <PrivateRoute3 authed={this.state.authed} path="/studentdata" component={Studentdata} />
//                         <PrivateRoute4 authed={this.state.authed} path="/studentprofile" component={StudentProfile} />
//                         <PrivateRoute5 authed={this.state.authed} path="/companyprofile" component={Companyprofile} />
//                         <PrivateRoute6 authed={this.state.authed} path="/jobpost" component={Jobpost} />
//                         <PrivateRoute7 authed={this.state.authed} path="/admin" component={admin} />
//                         <PrivateRoute8 authed={this.state.authed} path="/mycompanypostedjobs" component={MycompanyPostedJobs} />
//                         <Route path="*" component={Notfound} />
//                     </Switch>
//                 </Router>