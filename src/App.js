import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Import Pages
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';



function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
