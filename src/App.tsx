import logo from './logo.svg';
import './App.css';
import {Connection, PublicKey} from "@solana/web3.js"
import React, { useState } from "react"
import {balance,airDrop} from "./helpers/userBalance"

class App extends React.Component<{}, { balance: number}> {

  
  constructor(props :any){
    super(props)
    this.state={balance:4};
    
    

  }
  clicked = async () => {
    let bal=balance('FrkQkg5fn9v7KGN7b2nK4Q5Mub4AzUhZAeLPcmX6TQcC').then((balance) => {
      return balance

    }).catch((e)=>{
      console.log("Error hai---"+e.toString())
    })
    //this.setState({balance:await balance('FrkQkg5fn9v7KGN7b2nK4Q5Mub4AzUhZAeLPcmX6TQcC')});
    alert("Called")

  }
  render() 
  {
   
    
    return (
      <div className="App">
      <p>Value of Balance:--{this.state.balance}</p>
      <form onSubmit={this.clicked}>
        <input type="submit"value="Click"/>
      </form>
      </div>
    );
  }

  async componentDidMount() {
    //this.setState({balance:await balance('FrkQkg5fn9v7KGN7b2nK4Q5Mub4AzUhZAeLPcmX6TQcC')});

  }


  
  
}



export default App;
