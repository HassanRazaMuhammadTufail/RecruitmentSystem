import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { currentCompany,editProfile } from '../store/action/action';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
    margin: 12,
  };

class CurrentCompanyData extends Component{
    constructor() {
        super();
        this.state = {
            flag: true,
            username:"",
            email:"",
            number:"",
            // gender:"",
            displayName:"",
            uid:"",
        }
        
    }




    componentWillMount(){
        this.props.currentCompany();
    }

    componentWillReceiveProps(props){
        console.log(props.currentCompanyUser);
        this.setState({
            username: props.currentCompanyUser.username,
            email: props.currentCompanyUser.email,
            // gender: props.currentUser1.gender,
            number: props.currentCompanyUser.number,
            displayName: props.currentCompanyUser.displayName,
            uid: props.currentCompanyUser.uid,
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


    render(){
        console.log(this.props.currentCompanyUser)
        return(
            (this.state.flag) ?
            <div>
            <ul>
            <li>Name: {this.state.username}</li>
            <li>E-mail: {this.state.email}</li>
            <li>Number: {this.state.number}</li>
            {/* <li>Gender: {this.state.gender}</li> */}
            </ul>
            <RaisedButton className='menuButton' label="Edit" style={style} onClick={this.editPro.bind(this)} />
            </div>
            :
            <div>
                <ul>
                    <li>Name:<TextField
                    name='username'
                    defaultValue={this.state.username}
                        floatingLabelText="Edit your Name"
                        onChange={this.changeHandler.bind(this)}
                    /><br />
                    </li>
                    {/* <li>E-mail: <TextField
                    name='email'
                    defaultValue={this.state.email}
                        floatingLabelText="Edit your E-mail"
                        onChange={this.changeHandler.bind(this)}
                    /><br />
                    </li> */}
                    <li>Number: <TextField
                    name='number'
                    value={this.state.number}
                        floatingLabelText="Edit your Number"
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




function mapStateToProp(state){
    console.log(state.root.currentCompany)
    return({
        currentCompanyUser: state.root.currentCompany,
    })
}
function mapDispatchToProp(dispatch){
    return({
        currentCompany : () => {dispatch(currentCompany())},
        editProfile: (obj) => {dispatch(editProfile(obj))}
    })
}

export default connect(mapStateToProp,mapDispatchToProp)(CurrentCompanyData);