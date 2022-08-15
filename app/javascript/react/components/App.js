import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FAQList from './FAQ/FAQlist'
import LocalIndexPage from "./Locals/LocalIndexPage"
import LocalShowPage from './Locals/LocalShowPage'
import MainPage from './Main/MainPage'
import NewLocalForm from './Locals/NewLocalForm'
import React from 'react'
import AboutUsPage from './About/AboutUsPage'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/locals' component={LocalIndexPage}/>
        <Route exact path="/locals/new" component={NewLocalForm} />
        <Route exact path="/locals/:id" component={LocalShowPage} />
        <Route exact path='/FAQ' component={FAQList}/>
        <Route exact path='/about-us' component={AboutUsPage}/>
      </Switch>
    </BrowserRouter>   
  )
}

export default App
