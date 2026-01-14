import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
   const [data,setData]= useState()
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json)
        .then((res)=>setData(res[currency]))
        console.log(data);     
    },[currency])
    console.log(data);  
    return data
}

export default useCurrencyInfo;


/** ------------------------ Custom State--------------------------------
Step -1 =>  Here We are going to make custom State for fetching API

Steo-2 =>   for making custom react -- firstly hum isme useEffect , useState use krenge for changing the state

1- basically state ek function hi hota h isme hum fetch use krke API import krenge yeh ek callback return 
krega 
2- first ise json me convert krenge and then api ke data ke according ui me changes krenge using setData

Step -3 we cannot return only data or setData, also we cannot return both in array cause what about 
currency ...

step-4 so we will return useCurrencyInf as state;

 */





//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json