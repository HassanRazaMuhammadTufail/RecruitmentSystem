import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    signout,
    ShowCompanyData,
    ShowStudentData,
    ShowCompanyJobs,
    studentdelete,
    companydelete,
    jobsdelete } from '../store/action/action';
    import RaisedButton from 'material-ui/RaisedButton';
    import {
        Table,
        TableBody,
        TableHeader,
        TableHeaderColumn,
        TableRow,
        TableRowColumn,
    } from 'material-ui/Table';
    
    class AdminPanel extends Component{
        // componentWillMount = () => {
           
        // }
        
        componentWillMount() {
            localStorage.setItem("page" , "/adminpanel")
            this.props.ShowStudentData(); 
            this.props.ShowCompanyData();
            this.props.ShowCompanyJobs();
            
        }
        
                
                
                studentdelete(value){
                    console.log(value)
                    this.props.studentdelete(value);
                }
                companydelete(value){
                    console.log(value)
                    this.props.companydelete(value);
                }
                jobsdelete(valueuid,valueuseruid){
                    console.log(valueuid,valueuseruid)
                    this.props.jobsdelete(valueuid,valueuseruid);
                }
                
                signout() {
                    this.props.signout()
                }  
                
                
                
                render(){
                    // console.log(this.props.studentData);
                    // console.log(this.props.jobs);
        return(
            
            <div>
               
               <h1>Admin Panel</h1>
               <RaisedButton label="signout" secondary={true} style={{margin:10,width:85,height:45}} className='menuButton' onClick={this.signout.bind(this)} />
               
               
               
                <h1>Student Data</h1>
        <Table >
          <TableHeader  adjustForCheckbox={false} displaySelectAll={false}> 
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>E-mail</TableHeaderColumn>
              <TableHeaderColumn>Number</TableHeaderColumn>
              <TableHeaderColumn>Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody  displayRowCheckbox={false}>
                {this.props.studentData.map((value,index)=>{
                    return(
                        <TableRow key={index}>
              <TableRowColumn>{value.username}</TableRowColumn>
              <TableRowColumn>{value.email}</TableRowColumn>
              <TableRowColumn>{value.number}</TableRowColumn>
              {console.log(value.uid)}
              <TableRowColumn><button onClick={this.studentdelete.bind(this,value.uid)} >delete</button></TableRowColumn>
            </TableRow>
            )
        })}
        </TableBody>
      </Table>
            <br />
            <br />
            <h1>Company Data</h1>
                <Table >
          <TableHeader  adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
            {/* <TableHeaderColumn>Position</TableHeaderColumn> */}
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>E-mail</TableHeaderColumn>
              <TableHeaderColumn>Number</TableHeaderColumn>
              <TableHeaderColumn>Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody  displayRowCheckbox={false}>
               {this.props.companyData.map((value,index)=>{
                   return(
               
                        <TableRow key={index}>
              {/* <TableRowColumn>{value.position}</TableRowColumn> */}
              <TableRowColumn>{value.username}</TableRowColumn>
              <TableRowColumn>{value.email}</TableRowColumn>
              <TableRowColumn>{value.number}</TableRowColumn>
              {console.log(value.uid)}
              <TableRowColumn><button onClick={this.companydelete.bind(this,value.uid)}>delete</button></TableRowColumn>
            </TableRow>
            )
        })}
        </TableBody>
      </Table>

              
           
           <br />
            <br />
            <h1>Company Jobs</h1>


            <Table >
          <TableHeader  adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
            <TableHeaderColumn>Position</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>E-mail</TableHeaderColumn>
              <TableHeaderColumn>Number</TableHeaderColumn>
              <TableHeaderColumn>Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody  displayRowCheckbox={false}>
               {/* {this.props.companyData.map((value,index)=>{
                   return( */}
                       {this.props.jobs.map((value,index)=>{
                           return(
               
                        <TableRow key={index}>
              <TableRowColumn>{value.position}</TableRowColumn>
              <TableRowColumn>{value.description}</TableRowColumn>
              <TableRowColumn>{value.email}</TableRowColumn>
              <TableRowColumn>{value.number}</TableRowColumn>
              {console.log(value.uid,value.useruid)}
              <TableRowColumn><button onClick={this.jobsdelete.bind(this,value.uid,value.useruid)}>delete</button></TableRowColumn>
            </TableRow>
            )
        })}
        </TableBody>
      </Table>



               {/* <ul key={index}>
                   <li>{value.position}</li>
                   <li>{value.description}</li>
                   <li>{value.email}</li>
                   <li>{value.number}</li>
                   {console.log(value.uid,value.useruid)}
                   <button onClick={this.jobsdelete.bind(this,value.uid,value.useruid)}>delete</button>
                   </ul>
                    //    value.map((val,index) => {
                        //        return console.log(val)
                        //    })
                    )
                })} */}
            </div>
        )
    }
    
}

function mapStateToProp(state) {
    console.log(state.root.studentData)
    return ({
        studentData: state.root.studentData,
        companyData: state.root.companyData,
        jobs: state.root.jobs,
    })
}

function mapDispatchToProp(dispatch) {
    return ({
        ShowCompanyData:()=>{dispatch(ShowCompanyData())},
        ShowStudentData:()=>{dispatch(ShowStudentData())},
        ShowCompanyJobs:()=>{dispatch(ShowCompanyJobs())},
        studentdelete:(value)=>{dispatch(studentdelete(value))},
        companydelete:(value)=>{dispatch(companydelete(value))},
        signout: () => dispatch(signout()),
        jobsdelete:(valueuid,valueuseruid)=>{dispatch(jobsdelete(valueuid,valueuseruid))}
    })
}




export default connect(mapStateToProp, mapDispatchToProp)(AdminPanel);


































































