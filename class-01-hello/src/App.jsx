// components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'

// styles / CSS
import './App.css'

// assets image
import Hero from './assets/hero.png'

function App() {
  return (
    <>
      <h1>Resuming React... It is important!</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <Events/>
      {/* Image on public folder*/}
      <div>
        <img src="/sp_night.jpg" alt="SP at night"/>
      </div>
      {/* Image on assets folder*/}
      <div>
        <img src={Hero} alt="Hero logo"/>
      </div>
    </>
  )
}

export default App
