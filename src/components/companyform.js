import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { companySignupAction } from '../store/action/action';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { postJob } from "../store/action/action";


const style = {
   
    margin: 40,
    padding: 40,
    textAlign: 'left',
   
  };


class JobForm extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            number: '',
            position: '',
            description: '',
        }
    }
       onChangeHandler(ev) {
        
            this.setState({
                [ev.target.name]: ev.target.value

            })
        
    }

    postJob() {
        let job = {
            email: this.state.email,
            username: this.state.username,
            number: this.state.number,
            position: this.state.position,
            description: this.state.description
           
            
        }
        this.setState({
            email: '',
            username: '',
            number:'',
            position: '',
            description: '',
           
        })
        if(job.email!==''&&job.username!==''&&job.number!==''&&job.position!==''){
        
        this.props.postJob(job);
        console.log('company information',job)
        }
        else{
            alert("All fields are required!");
        }
    }


    render() {
        return (
            <Paper style={style} zDepth={3}>
            <div>
                <h1>Job Posting Form</h1>
                <TextField hintText="Position" floatingLabelText="Position" refs='position' value={this.state.position} name='position' onChange={this.onChangeHandler.bind(this)} />
                <br />
                <TextField hintText="Requirements, Salary etc" floatingLabelText="Job Description" refs='description' value={this.state.description} name='description' onChange={this.onChangeHandler.bind(this)} multiLine={true} rows={4} />
                <br />
                <TextField hintText="Company Name" floatingLabelText="Company Name"  refs='username' value={this.state.username} name='username' onChange={this.onChangeHandler.bind(this)}/> 
                <br />
                <TextField hintText="abc@gmail.com" floatingLabelText="Company E-mail" refs='email' value={this.state.email} name='email' onChange={this.onChangeHandler.bind(this)} />
                <br />
                <TextField hintText="0213-*******" floatingLabelText="Phone no" refs='number' value={this.state.number} name='number' onChange={this.onChangeHandler.bind(this)}/> 
                
                <br /><br />
                <RaisedButton label="Post A Job" primary={true}  onClick={this.postJob.bind(this)}  />
                
            </div>
            </Paper>
        )

    }
}

function mapStateToProp(state) {
    return ({
        
    })
}
function mapDispatchToProp(dispatch) {
    return ({
       
        postJob: (job)=>{
            dispatch(postJob(job));
        }
    })
}





export default connect(mapStateToProp, mapDispatchToProp)(JobForm);


