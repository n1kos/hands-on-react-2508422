import { useState } from "react";

export default () => {
  const [count, setCount] = useState(0)	// Declare a new state variable, which we'll call "count"

  return (
    <div>
      <p>You clicked {count} times</p>
      <button className="outline" 
      onClick={() => {
        setCount(prev => prev+1);  
        setCount(prev => prev+1)}
      }>{(()=>{
        if (count === 0) return "Click to support us"
        else return `Supported ${count} times`
      })()}</button>
    </div>
  )
}