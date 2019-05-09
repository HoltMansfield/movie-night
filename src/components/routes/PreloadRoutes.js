/* eslint no-unused-vars: "off" */
import Loadable from 'react-loadable'
import { Spinner } from 'components/core/loading/spinner/Spinner'
const Home = Loadable({ loader: () => import('./home/Home'), loading: Spinner })
const Details = Loadable({ loader: () => import('./details/Details'), loading: Spinner })
//GeneratorToken: <next-import>

export const preloadAllRoutes = () => {
  // preload all routes 2 seconds after the react app is rendered
  setTimeout(() => {
    Home.preload()
    Details.preload()
    //GeneratorToken: <next-preload>
  }, 2000)
}
