import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'

import './App.css'

const App = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
  </Switch>
)

export default App
