import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signupAction } from '../store/action/action';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const style = {
    width: '35%',
    margin: 40,
    padding: 40,
    textAlign: 'left',
   
  };


class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            qualification: '',
            number: '',
            age: '',
            gender:'',
            password: '',
            Conpassword:'',
        }
    }
    handleChange = (event, index, gender) => this.setState({gender});
    onChangeHandler(ev) {
        
            this.setState({
                [ev.target.name]: ev.target.value

            })
        
    }

    signup() {
        let user = {
            email: this.state.email,
            username: this.state.username,
            qualification: this.state.qualification,
            number: this.state.number,
            age: this.state.age,
            gender: this.state.gender,
            password: this.state.password,
            Conpassword: this.state.Conpassword,
            displayName: 'student'
        }
        this.setState({
            email: '',
            username: '',
            qualification: '',
            number:'',
            age:'',
            gender:'',
            password: '',
            Conpassword:''
        })
        if(user.email!==''&&user.username!==''&&user.qualification!==''&&user.number!==''&&user.age!==''&&user.password!==''&&user.Conpassword!==''){
        if(user.password===user.Conpassword){
        this.props.signupwithEmailPassword(user);
        console.log('user information',user)}
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
                <TextField hintText="Your Name" floatingLabelText="Username"  refs='username' value={this.state.username} name='username' onChange={this.onChangeHandler.bind(this)}/> 
                <br />
                <TextField hintText="abc@gmail.com" floatingLabelText="E-mail" refs='email' value={this.state.email} name='email' onChange={this.onChangeHandler.bind(this)} />
                <br />
                <TextField hintText="B.Sc, B.E, M.Sc ..." floatingLabelText="Qualification" refs='qualification' value={this.state.qualification} name='qualification' onChange={this.onChangeHandler.bind(this)} />
                <br />
                <TextField hintText="+92***-*******" floatingLabelText="Contact no" refs='number' value={this.state.number} name='number' onChange={this.onChangeHandler.bind(this)}/> 
                <br />
                <TextField hintText="Age" floatingLabelText="Age" refs='age' value={this.state.age} name='age' onChange={this.onChangeHandler.bind(this)}/>
                <br />
                <TextField hintText="Password ..." floatingLabelText="Password" type="password" refs='password' value={this.state.password} name='password' onChange={this.onChangeHandler.bind(this)} />
                <br />
                <TextField hintText="Password ..." floatingLabelText="Confirm Password" type="password" refs='Conpassword' value={this.state.Conpassword} name='Conpassword' onChange={this.onChangeHandler.bind(this)} />
                <br />
                 <SelectField floatingLabelText="Gender" value={this.state.gender} onChange={this.handleChange} autoWidth={true}>
                    <MenuItem value={"Male"} primaryText="Male" />
                    <MenuItem value={"Female"} primaryText="Female" />
                    <MenuItem value={"Other"} primaryText="Other" />
                </SelectField>
                <br /><br />
                <RaisedButton label="Signup" primary={true}  onClick={this.signup.bind(this)}  /> or have one? <Link to='/signin'>Let's start</Link>
                
            </div>
            </Paper>
        )

    }
}

function mapStateToProp(state) {
    return ({
        // userName: state.root.userName
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
        signupwithEmailPassword: (userDetails)=>{
            dispatch(signupAction(userDetails));
        }
    })
}





export default connect(mapStateToProp, mapDispatchToProp)(Signup);

























