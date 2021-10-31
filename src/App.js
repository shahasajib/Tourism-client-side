import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddPackage from './Pages/Add Package/AddPackage';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Header/Header';
import Booking from './Pages/Booking/Booking';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';
import MyOrder from './Pages/MyOrder/MyOrder';
import ClientComment from './Pages/Client Comment/ClientComment';
import Footer from './Pages/Footer/Footer';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <ClientComment></ClientComment>
            </Route>
            <PrivateRoute exact path='/booking/:tourPackageId'>
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute exact path='/myorder'>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <Route path='/logIn'>
              <LogIn></LogIn>
            </Route>
            <Route exact path="/addPackage">
              <AddPackage></AddPackage>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
