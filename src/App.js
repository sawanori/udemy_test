import React, {useState} from 'react';

const App = () => {
 const [count,setCount] =  useState(1)
 const increment = () => {
   setCount(count + 1)
 }

 const increment2= () => {
   setCount(previousCount => previousCount + 1)
 }
 const decrement2 = () => {
   setCount(previousCount => previousCount -1)
 }

 const decrement = () => {
   setCount(count - 1)
 }
 const clear = () => {
   setCount(0)
 }
 const double = () => {
   setCount(count * 2)
 }

 const triple = () => {
   setCount(previousCount =>
   previousCount % 3 === 0 ?   previousCount / 3  :   previousCount
   )
 }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={increment2}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={decrement2}>-</button>
    <button onClick = {double}>double</button>
      <button onClick = {triple}>triple</button>
    <button onClick={clear}>clear</button>
    </>
  )
}
export default App;
