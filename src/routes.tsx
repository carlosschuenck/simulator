import React, { FunctionComponent, lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
// import Home from './pages/home'
// import CompoundInterest from './pages/compound-interest'

const Home = lazy(() => import('./pages/home'))
const CompoundInterest = lazy(() => import('./pages/compound-interest'))
 
const Routes: FunctionComponent = () => { 
  return  (
    <Suspense fallback="loading...">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/juros-compostos" component={CompoundInterest} />
        <Route path="/" component={() => <h1>NOT FOUND</h1>} />
      </Switch>
    </Suspense>
  )
}

export default Routes;