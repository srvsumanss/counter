import { useState } from "react";

export function Counter(){
    
    const [counter,setCounter] = useState(0);

    

    return (
         <div className="main">
        <h3>Counter : {counter}</h3>
        <div className="btn">
              <button onClick={()=>{   
            setCounter(counter+1)  
            console.log("Counter",counter);
            }}>Add 1</button>
        </div>
        
        <div className="btn">
        <button onClick={()=>{   
            setCounter(counter-1)  
            console.log("Counter",counter);
        }}>Subs -1</button>
        </div>
        <div className="btn">
        <button onClick={()=>{   
            setCounter(counter *2)  
            console.log("Counter",counter);
        }}>Mult by 2</button>
        </div>
         
       </div>

    );
}
