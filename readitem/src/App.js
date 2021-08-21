import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListBoardComponent from './components/ListBoardComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateBoardComponent from './components/CreateBoardComponent';
import ReadBoardComponent from './components/ReadBoardComponent';

//최상위 컴포넌트 정의
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div className="container">
          <Switch>
            <Route path = "/" exact component = {ListBoardComponent}></Route>
            <Route path = "/board" component = {ListBoardComponent}></Route>
            <Route path = "/create-board" component = {CreateBoardComponent}></Route>
            <Route path = "/read-board/:no" component = {ReadBoardComponent}></Route>
          </Switch>
        </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
