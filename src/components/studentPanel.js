import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CompanyData from "./companyData";
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// import Card from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './component.css';
import CurrentStudentData from './currentstudent';
import { signout } from '../store/action/action';

class StudentPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            // flag: true,
            // buttonLabel: "Edit Profile",
            // update:false,
        };
    }

    componentWillMount = () => {
        localStorage.setItem("page" , "/studentpanel")
    }
    signout() {
        this.props.signout()
    }
    handleToggle = () => this.setState({ open: !this.state.open });
    // editProfile = () => {
    //     this.setState({
    //         flag: false,
    //         buttonLabel:'Update'
          
    //     });
    //     console.log(this.state);
    // };
    // UpdateProfile(){
    //     this.setState({
    //         // update:true,
    //         flag:true,
    //         buttonLabel:'Edit Profile'
    //     })
    //     console.log(this.state);
    // }

    render() {
        return (
            <div>
                 <AppBar title="Home" onLeftIconButtonClick={this.handleToggle}>
                 <RaisedButton label="signout" secondary={true} style={{margin:10,width:85,height:45}} className='menuButton' onClick={this.signout.bind(this)} />
                 </AppBar>
                {/* <RaisedButton className='menuButton' label="Toggle Drawer" onClick={this.handleToggle} /> */}
                <Drawer open={this.state.open} containerStyle={{height:'90%',width:'19%',margin:'10% 0% 0% 0%'}} >
                   
                    <MenuItem><h1>Your Profile</h1></MenuItem>
                    <MenuItem><CurrentStudentData

                    // flag={this.state.flag} update={this.state.update}
                    /></MenuItem>
                   
                    {/* <MenuItem>{(this.state.buttonLabel === "Edit Profile") ? <RaisedButton className='menuButton' label="Edit Profile" onClick={this.editProfile.bind(this)} /> : <RaisedButton className='menuButton' label="Update" onClick={this.UpdateProfile.bind(this)} />}</MenuItem> */}
                </Drawer>
                <CompanyData />
            </div>
        )
    }
}

function mapDispatchToProp(dispatch) {
    return ({

        signout: () => dispatch(signout())
    })
}

export default connect(null, mapDispatchToProp)(StudentPanel);