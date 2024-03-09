import './App.css'
import useAppStore from './stores/appStore'

function App() {
  const appStore = useAppStore()

  console.log(appStore)

  return (
    <>
      <div>
        <button type='button' onClick={appStore.decrease}>-</button>
        <span>Count : {appStore.count}</span>
        <button type='button' onClick={appStore.increase} >+</button>
      </div>
      <br />
      <button type='button' onClick={appStore.reset}>Reset</button>
    </>
  )
}

export default App
