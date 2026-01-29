import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountchange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className = "",
}) {
   const AmountInputId=useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={AmountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={AmountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=> onAmountchange && onAmountchange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    
                >
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;



/* ----------------------------------InputBox------------------------------------------------

Step -1 for input box hme label ,two input box chahiye
step -2 hum label denge and uske label ko variable denge jisse jb bhi hume need ho hum apne according app file me 
input de ske 

step-3  next hum iput field lenge jo amount ke liye hogi isme bhi hum amount as variable in value,type number, disable bhi 
user according rkhenge in variable and 
ek function bnayenge onChange ---onAmountChange jo app file me logically change hoga according to output
 variable is ---
amount 
disabledAmount --bydefault false 
onAmountChange -- is function me changes App file me dekhenge 

step - 4 aise hi ek select currency type change krne ke liye bnayenge 
logically currency ek array hoga jo api se as object aayege jisme saari currency types hoge

variable is
selectcurrency,
OnCurrencyChange -- same as amount function
currencyOption=[]  yeh array hoga jisme saari currencies type hoge and isme se ek ek krke select krenge



*/