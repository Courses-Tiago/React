import './App.css'

import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import PropsShowUserName from './components/PropsShowUserName'
import DestructuringCarDetails from './components/DestructuringCarDetails'

function App() {
  const name = "Tiago";

  return (
    <>
      <h1>Continuing with React..</h1>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      <PropsShowUserName name={name}/>
      <DestructuringCarDetails brand="BMW" km={35000} color="black"/>
    </>
  )
}

export default App
