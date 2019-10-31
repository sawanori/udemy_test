import React, {useState} from 'react';

const App = (props) => {
 const [state,setState] = useState(props)

 const nameChange = (e) => {
   setState({...state, name: e.target.value})
 }
 const reset = () => {
   setState(props)
 }
const {price,name}= state
  return (
    <>
      <p>現在の{name}は{price}</p>
      <button onClick={() => setState({...state, price : price + 1 })}>+1</button>
      <button onClick={() => setState({...state,price:price - 1})}>-1</button>
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
