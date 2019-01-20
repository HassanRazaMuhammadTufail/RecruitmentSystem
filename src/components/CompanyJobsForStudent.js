import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ShowComJobs,applyJob } from '../store/action/action';
import { Card, 
    // CardActions, CardHeader, CardText, 
    CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { currentStudent } from '../store/action/action';
import { signout } from '../store/action/action';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class CompanyJobsForStudent extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    signout() {
        this.props.signout()
    }
    componentWillMount() {
        var uid = localStorage.getItem('uid')
        this.props.ShowComJobs(uid);
        this.props.currentStudent();
    }
    // componentWillReceiveProps(){
    //     this.setState({
    //         uid:this.props.uidJob
    //     })
    // }

    apply(uid,uid1,uid2){
        console.log(uid,uid1,uid2);
        this.props.applyJob(uid,uid1,uid2);
    }
    
    render() {
        
        console.log(this.props.ComJobs)
        return (
            <div>
               <AppBar title="Jobs">
                 <RaisedButton label="signout" secondary={true} style={{margin:10,width:85,height:45}} className='menuButton' onClick={this.signout.bind(this)} />
                 </AppBar>
            <ul>

                    {this.props.ComJobs ?
                        this.props.ComJobs.map((value, index) => {
                            return (

                                <Card key={index} style={{margin:'5%'}}>
                                    <ul>
                                        <li>
                                        <CardTitle title="Job Position" subtitle={value.position} />
                                        
                                        </li>
                                        <li>
                                        <CardTitle title="Job Description" subtitle={value.description} />
                                            
                                        </li>
                                        <li>
                                        <CardTitle title="Employer's E-mail" subtitle={value.email} />
                                            
                                        </li>
                                        <li>
                                        <CardTitle title="Employer's Contact" subtitle={value.number} />
                                            
                                        </li>


                                    </ul>
                                    <FlatButton label="Apply Now !!!" onClick={this.apply.bind(this,this.props.student.uid,value.uid,value.useruid)} style={{width: '80%' , backgroundColor:'#90caf9', margin:'0% 10% 0% 10%'}} />
                                </Card>
                                )

                        })
                        :
                        null}
                </ul>
            </div>

        )
    }

}

function mapStateToProp(state) {
    console.log(state.root);
    return ({
        ComJobs: state.root.comJob,
        student: state.root.currentUser,
        //    uidJob: state.root.jobCompanyUid

    })
}
function mapDispatchToProp(dispatch) {
    return ({
        ShowComJobs: (uidJob) => { dispatch(ShowComJobs(uidJob)) },
        currentStudent: () => { dispatch(currentStudent()) },
        applyJob: (uid,uid1,uid2) => { dispatch(applyJob(uid,uid1,uid2)) },
        signout: () => {dispatch(signout())}
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(CompanyJobsForStudent);










