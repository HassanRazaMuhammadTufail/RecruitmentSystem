import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, 
    // CardActions, CardHeader, CardText,
     CardTitle } from 'material-ui/Card';
import { ShowStudentData } from '../store/action/action';

class StudentData extends Component {

    componentDidMount() {
        this.props.ShowStudentData();
    }
    render(){
        console.log(this.props.studentData);
        return(
           <div> <h1>Student Data</h1>
            {this.props.studentData.map((value,index)=>{
                return(
                    <Card key={index} style={{margin:'auto',width:'65%'}}>
                <ul>
                    <li>
                    <CardTitle title="Student Name" subtitle={value.username} />
                   
                    </li>
                    <li>
                    <CardTitle title="Student Email" subtitle={value.email} />
                   
                    </li>
                    <li>
                    <CardTitle title="Student Contact" subtitle={value.number} />
                   
                    </li>
                </ul>
                </Card>
                )
            })}
            <br />
            <br />
            {/* <Link to='/jobForm'>Post A Job</Link> */}
            </div>
        )
    }

}

function mapStateToProp(state) {
    console.log(state.root.studentData)
    return ({
        studentData: state.root.studentData
    })
}

function mapDispatchToProp(dispatch) {
    return ({
        ShowStudentData: () => {
            dispatch(ShowStudentData());
        }

    })
}

export default connect(mapStateToProp, mapDispatchToProp)(StudentData);