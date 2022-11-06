import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {increment,decrement,multiplyX2} from './app/features/counter/counterSlice';
import 'boxicons'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    //EJEMPLOS
   /* <div className='font'>
      <h1>Hola mundo<box-icon type='solid' name='castle'></box-icon></h1>
      <button> <Link to="instagram" relative="path">Instagram</Link></button>

      <button onClick={() => dispatch(increment())}>Suma +1</button>
      <button onClick={() => dispatch(decrement())}>Resta -1</button>
      <button onClick={() => dispatch(multiplyX2())}>Multiplica x2</button>
      
    <p>Valor: {count}</p>

    </div> */
    <div>
      <h1>Hola mundo</h1>
    </div>


  )
}

export default App
