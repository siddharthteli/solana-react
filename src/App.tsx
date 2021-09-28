import logo from './logo.svg';
import './App.css';
import {Connection, PublicKey} from "@solana/web3.js"
import React, { useState } from "react"
import {balance,airDrop} from "./helpers/userBalance"
import Airdrop  from './components/Airdrop/Airdrop';
import Balance  from './components/Balance/Balance';
class App extends React.Component<{}, { balance: number}> {

  
  constructor(props :any){
    super(props)
    this.state={balance:4};
    
    

  }
  render() 
  {
    
    return (
      <div className="App">
 
      <Balance/>
      </div>
    );
  }

 

  
  
}



export default App;
