------------------ USER CONTEXT 

user context hum state management ke liye use krte h cause if i have components ke ander components and uske inside 
ek card component h and use data pass krna h to data saare component se hoke jayega jo ki bad optimization h
isliye hum globally data ko define kr dete h and wahi se jis component  ko need hoti h wo data excess kr skta h 


yaah hum userContext create krte h react.createContext and iske liye ek provider ki need hoti h waah pe hum 
data provide krte h 



----------------  USER CONTEXT PROVIDER

yaah pe hum provider bnayenge for sending data and yeh children ek variable h jo saara data like kch bhi data ho wo
component ko provide kr dega 

step 1 hum ek useStates lete h according to project like hume user information chahiye to uske data ke according hum
ek state pass kr denge 

and then value and children return kr denge 
yaah pe user====for accessing the user data
and setUser === for changing or creating user data by using its components

