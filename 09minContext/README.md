# USER CONTEXT – React Context API

## 📌 Why User Context?

React me agar components ke andar multiple nested components ho  
aur hume data (jaise user info) last level ke component tak bhejna ho,  
to normally **props pass karne padte hain har level se**.

👉 Is problem ko **Prop Drilling** kehte hain.

❌ Code complex ho jaata hai  
❌ Optimization kharab hoti hai  
❌ Maintain karna difficult ho jaata hai  

### ✅ Solution: Context API

Context API hume allow karti hai ki:
- data ko **globally define** karein
- aur jo component chahe, wo data **direct access** kar sake  
- bina props pass kiye

---

## 📌 UserContext

`UserContext` ek global container hota hai jo data hold karta hai.

```js
React.createContext()
