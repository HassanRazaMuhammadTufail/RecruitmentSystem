import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ShowCompanyData } from '../store/action/action';
import { ShowComJobsUid } from '../store/action/action';
import history from '../History';
import Paper from 'material-ui/Paper';

const style = {
    height: 'auto',
    width: '70%',
    // padding: '0% 10% 0% 10%',
    margin: '2.5% 0% 2.5% 25%',
    textAlign: 'center',
    display: 'inline-block',
};


class CompanyData extends Component {



    ShowComJobsUid(uid){
        // console.log('hello')
        // console.log(uid);
        // this.props.ShowComJobsUid(uid);
        localStorage.setItem('uid',uid)
        history.push("/CompanyJobsForStudent")

    }
    componentDidMount() {
        this.props.ShowCompanyData();
    }
    render() {
        // console.log(this.props.companyData);
        return (
            <div style={{width:'70%', float:'left'}}> <h1>Company Data</h1>
                {/* let uid = value.uid */}
                {this.props.companyData.map((value,index)=>{
               return(
             <div key={index} onClick={this.ShowComJobsUid.bind(this,value.uid)} >
                <Paper style={style} zDepth={1} >
                    <ul>
                   
                   <li>{value.username}</li>
                   <li>{value.email}</li>
                   <li>{value.number}</li>
                

                    </ul>
                </Paper>
                <br />
             </div> 
        
                )})} 
        {/* {this.props.companyData.map((value,index)=>{
                 let job = value;
                let jobArr =[]
                 for(var key in job){
                    jobArr.push(job[key])
                 }
                 console.log(jobArr);
                for(var i=0;i<jobArr.length;i++){
                      return(
                                <li key={i}>{jobArr[i].email}</li>
                            )
                        
                }

                   
            })
            } */}

            </div >
        )
    }

}

function mapStateToProp(state) {
    // console.log(state.root.companyData)
    return ({
        companyData: state.root.companyData
    })
}

function mapDispatchToProp(dispatch) {
    return ({
        ShowCompanyData: () => { dispatch(ShowCompanyData()) },
        ShowComJobsUid: (uid) => { dispatch(ShowComJobsUid(uid)) }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(CompanyData);