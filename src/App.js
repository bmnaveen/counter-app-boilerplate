import { useState } from "react";
import "./App.css";

function App() {
  const [count,setCount]=useState(0);
  return (
    <div className="App">
      <h2 data-testid="counter-value">{count}</h2>
      <button disabled={count<=0 ? true : false} onClick={()=>{
        if(count>=1){
          setCount(count-1)
        }else{
          return ;
        }
      }} data-testid="counter-decrement-button">Decrease</button>
      <button onClick={()=>{
     
          setCount(count+1)
        
      }} data-testid="counter-increment-button">Increase</button>
    </div>
  );
}

export default App;
