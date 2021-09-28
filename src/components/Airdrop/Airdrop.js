import React from 'react';

import {airDrop} from '../../helpers/userBalance';
import './Airdrop.css'

export default class Airdrop extends React.Component {
    constructor(props) {
        super(props)

        this.state={address:''};

     

    }

    render() {
        return <div>
            
            <form onSubmit={this.onClick}>
            <label>Airdrop:
                <input type="text" />
            </label>
            <input type="submit" value="Send"/>
            </form>
        </div>
    }

    componentDidMount() {
        function onClick() {

            airDrop(this.state.address);


        }

    }
}