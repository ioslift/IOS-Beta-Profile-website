import Header from '../Header'
import CenterPart from './CenterPart'
import {Image} from 'react-bootstrap'
import Ldevice from '../img/LogoSupport.png'
import DeviceLogo from '../img/DeviceLogo.png'
import Footer from '../Footer'
import {Helmet} from 'react-helmet'
function DHead() {
    return(
<>
<Helmet>
<title>Supported Devices</title>
<meta name="description" content="Check your device is supported for the big update from our Compatible list of IOS 14"/>


<meta property="og:url" content="http://beta.ioslift.com/support-devices"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Supported Devices"/>
<meta property="og:description" content="Check your device is supported for the big update from our Compatible list of IOS 14"/>
<meta property="og:image" content="http://beta.ioslift.com/img/ls.png"/>


<meta name="twitter:card" content="summary_large_image"/>
<meta property="twitter:domain" content="beta.ioslift.com"/>
<meta property="twitter:url" content="https://beta.ioslift.com/support-devices"/>
<meta name="twitter:title" content="Supported Devices"/>
<meta name="twitter:description" content="Check your device is supported for the big update from our Compatible list of IOS 14"/>
<meta name="twitter:image" content="http://beta.ioslift.com/img/ls.png"/>

       
        </Helmet>
<Header/>

        

   
        <div style={{backgroundColor: '#F8F8F8',textAlign:'center'}}>
            <div style={{textAlign:'center'}}>
            <h1> <strong> Supported Devices For iOS 14</strong> </h1>
            <h3>Check Your Device.</h3>
            </div>
 
           
      <Image src={Ldevice} fluid />
      
       </div>
     <div>
     
     </div>
     <CenterPart/>
     <Footer/>
</>
      
    )
}
export default DHead