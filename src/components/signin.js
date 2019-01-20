import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {signinAction} from '../store/action/action';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
    width: '35%',
    margin: 40,
    padding: 40,
    textAlign: 'left',
   
  };


class Signin extends Component {
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
        let user = {
            email: this.state.email,
            password: this.state.password,
            displayName:'student'
        }
        this.setState({
            email: '',
            password: ''
        })
        this.props.signinWithEmailPassword(user);
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
                <h1>Signin</h1>
                <TextField hintText="abc@gmail.com" floatingLabelText="E-mail"name='email' value={this.state.email} onChange={this._onChangeEmail} />
                <br />
                {/* <label>Email:<input type='text' name='email' value={this.state.email} onChange={this._onChangeEmail} /></label>
                <br /> */}
                <TextField type='password' hintText="Password ..." floatingLabelText="Password" name='password' value={this.state.password} onChange={this._onChangePassword} />
                <br /><br />
                {/* <label>Password:<input type='password' name='password' value={this.state.password} onChange={this._onChangePassword}/></label> */}
                {/* <button onClick={this.signin}>Signin</button> */}
                <RaisedButton label="Signin" primary={true}   onClick={this.signin}  /> didn't have account? <Link to='/signup'> Let's create one</Link>
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
        signinWithEmailPassword: (user)=>{
            dispatch(signinAction(user))
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Signin);

