import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,reset } from './ProductSlice';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
      const dispatch = useDispatch();
      const count = useSelector(state=> state.Product)
  return (
    <>
    <h1>Apple</h1>
    <img src='https://th.bing.com/th/id/OIP.CgXLkfg6bOR6fT3U8jXhswHaFl?pid=ImgDet&rs=1'></img>
    <h2>Quantity: {count} (Kg)</h2>
    <h2>Price:{count*140} (INR)</h2>
     <button onClick={()=>dispatch(increment())}>+</button>
     <button onClick={()=>(count>0)?dispatch(decrement()):alert("The Cart is Empty")}>-</button>
     <button onClick={()=>dispatch(reset())}>Reset</button>
    </>
  )
}

export default App
