// Import Global Styles
import { Link, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
// import NotFound from './pages/NotFound';
import { Router } from 'react-router';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Setup Project - All Pages Header</h1>
      
      <Router>
        <Link to="/">Home Page</Link>
        <Link to="/about">About Page</Link>
      </Router>

      <Route exact path="/">Home</Route>
      <Route exact path="/about">About</Route>
      <Route exact path="/contact">Contact</Route>
      <Route exact path="/blog">Blog</Route>
      <Route exact path="/portfolio">Portfolio</Route>
      {/* <Route path={NotFound} /> */}
    </div>
  );
}

export default App;
