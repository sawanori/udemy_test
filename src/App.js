import React, {useState} from 'react';

const App = (props) => {
 const [name,setName] = useState(props.name)
 const [price,setPrice] = useState(props.price)
 const nameChange = (e) => {
   setName(e.target.value)
 }
 const reset = () => {
   setPrice(props.price)
   setName(props.name)
 }
  return (
    <>
      <p>現在の{name}は{price}</p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>Reset</button>
      <input type="text" value={name} onChange={nameChange}/>
    </>
  )
}
App.defaultProps = {
  name: 'テスト',
  price:100033
}
export default App;
