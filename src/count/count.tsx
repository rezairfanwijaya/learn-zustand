import { useShallow } from 'zustand/react/shallow'
import useAppStore from '../stores/appStore'

export default function Count(): JSX.Element {
    // shallow used when we return object or array from the stores
    // shallow will prevant js behavior failed compare object or array
    // shallow allow us to compare object or array without reeferences
    // info: in js array and object is reference type (in go, like pointer) not values type 
    // example: ["a"] === ["a"] = false (default js behaviour)
    // example: {name:"john"} === {name:"john"} = false (default js behaviour)
    // with shallow ["a"] === ["a"] = true
    const { count, increase, decrease, reset } = useAppStore(useShallow((state) => ({ count: state.count, increase: state.increase, decrease: state.decrease, reset: state.reset })))
    console.log("render count")

    return (
        <>
            <div>
                <button type='button' onClick={decrease}>-</button>
                <span>Count : {count}</span>
                <button type='button' onClick={increase} >+</button>
            </div>
            <br />
            <button type='button' onClick={reset}>Reset</button>
        </>
    )
}