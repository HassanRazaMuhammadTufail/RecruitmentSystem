import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { companySignupAction } from '../store/action/action';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
    
    width: '35%',
    margin: 40,
    padding: 40,
    // textAlign: 'left',
   
  };


class CompanySignup extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            number: '',
            password: '',
            Conpassword:'',
        }
    }
       onChangeHandler(ev) {
        
            this.setState({
                [ev.target.name]: ev.target.value

            })
        
    }

    signup() {
        let company = {
            email: this.state.email,
            username: this.state.username,
            number: this.state.number,
            password: this.state.password,
            Conpassword: this.state.Conpassword,
            displayName: 'company'
        }
        this.setState({
            email: '',
            username: '',
            number:'',
            password: '',
            Conpassword:''
        })
        if(company.email!==''&&company.username!==''&&company.number!==''&&company.password!==''&&company.Conpassword!==''){
        if(company.password===company.Conpassword){
        this.props.companySignup(company);
        console.log('company information',company)}
        else{
            alert("Password Didn't match!");
        }}
        else{
            alert("All fields are required!");
        }
    }


    render() {
        return (
            <Paper style={style} zDepth={3}>
            <div>
                <h1>Signup Form</h1>
                <TextField hintText="Company Name" floatingLabelText="Company Name"  refs='username' value={this.state.username} name='username' onChange={this.onChangeHandler.bind(this)}/> 
                <br />
                <TextField hintText="abc@gmail.com" floatingLabelText="Company E-mail" refs='email' value={this.state.email} name='email' onChange={this.onChangeHandler.bind(this)} />
                <br />
                <TextField hintText="0213-*******" floatingLabelText="Phone no" refs='number' value={this.state.number} name='number' onChange={this.onChangeHandler.bind(this)}/> 
                <br />
                {/* <TextField hintText="Age" floatingLabelText="Age" refs='age' value={this.state.age} name='age' onChange={this.onChangeHandler.bind(this)}/> */}
                <br />
                <TextField hintText="Password ..." floatingLabelText="Password" type="password" refs='password' value={this.state.password} name='password' onChange={this.onChangeHandler.bind(this)} />
                <br />
                <TextField hintText="Password ..." floatingLabelText="Confirm Password" type="password" refs='Conpassword' value={this.state.Conpassword} name='Conpassword' onChange={this.onChangeHandler.bind(this)} />
                <br />
                 {/* <SelectField floatingLabelText="Gender" value={this.state.gender} onChange={this.handleChange} autoWidth={true}>
                    <MenuItem value={"Male"} primaryText="Male" />
                    <MenuItem value={"Female"} primaryText="Female" />
                    <MenuItem value={"Other"} primaryText="Other" />
                </SelectField> */}
                <br /><br />
                <RaisedButton label="Signup" primary={true}  onClick={this.signup.bind(this)}  /> or have one? <Link to='/signin'>Let's start</Link>
                
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
       
        companySignup: (company)=>{
            dispatch(companySignupAction(company));
        }
    })
}





export default connect(mapStateToProp, mapDispatchToProp)(CompanySignup);

























