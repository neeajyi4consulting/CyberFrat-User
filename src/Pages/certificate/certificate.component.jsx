import React from "react";
import certificateImg from '../../assets/img/Certificate-01.png'


export class ComponentToPrint extends React.Component {
  constructor() {
    super();

    var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    this.state = {
        date: date
    };
}
render() {
    return (
      <div>
           <div className="relative">
            <img src={certificateImg} alt="...." className=" z-50"  style={{width:"1500px", height:"790px"}}/>
            <p className="" style={{position:"absolute", top:"30px", left:"155px", fontSize:"20px", fontWeight:"bold"}}>{this.state.date}</p>
            <p className="" style={{position:"absolute", top:"350px", left:"85px", fontSize:"25px", fontWeight:"bold"}}>{this.props.currentUser ? this.props.currentUser : "Test User Name"}</p>
            <p className="" style={{position:"absolute", top:"415px", left:"85px", fontSize:"25px",}}>For successfully completing training on</p>
            <p className="" style={{position:"absolute", top:"460px", left:"85px", fontSize:"25px",}}> <span className="font-bold">{this.props.courseTitle}</span> </p>
            <p className="" style={{position:"absolute", top:"505px", left:"85px", fontSize:"25px",}}> conducted online on <span className="font-bold">{this.state.date}</span></p>
            </div>
        </div>
    );
  }
}

// export default ComponentToPrint;




// import React from "react";
// import certificateImg from '../../assets/img/Certificate-01.png'


// class ComponentToPrint extends React.Component {
//   render() {
//     return (
//       <div>
//            <div className="relative">
//             <img src={certificateImg} alt="...." className=" z-50"  style={{width:"1500px", height:"790px"}}/>
//             <p className="" style={{position:"absolute", top:"30px", left:"150px", fontSize:"23px", fontWeight:"bold"}}>16/07/2022</p>
//             <p className="" style={{position:"absolute", top:"350px", left:"80px", fontSize:"25px", fontWeight:"bold"}}>Mahesh Kumar</p>
//             <p className="" style={{position:"absolute", top:"415px", left:"80px", fontSize:"25px",}}>For successfully completing <span className="font-bold"> 8</span> hours of training on</p>
//             <p className="" style={{position:"absolute", top:"460px", left:"80px", fontSize:"25px",}}> <span className="font-bold">CyberFrat</span> </p>
//             <p className="" style={{position:"absolute", top:"505px", left:"80px", fontSize:"25px",}}> conducted online during the month of <span className="font-bold">October 2021</span></p>
//             </div>
//         </div>
//     );
//   }
// }

// export default ComponentToPrint;