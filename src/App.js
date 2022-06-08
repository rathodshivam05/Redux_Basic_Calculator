import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { add1, sub1 ,add2, div, mult, sub2} from './store/action2';
import { useState } from 'react';


function App() {
  const dispatch = useDispatch();
  const  count  = useSelector((state)=> state.count);
  

  const [input, setInput] = useState(Number(1))

 //  console.log(typeof(input))

  return (
    <div className="App">
      <header className="header">

        <h2>Redux Calculator</h2>

      <h1>Value : {count}</h1>
      <div>
      <button onClick={()=> dispatch (add1()) }>Increment</button>
      <button onClick={()=> dispatch (sub1())}>Decrement</button>
      </div>
      
      <p>Enter Your value</p>
      <input type="number" placeholder='enter your value' onChange={(e)=> setInput(+e.target.value)} />

        <div>
      <button onClick={()=> dispatch (add2(input)) }>Add</button>
      <button onClick={()=> dispatch (sub2(input))}>Sub</button>
      <button onClick={()=> dispatch (mult(input)) }>Mult</button>
      <button onClick={()=> dispatch (div(input))}>Div</button>
      </div>
              </header>
    </div>
  );
}

export default App;
