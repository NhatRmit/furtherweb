import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import Dog from './components/Dog'
import Cat from './components/Cat'
import Child from './components/Child'
import Account from './components/Account'
import Navbar from './components/Navbar'
import QueryParamsDemo from './components/QueryParamsDemo'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Switch>
          
          <Route path='/dog'>
            <Dog />
          </Route>
        
          <Route path='/cat'>
            <Cat />
          </Route>

          <Route path='/:id/:name/:type' children={<Account />}/>
          
          <Route path='/:id' children={<Child />}/>

        </Switch>
      </Router>
    </div>
  )
}

export default App