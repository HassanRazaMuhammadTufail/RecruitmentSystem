



import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StudentData from "./studentData";
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import './component.css';
import CurrentCompanyData from './currentCompany';
import CompanyJobsForCompany from './CompanyJobsForCompany';
import JobForm from './companyform';
import { signout } from '../store/action/action';
import { Tabs, Tab } from 'material-ui/Tabs';
// import FlatButton from 'material-ui/FlatButton';
// import IconButton from 'material-ui/IconButton';
// import Avatar from 'material-ui/Avatar';
// import logout from'../images/logout.png';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';

// const styles = {
//     headline: {
//         fontSize: 24,
//         paddingTop: 16,
//         marginBottom: 12,
//         fontWeight: 400,
//     },
// };

class CompanyPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            value: 'a',
        };
    }
    signout() {
        this.props.signout()
    }
    handleToggle = () => this.setState({ open: !this.state.open });
    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    componentWillMount = () => {
        localStorage.setItem("page" , "/companypanel")
    }
    render() {
        return (
            <div>
                <AppBar title="Home" onLeftIconButtonClick={this.handleToggle} >
                <RaisedButton label="signout" secondary={true} style={{margin:10,width:85,height:45}} className='menuButton' onClick={this.signout.bind(this)} />
                {/* <RaisedButton label="Post a Job" secondary={true} style={{margin:10,width:85,height:45}} className='menuButton' onClick={} /> */}
                </AppBar>
                {/* <RaisedButton className='menuButton' label="Toggle Drawer" onClick={this.handleToggle} /> */}
                <Drawer open={this.state.open} containerStyle={{height:'90%',width:'19%',margin:'10% 0% 0% 0%'}}>
                    <MenuItem><h2>Company Profile</h2></MenuItem>
                    <MenuItem><CurrentCompanyData /></MenuItem>
                </Drawer>




                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <Tab label="Student's Data" value="a">
                        <div>
                            <StudentData />
                            {/* <h2 style={styles.headline}>Controllable Tab A</h2>
                <p>
                  Tabs are also controllable if you want to programmatically pass them their values.
                  This allows for more functionality in Tabs such as not
                  having any Tab selected or assigning them different values.
                </p> */}
                        </div>
                    </Tab>
                    <Tab label="Posted Job's" value="b">
                        <div>
                            <CompanyJobsForCompany />
                            
                        </div>
                    </Tab>
                    <Tab label="Post A Job" value="c">
                        <div>
                            <JobForm />
                            
                        </div>
                    </Tab>
                </Tabs>





                {/* <CompanyJobs />
            <StudentData /> */}
            </div>
        )
    }
}

function mapDispatchToProp(dispatch) {
    return ({

        signout: () => dispatch(signout())
    })
}

export default connect(null, mapDispatchToProp)(CompanyPanel);











// import React from 'react';

// export default class TabsExampleControlled extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: 'a',
    //     };
    // }


    // render() {
        // return (
        // );
    // }
// }









// import React from 'react';
// import AppBar from 'material-ui/AppBar';

// function handleClick() {
//   alert('onClick triggered on the title component');
// }

// const styles = {
//   title: {
//     cursor: 'pointer',
//   },
// };

// /**
//  * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
//  * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
//  */
// const AppBarExampleIconButton = () => (
//   <AppBar
//     title={<span style={styles.title}>Title</span>}
//     onTitleClick={handleClick}
//     iconElementLeft={<IconButton><NavigationClose /></IconButton>}
//     iconElementRight={<FlatButton label="Save" />}
//   />
// );

// export default AppBarExampleIconButton;