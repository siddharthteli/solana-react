import logo from './logo.svg';
import './App.css';
import {Connection, PublicKey} from "@solana/web3.js"
import React from "react"

let temp:any;
class App extends React.Component {

  
  constructor(props :any){
    super(props)
    bal();


  }
  render() 
  {
    return (
      <div className="App">
      <p>Value of Balance:--{temp}</p>
      </div>
    );
  }

  
  
}



export default App;

async function bal() {
  const connection = new Connection("http://localhost:8899", "confirmed");
    let address=new PublicKey('83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri');
    
   let temp=await connection.getBalance(address,'confirmed');
   console.log("COnnection value:--",connection);
   console.log("Balance --",temp);

}
