import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/*const reactElement={
    types:'a',
    props:{
        href:"https://www.google.com/",
        target:"_blank"
    },
    children:"Click me to visit website"
} we can not render this cause react has some set of rules to create object */

// const reactElement=React.createElement(
//   'a',{href:"https://www.google.com",target:'_blank'},
//   'click me '// this is some rules ,that we can create object by its own
// )



createRoot(document.getElementById('root')).render(
 <App/>
)
