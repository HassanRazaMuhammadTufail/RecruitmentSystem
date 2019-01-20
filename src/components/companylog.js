import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { companyLoginAction } from '../store/action/action';


import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
    width: '35%',
    margin: 40,
    padding: 40,
    textAlign: 'left',
   
  };


class CompanyLogin extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            email: '',
            password: ''
        }


        this.signin = this.signin.bind(this);
        this._onChangeEmail = this._onChangeEmail.bind(this);
        this._onChangePassword = this._onChangePassword.bind(this);

    }

    signin() {
        let company = {
            email: this.state.email,
            password: this.state.password,
            displayName:'company'
        }
        this.setState({
            email: '',
            password: ''
        })
        this.props.companyLogin(company);
    }
    _onChangeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    _onChangePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    render() {
        return (
            <Paper style={style} zDepth={3}>
            <div>
                <h1>Company Login</h1>
                <TextField hintText="abc@gmail.com" floatingLabelText="E-mail"name='email' value={this.state.email} onChange={this._onChangeEmail} />
                <br />
                <TextField type='password' hintText="Password ..." floatingLabelText="Password" name='password' value={this.state.password} onChange={this._onChangePassword} />
                <br /><br />
                <RaisedButton label="Signin" primary={true}   onClick={this.signin}  /> didn't have account? <Link to='/companysignup'> Let's create one</Link>
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
    
        companyLogin: (company)=>{
            dispatch(companyLoginAction(company))
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(CompanyLogin);

