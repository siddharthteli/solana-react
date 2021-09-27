import {Connection,PublicKey} from "@solana/web3.js"
import React from "react"


//Returns Connection ka object 
export async function connectTo() {
    const connection = new Connection("http://localhost:8899", "confirmed"); 
    return connection;
}

//Returns balance of address. 
export async function balance() {

    const connection = await connectTo();
    let address=await publicAddress();
    
   let temp=await connection.getBalance(address,'confirmed');
   console.log("COnnection value:--",connection);
   console.log("Balance --",temp);

   return temp;

}
//Returns Dummy address.

export async function publicAddress() {
    let address=new PublicKey('83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri');

    return address;
}


export async function airDrop() {
    const connection = await connectTo();
    let address=await publicAddress();
    const airdropSignature = await connection.requestAirdrop(address,9999);


}