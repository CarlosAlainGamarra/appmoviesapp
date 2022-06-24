import styles from './modules/App.module.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Detail } from './pages/Detail';
import { Landing } from './pages/Landing';
import { Search } from './components/Search';
import { FaHome } from 'react-icons/fa'
import WebFont from 'webfontloader'
import { useEffect } from 'react';

export function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Monoton']
      }
    });
   }, []);



  return (
    <Router>
      <header className={styles.header}>
        <h1 className={styles.header_title}>
          popular-movies
        </h1>
        <div className={styles.bar}>
          <Link to='/'>
            <FaHome className={styles.home_icon} size={40}/>
          </Link>
          <Search />
        </div>
      </header>
      <main>
        <Switch>
          <Route exact path='/movies/:movieId'>
            <Detail />
          </Route>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/'>404</Route>
        </Switch>
      </main>
    </Router>
  )
}
