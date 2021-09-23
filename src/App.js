import './responsive.css';
import './App.css';
import './lib/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/index';
import Header from './layouts/Header/header';
import Cursor from './components/Cursor/Cursor';
import Footer from './layouts/Footer/Footer';
import MainProgram from './pages/MainProgram/index';
import Event from './pages/Event/Event';
import News from './pages/News/News';
import HRContact from './pages/HRContact/HRContact';
import Login from './pages/Login/Login';
import PostAdmin from './pages/PostAdmin/PostAdmin';
import DetailPost from './components/DetailPost/DetailPost';
import UserAdmin from './pages/UserAdmin/UserAdmin';
import NotFound from './pages/NotFound/NotFound';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Cursor />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/chuong-trinh-trong-diem" component={MainProgram}/>
          <Route exact path="/su-kien" component={Event}/>
          <Route exact path="/tin-tuc" component={News}/>
          <Route exact path="/nhan-su-lien-he" component={HRContact}/>
          <Route exact path="/dang-nhap" component={Login}/>
          <Route exact path="/dang-bai" component={PostAdmin}/>
          <Route exact path="/bai-viet/:slug" component={DetailPost}/>
          <Route exact path="/user" component={UserAdmin}/>
          <Route exact path="*" component={NotFound}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
