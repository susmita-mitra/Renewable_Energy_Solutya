import { useEffect, useRef, useState } from "react";


function Reveal({children}){


const [show,setShow]=useState(false);

const ref=useRef();



useEffect(()=>{


const observer = new IntersectionObserver(

(entries)=>{


if(entries[0].isIntersecting){

setShow(true);

}


},

{
threshold:0.2
}

);



observer.observe(ref.current);



return ()=>observer.disconnect();



},[]);



return(

<div 
ref={ref}
className={show ? "reveal show" : "reveal"}
>

{children}

</div>


)


}


export default Reveal;