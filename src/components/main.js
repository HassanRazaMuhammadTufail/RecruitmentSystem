import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
    margin: 12,
    textAlign: 'left',
};
const stylo = {
    margin: 12,
    textAlign: 'center',
};
  const stylee = {
    marginLeft: 120,
    marginRight: 120,
    marginTop: 12,
    textAlign: 'center',
};

class Main extends Component{
    
    render(){
        return(
            <div>
                 <AppBar
    title="Campus Recruitment System"
    iconClassNameRight=""
    showMenuIconButton= {false}
    style={stylo}
  />
  <Paper style={stylee} zDepth={2}>
                {/* <h1>Campus Recruitment System</h1> */}
                <Link to='/signin'><RaisedButton label="S t u d e n t" secondary={true} style={style} /></Link><br />
                <Link to='/companyLogin'><RaisedButton label="Company Member" primary={true} style={style} /></Link>
                {/* <Link to='/signin'>Student</Link>
                <Link to='/companyLogin'>Company Member</Link> */}
                </Paper>
            </div>
        )
    }
}


export default connect(null, null)(Main);