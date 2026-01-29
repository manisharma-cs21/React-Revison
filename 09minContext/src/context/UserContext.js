import React from "react";

const UserContext=React.createContext()

export default UserContext;


/*  USER CONTEXT

user context hum state management ke liye use krte h cause if i have components ke ander components and uske inside 
ek card component h and use data pass krna h to data saare component se hoke jayega jo ki bad optimization h
isliye hum globally data ko define kr dete h and wahi se jis component  ko need hoti h wo data excess kr skta h 


yaah hum userContext create krte h react.createContext and iske liye ek provider ki need hoti h waah pe hum 
data provide krte h 

 */
