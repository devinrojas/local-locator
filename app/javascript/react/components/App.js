import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import FAQList from './faq/FAQlist'
import LocalIndexPage from "./locals/LocalIndexPage.js"
import LocalShowPage from './locals/LocalShowPage.js'
import MainPage from './main/MainPage.js'
import NewLocalForm from './locals/NewLocalForm.js'
import AboutUsPage from './about/AboutUsPage.js'
import UserPage from './users/UserPage.js'

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
        <Route exact path='/users/:id' component={UserPage}/>
      </Switch>
    </BrowserRouter>   
  )
}

export default App
s