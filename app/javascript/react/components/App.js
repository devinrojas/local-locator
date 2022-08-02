import React from 'react'
import MainPage from './MainPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FAQList from './FAQlist'


export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/FAQ' component={FAQList}/>
      </Switch>
    </BrowserRouter>   
  )
}

export default App
