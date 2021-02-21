import {Table} from 'react-bootstrap'
import React, { useState ,useEffect} from 'react'
import Footer from '../Footer'
import {Helmet} from "react-helmet";

import { browserName,deviceType, CustomView,isMobile ,isFirefox,isSafari ,deviceDetect,mobileModel} from 'react-device-detect';


// https://www.npmjs.com/package/react-device-detect yahan say Device Selection ka Code Ayega

function Dcenter() {

    const [Browser, SetBrowser] = useState('');

useEffect(()=>{
if (mobileModel){
    SetBrowser(mobileModel)
}

console.log(mobileModel)
},[])
    return(

        <div>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Device Type</th>
      <th>Device Model</th>
      <th>Browser</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>{Browser}</td>
      <td>{deviceType}</td>
      <td>{browserName}</td>
    </tr>
  
   
  </tbody>
</Table>

        </div>
    )
    
}
export default Dcenter