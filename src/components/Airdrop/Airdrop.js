import React from 'react';

import {airDrop} from '../../helpers/userBalance';
import './Airdrop.css'

export default class Airdrop extends React.Component {
    constructor(props) {
        super(props)

        this.state={address:'dd'};

     

    }
    Click =async ()  =>{

    let sign=await airDrop(this.state.address);
   console.log("value of signature---"+sign);
       

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