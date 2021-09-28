import {Connection,PublicKey} from "@solana/web3.js"
import React from "react"


//Returns Connection ka object 
export async function connectTo() {
    const connection = new Connection("http://localhost:8899", "confirmed"); 
    return connection;
}

//Returns balance of address. 
export async function balance(key:String) {

    const connection = await connectTo();
    let address=await publicAddress(key);
    
   let temp=await connection.getBalance(address,'confirmed');
   console.log("COnnection value:--",connection);
   console.log("Balance --",temp);

   return temp;

}
//Returns Dummy address.
//'83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri'
export async function publicAddress(key:String) {
    let address=new PublicKey(key);

    return address;
}


export async function airDrop(key:String) {
    const connection = await connectTo();
    let address=await publicAddress(key);
    const airdropSignature = await connection.requestAirdrop(address,9999);


}