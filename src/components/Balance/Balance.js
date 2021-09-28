import React from "react";
import   {balance,temp} from '../../helpers/userBalance';


export default class Balance extends React.Component 
{
    constructor(props) {
      super(props)
      this.state={balance:'',address:""}
      
     
    }
     async onClick() {
      console.log("Inside onclick")
      alert("asdsa")
     let address='83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri';
      alert("Before balance call");
     let bal= await balance();
     console.log("value ofmtemkp"+bal);
     alert("End of onclick");
      }

      
  

  render() {
       
      
        return <div>
          <form onSubmit={this.onClick}>
            <label>Check Balance:
              <input type="string"/>
              <input type="submit" value="submit"/>
            </label>
            <h1>Balance of {this.state.address} is {this.state.balance}</h1>

          </form>
        </div>
    }



}


