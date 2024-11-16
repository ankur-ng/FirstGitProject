import React,{Component} from 'react'
import axios from 'axios';


export default class Customer extends Component {
   
   constructor(props){
    super(props)
    debugger
    this.state = {Studen: []};
 

    axios.get('assets/Student.json').then(response => {
      debugger
      this.setState({ Studen: response })
      })
    
   }

   render(){
        const students = this.state.Studen.map((item, i) => (
            <div>
              <h1>{ item.ID }</h1>
              <span>{ item.Name }, { item.Address }</span>
            </div>
          ));
      
          return (
            <div id="layout-content" className="layout-content-wrapper">
              <div className="panel-list">{ students }</div>
            </div>
          );

    
}
   }

//    getDerivedStateFromProps(){
//     debugger
//    }
// shouldComponentUpdate(){
//     debugger
// }

// getSnapshotBeforeUpdate() {
//     debugger
// }

// componentDidUpdate()
// {
// debugger
// }

//}

// class Studen{
//     myId;
//     myName;
//     myAddress;
// }