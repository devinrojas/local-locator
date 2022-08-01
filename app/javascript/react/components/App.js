import React from 'react'
import MainPage from './MainPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage}/>
      </Switch>
    </BrowserRouter>   
  )
}

export default App
