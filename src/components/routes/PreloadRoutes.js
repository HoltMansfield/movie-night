/* eslint no-unused-vars: "off" */
import Loadable from 'react-loadable'
import { RouteLoading } from 'components/core/routing/route-loading/RouteLoading'
const Home = Loadable({ loader: () => import('./home/Home'), loading: RouteLoading })
const Details = Loadable({ loader: () => import('./details/Details'), loading: RouteLoading })
//GeneratorToken: <next-import>

export const preloadAllRoutes = () => {
  // preload all routes 2 seconds after the react app is rendered
  setTimeout(() => {
    Home.preload()
    Details.preload()
    //GeneratorToken: <next-preload>
  }, 2000)
}