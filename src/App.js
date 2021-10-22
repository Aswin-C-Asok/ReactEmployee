import './App.css';
import Header from './components/Header'
import Navigationbar from './components/navigationbar';
import Dashboard from './Routes/dashboard'
import Employees from './Routes/employees'
import Clients from './Routes/clients'
import Calls from './Routes/calls'
import Contacts from './Routes/contacts'
import Projects from './Routes/projects'
import Settings from './Routes/settings'
import Tasks from './Routes/tasks'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Navigationbar />
        <Switch>
          <Route path="/" exact >
            <Dashboard />
          </Route>
          <Route path='/employees'>
            <Employees />
          </Route>
          <Route path='/clients'>
            <Clients />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/tasks'>
            <Tasks />
          </Route>
          <Route path='/calls'>
            <Calls />
          </Route>
          <Route path='/contacts'>
            <Contacts />
          </Route>
          <Route path='/settings'>
            <Settings />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
