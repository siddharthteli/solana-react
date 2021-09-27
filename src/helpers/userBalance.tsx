import {Connection,PublicKey} from "@solana/web3.js"
import React from "react"


export async function balance() {

    const connection = new Connection("http://localhost:8899", "confirmed");
    let address=new PublicKey('83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri');
    
   let temp=await connection.getBalance(address,'confirmed');
   console.log("COnnection value:--",connection);
   console.log("Balance --",temp);

   return temp;

}