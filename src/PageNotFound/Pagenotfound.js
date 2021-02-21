import Header from '../Header'
import {Image} from 'react-bootstrap'
import Ldevice from '../img/LogoSupport.png'
import DeviceLogo from '../img/404.png'
import Pgcenter from './Pgcenter'
import Footer from '../Footer'
import {Helmet} from 'react-helmet'
function PagenotFound() {
    
return(

    <>
    <Helmet>
            <title>PageNotFound</title>
            <meta name="description" content="oops Page Not Found Return to ProfileBeta.com" />
            
        </Helmet>
    <Header />
    <div style={{backgroundColor: '#F8F8F8',textAlign:'center'}}>
            <div style={{textAlign:'center'}}>
            <h1> <strong> Page Not Found</strong> </h1>
            <h3>404</h3>
            </div>
 
           
      <Image src={DeviceLogo} fluid />
      
       </div>
       <Pgcenter/>
       <Footer/>
    </>

)

} 
export default PagenotFound