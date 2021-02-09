import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './Header/NavBar';
import Home from './Main/Home';
import './App.css';
import NewPost from './Main/NewPost';
import DetailPost from './Main/DetailPost';

function App() {
  

  return (
    <Router>
    <div className="App">
      <NavBar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/new-post">
            <NewPost />
          </Route>
          <Route path="/post/:id">
            <DetailPost />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
