import {useDispatch, useSelector} from "react-redux";
import {addValueAction} from "./clickerReducer";

// import AddForm from "./AddForm";


function App() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const increment = () => {
        dispatch({type: 'INCREMENT'})
    }

    const decrement = () => {
        dispatch({type: 'DECREMENT'})
    }
    const clear = () => {
        dispatch({type: 'CLEAR'})
    }

    const submit = (e) => {
        e.preventDefault()
        const {number} = e.target
        // dispatch({type: 'ADD_VALUE', payload: +number.value})
        dispatch(addValueAction(number.value))
        number.value = ''
    }
    const submitMinus = (e) => {
        e.preventDefault()
        const {minus} = e.target
        dispatch({type: 'MINUS_VALUE', payload: +minus.value})
        minus.value = ''
    }

    return (
        <div>
            <p>{state}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={clear}>clear</button>
            <form onSubmit={submit}>
                <input type='number' name='number'/>
                <button>Add Value</button>
            </form>
            <form onSubmit={submitMinus}>
                <input type='number' name='minus'/>
                <button>Minus Value</button>
            </form>
        </div>
    );
}

export default App;
