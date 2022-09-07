import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import FAQList from './faq1/FAQlist'
import LocalIndexPage from "./locals1/LocalIndexPage.js"
import LocalShowPage from './locals1/LocalShowPage.js'
import MainPage from './main1/MainPage.js'
import NewLocalForm from './locals1/NewLocalForm.js'
import AboutUsPage from './about1/AboutUsPage.js'
import UserPage from './users1/UserPage.js'

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