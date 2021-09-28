import React from 'react';
import { string } from 'yargs';
import {airDrop} from '../../helpers/userBalance';


export default class Balance extends React.Component {
    constructor(props) {
        super(props)

        this.state={address:''};

     

    }

    render() {
        return <div>
            
            <form onSubmit={this.onClick}>
            <label>Airdrop:
                <input type="text" value={this.state.address}></input>
            </label>
            <input type="submit">Send</input>
            </form>
        </div>
    }

   async componentDidMount() {
        function onClick() {

            airDrop(this.state.address);


        }

    }
}