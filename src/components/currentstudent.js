import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentStudent,editProfile } from '../store/action/action';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class CurrentStudentData extends Component {
    constructor() {
        super();
        this.state = {
            flag: true,
            username:"",
            email:"",
            qualification:"",
            number:"",
            gender:"",
            displayName:"",
            uid:"",
        }
        
    }
    componentWillMount() {
        this.props.currentStudent();
    }

    componentWillReceiveProps(props){
        console.log(props.currentUser1);
        this.setState({
            username: props.currentUser1.username,
            email: props.currentUser1.email,
            qualification: props.currentUser1.qualification,
            gender: props.currentUser1.gender,
            number: props.currentUser1.number,
            displayName: props.currentUser1.displayName,
            uid: props.currentUser1.uid,
        })
        
    }
  
    editPro(){
        this.setState({
            flag:false,
            

        })
    }
    updatePro(){
        console.log(this.state);
        this.setState({
            flag: true,
        })
        let obj = {
            username: this.state.username,
            email: this.state.email,
            qualification: this.state.qualification,
            gender: this.state.gender,
            number: this.state.number,
            displayName: this.state.displayName,
            uid: this.state.uid
        }
        this.props.editProfile(obj);
    }

    changeHandler(ev){
        
           this.setState({
               [ev.target.name]:ev.target.value
           })
       
    }

    render() {
       

        return (
            (this.state.flag)?
          <div>
                <ul>
                    <li>Name: {this.state.username}</li>
                    <li>E-mail: {this.state.email}</li>
                    <li>Qualification: {this.state.qualification}</li>
                    <li>Number: {this.state.number}</li>
                    <li>Gender: {this.state.gender}</li>
                </ul>
                <br />
                
                <RaisedButton className='menuButton' label="Edit Profile" onClick={this.editPro.bind(this)} />
                </div>
                :
                <div>
                <ul>
                    <li>Name: <TextField
                    name='username'
                    defaultValue={this.state.username}
                        // floatingLabelText="Edit your Name"
                        onChange={this.changeHandler.bind(this)}
                    /><br />
                    </li>
                    {/* <li>E-mail: <TextField
                    name='email'
                    defaultValue={this.state.email}
                        // floatingLabelText="Edit your E-mail"
                        onChange={this.changeHandler.bind(this)}
                    /><br />
                    </li> */}
                    <li>Qualification: <TextField
                    name='email'
                    defaultValue={this.state.qualification}
                        // floatingLabelText="Edit your Qualification"
                        onChange={this.changeHandler.bind(this)}
                    /><br />
                    </li>
                    <li>Number: <TextField
                    name='number'
                    value={this.state.number}
                        // floatingLabelText="Edit your Number"
                        onChange={this.changeHandler.bind(this)}
                     /><br />
                    </li>
                    {/* <li>Gender: <TextField
                    name='gender'
                    value={this.state.gender}
                        floatingLabelText="Edit your Gender"
                        onChange={this.changeHandler.bind(this)}
                    /><br />
                    </li> */}
                   
                </ul>
                <br />
                <RaisedButton className='menuButton' label="Update" onClick={this.updatePro.bind(this)}/>
                </div>

        )
    }
}

function mapStateToProp(state) {
    // console.log(state.root.currentUser)
    return ({
        currentUser1: state.root.currentUser,
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        currentStudent: () => { dispatch(currentStudent()) },
        editProfile: (obj) => {dispatch(editProfile(obj))}
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(CurrentStudentData);