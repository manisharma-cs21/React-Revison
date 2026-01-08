// Here We are going to create ownbuild react 
function customRender(reactElement,container){
   /* const domElement =document.createElement(reactElement.types)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    
    container.appendChild(domElement)*/  
    // in this recently code , we are setting all the props values by own , if we do not which values in props object than we can set like that 
    // so we use loop to overCome this problem

   const domElement =document.createElement(reactElement.types)
    domElement.innerHTML=reactElement.children

    for(const prop in reactElement.props){
        if(prop==="children") continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)

 }
const reactElement={
    types:'a',
    props:{
        href:"https://www.google.com/",
        target:"_blank"
    },
    children:"Click me to visit website"
}

const mainContainor=document.querySelector("#root")

customRender(reactElement,mainContainor)



// Finally we found that react has his own set of rules to create object 
