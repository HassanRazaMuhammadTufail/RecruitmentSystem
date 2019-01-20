import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ShowComJobs,appliedStudents } from '../store/action/action';
import {
    Card,
    // CardActions, CardHeader, CardText, 
    CardTitle
} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
// import IconButton from 'material-ui/IconButton';
import notice from '../images/ic_supervisor_account_black_48dp_1x.png';
// import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';











const styles = {
    radioButton: {
      marginTop: 16,
    },
  };
  
  
  class CompanyJobsForCompany extends Component {
      constructor() {
          super();
          this.state = {
              open: false,
              arr:[],
            }
        }
        handleOpen = () => {
            this.setState({open: true});
        };
        
        handleClose = () => {
            this.setState({open: false});
        };
        componentWillMount() {
            var uid = localStorage.getItem('uid')
            this.props.ShowComJobs(uid);
        }
        // componentWillReceiveProps(){
            //     this.setState({
                //         uid:this.props.uidJob
                //     })
                // }
                
                AppliedStudents(value){
                    let arr = [];
                    for(let key in value){
                        arr.push(value[key])
                    }
                    
                    console.log(arr);
                    // this.props.appliedStudents(value);
                    this.setState({open: true,
                        
                        
                        arr : arr,
                    });
                }
                
                
                
                
                render() {
                    // console.log(this.props.ComJobs)
        const actions = [
            <FlatButton
              label="close"
              primary={true}
              onClick={this.handleClose}
            />,
            // <FlatButton
            //   label="Submit"
            //   primary={true}
            //   keyboardFocused={true}
            //   onClick={this.handleClose}
            // />,
          ];
      
        //   const radios = [];
        //   for (let i = 0; i < 30; i++) {
        //     radios.push(
        //       <RadioButton
        //         key={i}
        //         value={`value${i + 1}`}
        //         label={`Option ${i + 1}`}
        //         style={styles.radioButton}
        //       />
        //     );
        //   }
      
        return (
            <div>

                <ul>

                    {this.props.ComJobs ?
                        this.props.ComJobs.map((value, index) => {
                            {
                                // console.log(value.Applications)
                                let arr=[];
                                for(let key in value.Applications){
                                    arr.push(value.Applications[key]);
                                    // console.log(arr);
                                }
                                for(let i=0 ; i === arr.length ; i++){
                                    if(arr.length !== 0 ){
                                        // console.log(arr[i].username)
                                    }
                                    else{
                                        // console.log("hellllllllll")
                                    }
                                }
                                    return (
                                        
                                        <Card key={index} onClick={this.AppliedStudents.bind(this,value.Applications)} style={{ margin: '5%' }}>
                                        
                                    <div  >
                                      
                                        <img onClick={this.AppliedStudents.bind(this,value.Applications)} alt='alt' src={notice} width='5%' height='5%' style={{float:'right' , padding:'0%',margin:'0% 10% 0% 0%'}} />
                                        <Badge
                                        onClick={this.AppliedStudents.bind(this,value.Applications)}
                                            badgeContent={arr.length}
                                            primary={true}
                                            style={{float:'right' , margin:'2% 2% 0% 0%'}}
                                            badgeStyle={{float:'right',padding:'0%',margin:'0%'}}
                                            >
                                            {/* <NotificationsIcon /> */}
                                        </Badge>
                                        {/* </div> */}
                                        {/* <Badge
                                            badgeContent={10}
                                            secondary={true}
                                            badgeStyle={{ top: 12, right: 12 }}
                                            >
                                            <IconButton tooltip="Notifications">
                                            <NotificationsIcon />
                                            </IconButton>
                                        </Badge> */}
                                    </div>
                                    <ul>
                                        <li>
                                            <CardTitle title="Job Position" subtitle={value.position} />

                                        </li>
                                        <li>
                                            <CardTitle title="Job Description" subtitle={value.description} />

                                        </li>
                                        <li>
                                            <CardTitle title="Employer's E-mail" subtitle={value.email} />

                                        </li>
                                        <li>
                                            <CardTitle title="Employer's Contact" subtitle={value.number} />

                                        </li>


                                    </ul>

                                </Card>)
                                }

                        })
                        :
                        null}
                </ul>
                <div>
        {/* <RaisedButton label="Scrollable Dialog" onClick={this.handleOpen} /> */}
        <Dialog
          title="Scrollable Dialog"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >

                        {this.state.arr.map((val,index) => {
                            console.log(val,index);
                            return(
                            <Card key={index}>
                            <h1>Name: {val.username}</h1>
                            <h3>Qualification: {val.qualification}</h3>
                            <h3>Age: {val.age}</h3>
                            <h3>Email: {val.email}</h3>
                            <h3>Contact: {val.contact}</h3>
                            </Card>
                            )
                        })
                        
                        }


          {/* <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            {radios}
          </RadioButtonGroup> */}
        </Dialog>
      </div>
            </div>

        )
    }

}

function mapStateToProp(state) {
    // console.log(state.root.jobCompanyUid);
    return ({
        ComJobs: state.root.comJob,
        //    uidJob: state.root.jobCompanyUid
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        // appliedStudents: (value) => {dispatch(appliedStudents(value))},
        ShowComJobs: (uidJob) => { dispatch(ShowComJobs(uidJob)) }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(CompanyJobsForCompany);