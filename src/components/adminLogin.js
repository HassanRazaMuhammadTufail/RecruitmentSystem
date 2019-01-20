import React, { Component } from 'react';
import { connect } from 'react-redux';


import { adminLogin } from '../store/action/action';


import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
   width: '35%',
   
    margin: 40,
    padding: 40,
    textAlign: 'left',
   
  };


class AdminLogin extends Component {
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
        let admin = {
            email: this.state.email,
            password: this.state.password,
            // displayName:'admin'
        }
        this.setState({
            email: '',
            password: ''
        })
        this.props.adminLogin(admin);
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
                <h1>Admin Login</h1>
               
                <TextField hintText="abc@gmail.com" floatingLabelText="E-mail"name='email' value={this.state.email} onChange={this._onChangeEmail} />
                <br />
                <TextField type='password' hintText="Password ..." floatingLabelText="Password" name='password' value={this.state.password} onChange={this._onChangePassword} />
                <br /><br />
                <RaisedButton label="Signin" primary={true}   onClick={this.signin}  />
                 
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
    
        adminLogin: (admin)=>{
            dispatch(adminLogin(admin))
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(AdminLogin);

