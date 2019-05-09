import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import { useRouter } from 'hooks/core/use-router/useRouter'
import { useScrollBack } from 'hooks/core/use-scroll-back/useScrollBack'
import { NotFound } from 'components/core/routing/not-found/NotFound'
import { RouteLoading } from 'components/core/routing/route-loading/RouteLoading'
import { preloadAllRoutes } from './PreloadRoutes'
const Home = Loadable({ loader: () => import('./home/Home'), loading: RouteLoading })
const Details = Loadable({ loader: () => import('./details/Details'), loading: RouteLoading })


function RouteTable () {
  const { history } = useRouter()
  useScrollBack(history)
  preloadAllRoutes()

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/details" component={Details} />

      {/* 404 route must be last */}
      <Route component={NotFound} />
    </Switch>
  )
}

export { RouteTable }
