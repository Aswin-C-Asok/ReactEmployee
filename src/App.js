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
import Employeecard from './Routes/employeecard';
import * as CONSTANT from './constants/navigationBarConstants'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'
function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Header />
        <Navigationbar />
        <Switch>
          <Route path={CONSTANT.URL_TO_ROOT} exact >
            <Dashboard />
          </Route>
          <Route path={CONSTANT.URL_TO_EMPLOYEES}>
            <Employees />
            <Employeecard />
          </Route>
          <Route path={CONSTANT.URL_TO_CLIENTS}>
            <Clients />
          </Route>
          <Route path={CONSTANT.URL_TO_PROJECTS}>
            <Projects />
          </Route>
          <Route path={CONSTANT.URL_TO_TASKS}>
            <Tasks />
          </Route>
          <Route path={CONSTANT.URL_TO_CALLS}>
            <Calls />
          </Route>
          <Route path={CONSTANT.URL_TO_CONTACTS}>
            <Contacts />
          </Route>
          <Route path={CONSTANT.URL_TO_SETTINGS}>
            <Settings />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
