import './App.css';
import HomePage from "./pages/Homepage/Homepage"
import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer"
import {Redirect, Route, Switch} from "react-router-dom" ;
import AddItem from "./component/AddItem/additem"
import NotFound from "./pages/NotFound/NotFound"
import React from 'react';
import EditItem from './component/EditItem/EditItem';

class App extends React.Component {
  constructor(){
    super();
  }
  
  render(){
    return (
      <div className= 'app'>
        {/* <Header> </Header> */}
          <Switch>
              <Route  exact path="/"
                 render = {()=>(<Redirect to="/home"></Redirect>)}
               >
              </Route>
  
              <Route path="/home"><HomePage  ></HomePage> </Route>
  
              <Route path="/add">
                <AddItem ></AddItem>
              </Route>

              <Route path='/edit/:id'>
                <EditItem ></EditItem>
              </Route>
      
              <Route>
                <NotFound></NotFound>
              </Route>
        </Switch>
          
         
        {/* <Footer></Footer> */}
      </div>
      
    );
  }

}

export default App;
