import React from "react";
import { isThisTypeNode } from "typescript";
import   {balance,temp} from '../../helpers/userBalance';


export default class Balance extends React.Component 
{
    constructor(props) {
      super(props)
      this.state={balance:'',address:""}
      
     
    }
     onClick= async() =>{
    
      this.setState({balance: await balance()});
     alert("Balance "+this.state.balance);
      }
      onChange=(e) => {
        this.setState({address: e.target.value})
      }
  render() {
        return <div>
          
            <label>Check Balance:</label>
               <input type="text" value={this.state.address} onChange={this.onChange} />
              <button onClick={this.onClick}>Check</button>
            
            <h1>Balance of {this.state.address} is {this.state.balance}</h1>
        </div>
    }



}


