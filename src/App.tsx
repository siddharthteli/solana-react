import logo from './logo.svg';
import './App.css';
import {Connection, PublicKey} from "@solana/web3.js"
import React, { useState } from "react"


class App extends React.Component<{}, { balance: number}> {

  
  constructor(props :any){
    super(props)
    this.state={balance:4};
    
    

  }
  render() 
  {
    
    return (
      <div className="App">
      <p>Value of Balance:--{this.state.balance}</p>
      </div>
    );
  }

  async componentDidMount() {
    this.setState({balance:await bal()})

  }

  
  
}



export default App;

async function bal() {
  const connection = new Connection("http://localhost:8899", "confirmed");
    let address=new PublicKey('83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri');
    
   let temp=await connection.getBalance(address,'confirmed');
   console.log("COnnection value:--",connection);
   console.log("Balance --",temp);

   return temp;

}
