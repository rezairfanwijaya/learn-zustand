import './App.css'
import Count from './count/count'
import useAppStore from './stores/appStore'
import UserGithub from './user/github'
import Username from './user/username'

function App() {
  const reset = useAppStore((state) => state.reset)
  return (
    <>
      <Count />
      <hr />
      <Username />
      <br /><br /><br />
      <UserGithub />
      <br /><br /><br />
      <button type='button' onClick={reset}>Reset All State</button>
    </>
  )
}

export default App
