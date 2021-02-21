
import React, { useState ,useEffect} from 'react'

import Footer from '../Footer'
import Header from '../Header'
import {Image} from 'react-bootstrap'
import Dcenter from './Dcenter'
import DeviceLogo from '../img/DeviceLogo.png'
import {Helmet} from 'react-helmet'
function Dectector() {


    return(
        <>
          <Helmet>
          <title>Device Detector</title>
<meta name="description" content="Check Which Device you are using with Profiles Beta Device Detector."/>


<meta property="og:url" content="http://beta.ioslift.com/detector"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Device Detector"/>
<meta property="og:description" content="Check Which Device you are using with Profiles Beta Device Detector."/>
<meta property="og:image" content="http://beta.ioslift.com/img/d.png"/>


<meta name="twitter:card" content="summary_large_image"/>
<meta property="twitter:domain" content="beta.ioslift.com"/>
<meta property="twitter:url" content="http://beta.ioslift.com/detector"/>
<meta name="twitter:title" content="Device Detector"/>
<meta name="twitter:description" content="Check Which Device you are using with Profiles Beta Device Detector."/>
<meta name="twitter:image" content="http://beta.ioslift.com/img/d.png" />

        </Helmet>
        <Header/>
        <div style={{backgroundColor: '#F8F8F8'}}>
            <div style={{textAlign:'center'}}>
            <h1>Detect Your Device</h1>
            <h3>Get what is New.</h3>
            </div>
      <Image src={DeviceLogo} fluid />
        </div>
        <Dcenter/>
        <Footer/>
        </>

       
    )
}
export default Dectector