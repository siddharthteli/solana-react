import React from 'react';

import {airDrop} from '../../helpers/userBalance';
import './Airdrop.css'

export default class Airdrop extends React.Component {
    constructor(props) {
        super(props)

        this.state={address:'d3FKNt6LaneCKy63q7jKvb3w9XwpwQokvEHPeD9NgLNNR'};

      

    }
    Click =async ()  =>{
        try{
            let add=this.state.address;
            let sign=await airDrop(add);
   console.log("value of signature---"+sign);

        }

        catch(e) {
            console.log("error Hai bhai----"+e.toString());
        }
 
    
       

    }

    Change =(e) => {
        console.log("inside change handler");
       
        this.setState({address: e.target.value});

    }

    render() { 
        return <div>
            <label>Airdrop:</label>
                <input type="text" value={this.state.address} onChange={this.Change}/>
            
            <button value="Send" onClick={this.Click}>Airdrop</button > 
            
        </div>
    }

  
}