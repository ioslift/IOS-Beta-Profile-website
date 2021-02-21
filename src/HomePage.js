import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage'
import Header from './Header'
import Center from './Center'
import Footer from './Footer'
import ReactGa from 'react-ga'
import Aboutpage from './Aboutpage'
import { useEffect } from 'react';

function HomePage() {


  return (
    <div className="App">
        <Header/>
        <Center/>

        <MainPage/>
     
         <Footer/>
    </div>
  );
}

export default HomePage;
