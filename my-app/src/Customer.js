import React, { Component } from 'react'
import axios from 'axios';


export default class Customer extends Component {

   constructor(props) {
      super(props) // this is super class constructor
      debugger


      this.state = {
         data1: "Hello ankur",
         data2: "Hello sagar",
         data3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
      // axios.get('assets/Student.json').then(response => {
      //    debugger

      // })
   }

   remover=()=>{
      debugger
     // this.state.data3 =[]
      this.setState({data3 : [], data2:"ooooooooooooooooooooooooooooo"})
   }

   addLI=()=>{
    this.setState({data3 :[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]})
   }

  

   render() {
      return (
         <div>
            <div>{this.state.data1}</div>
            <div><input type='text' value={this.state.data2}></input></div>
            <ul>
               {this.state.data3.map((item, index) => (<li>index is - {index} and item is :{item}</li>))}
            </ul>
            <div>
               <button onClick={()=>this.remover()}>remove LI</button>
               <button onClick={()=>this.addLI()}>add LI</button>
            </div>
         </div>
      );
   }
}
