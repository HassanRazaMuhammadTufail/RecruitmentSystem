import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {signout} from '../store/action/action';
// import StudentData from "./studentData";
// import CompanyData from "./companyData";
// import {changeUserName} from '../store/action/action';
class Home extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         StudentFlag: false,
    //         CompanyFlag: false,
    //     }
    // }
    signout(){
        this.props.signout()
    }

    // onClickStudent(){
    //     this.setState({
    //         StudentFlag: true,
    //         CompanyFlag: false,
    //     })
    // }

    //  onClickCompany(){
    //     this.setState({
    //         StudentFlag: false,
    //         CompanyFlag: true,
    //     })
    // }




    render() {
        return (
            <div>
                <h1>Hello World </h1>
                {/* <Link to='/'>Go to Main</Link>
                <button onClick={this.onClickStudent.bind(this)} >Student Data</button>
                <button onClick={this.onClickCompany.bind(this)} >Company Data</button>
               { (this.state.StudentFlag === true )
               ?
               <StudentData />
               
               :
               null}
               { (this.state.CompanyFlag === true )
               ?
               <CompanyData />
               
               :
               null}

                 */}
                <button onClick={this.signout.bind(this)}>Signout</button>
            </div>
        )
    }
}

function mapStateToProp(state){
    return({
        
    })
}
function mapDispatchToProp(dispatch){
    return({
    
    signout: ()=>dispatch(signout())
    })
}

export default connect(mapStateToProp,mapDispatchToProp)(Home);

