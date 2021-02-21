import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage'
import Header from './Header'
import Center from './Center'
import Footer from './Footer'
import ReactGa from 'react-ga'
import Aboutpage from './Aboutpage'
import DHead from './Devices/DHead'
import { useEffect } from 'react';
import HomePage from './HomePage'
import Dectector from './Detector/Detector'
import HttpsRedirect from 'react-https-redirect';
import PagenotFound from './PageNotFound/Pagenotfound'
import {

  BrowserRouter as Router,
 Switch,
 Route

} from 'react-router-dom'
function App() {
//UA-81746914-4
  useEffect(()=>{
ReactGa.initialize('UA-81746914-4')
ReactGa.pageview(window.location.pathname + window.location.search)
},[])

  return (
    <>

<HttpsRedirect>
<Router>
    
     <Switch> 
       <Route path='/' exact component={HomePage}/>
       <Route path='/aboutpage'  component={Aboutpage}/>
       <Route path='/detector'  component={Dectector}/>
       <Route path='/support-devices'  component={DHead}/>
      <Route path="*" component={PagenotFound}/>
     

     </Switch>
   </Router>
</HttpsRedirect>
 




     

  
     
  
    </>
  );
}

export default App;
