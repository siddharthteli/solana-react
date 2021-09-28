import {Connection,PublicKey} from "@solana/web3.js"
import React from "react"


//Returns Connection ka object 
export async function connectTo() {
    const connection = new Connection("http://localhost:8899"); 
    return connection;
}

//Returns balance of address. 
export async function balance(key:String) :Promise<number> {
    try{

    alert("Inside Helper function")
    console.log("Inside balance function");
    const connection = await connectTo();
    alert("AFter connection object")
    let address=await publicAddress(key);
    alert("AFter public address convertion"+address)
   let temp=await connection.getBalance(address);
   alert("AFter getbalance function")
   console.log("COnnection value:--",connection);
   console.log("Balance --",temp);

   return temp;
    }

    catch(e:any) {
        console.log("Some error"+e.toString());
        return -1;
    }

    

}
//Returns Dummy address.
//'83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri'
export async function publicAddress(key:String){
    let address=new PublicKey(key);

    return address;
}


export async function temp() :Promise<String>{

    let name:String ="sidd";
    return name;
    
}


export async function airDrop(key:String)  {
    const connection = await connectTo();
    let address=await publicAddress(key);
    const airdropSignature = await connection.requestAirdrop(address,9999);


}

export async function temp1(
    name:String
  ): Promise<String> {
    
    return name;
  }