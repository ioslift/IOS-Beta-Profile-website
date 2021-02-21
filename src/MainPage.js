
import reactDom from 'react-dom';
import '.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {  } from 'react';
import {Button,Modal,Accordion,Card,Table} from 'react-bootstrap'; 

import './Code.css'
import img8 from './img/img8.jpg';
import ipad from './img/ipados-14-logo.png';
import ios from './img/ios14.jpg';
import mac from './img/macos.jpg';
import tvos from './img/tvOS.png';
import watchos from './img/watchos.png';
import services from './Services.css'
import { useState } from 'react';
import {Helmet} from 'react-helmet'
function MainPage(){
    const [lgShow, setLgShow] = useState(false);
    const [ipadShow, setipadShow] = useState(false);
    const [TVShow, setTvShow] = useState(false);
return(



    <>
  <Helmet>
 
<title>Profile Beta </title>
<meta name="description" content="Download Profile Beta for your iPhone iPad and iPod "/>


<meta property="og:url" content="https://beta.ioslift.com"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Profile Beta "/>
<meta property="og:description" content="Download Profile Beta for your iPhone iPad and iPod "/>
<meta property="og:image" content="http://beta.ioslift.com/img/og20.jpg"/>


<meta name="twitter:card" content="summary_large_image"/>
<meta property="twitter:domain" content="beta.ioslift.com"/>
<meta property="twitter:url" content="https://beta.ioslift.com"/>
<meta name="twitter:title" content="Profile Beta "/>
<meta name="twitter:description" content="Download Profile Beta for your iPhone iPad and iPod "/>
<meta name="twitter:image" content="http://beta.ioslift.com/img/og20.jpg" />


       
        </Helmet>

<div>


<div class='  card justify-content-center mx-auto  row flex-row p-2 bd-highlight ' id="iphone">

<div class="card box d-flex align-items-start flex-col mx-3 mb-3" style={{ width: '20rem' }} >
<div class="inner">
<img src={ipad}className=" card-img-top" alt='faheem ali ' height='260rem' /> 
</div>

  <div class="card-body">
    <h2 class="card-title">iPadOS</h2>
    <p class="card-text" style={{textAlign: 'center'}}> Update your apps to use new features, and test your apps against API changes .</p>
    <a href="../ProfilesBeta/iOS_iPadOS_14_Beta_Profile.mobileconfig" download class="btn btn-primary">Download</a><a onClick={() => setipadShow(true)}  class="btn btn-secondary ml-1">IPSW </a>
  </div>

</div>


<div class="card box mx-3 mb-3" style={{ width: '20rem' }} >
<div class="inner">
<img src={ios}className=" card-img-top" alt='faheem ali ' height='260rem' /> 
</div>
  <div class="card-body">
    <h2 class="card-title">iOS</h2>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="../ProfilesBeta/iOS_iPadOS_14_Beta_Profile.mobileconfig" download class="btn btn-primary">Download</a><a onClick={() => setLgShow(true)} class="btn btn-secondary ml-1">IPSW </a>
  </div>
  </div>
  

  <div class="card box  mx-3 mb-3" style={{ width: '20rem' }} >
  <div class="inner">
<img src={mac}className=" card-img-top" alt='faheem ali ' height='260rem' /> 
</div>
  <div class="card-body">
    <h2 class="card-title">MacOS</h2>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a  href="../ProfilesBeta/macOSDeveloperBetaAccessUtility.dmg" download class="btn btn-primary">Download</a>
  </div>
  </div>
  
 







 

</div>
<> 
<div>

  <h1>Google Ads  </h1>
</div>

</>

<div>



<div class='card justify-content-center mx-auto  row flex-row p-2 bd-highlight '>

<div class="card box d-flex align-items-start flex-col mx-3 mb-3" style={{ width: '20rem' }} >
<div class="inner">
<img src={tvos}className=" card-img-top" alt='faheem ali ' height='260rem' /> 
</div>
  <div class="card-body">
    <h2 class="card-title">tvOS</h2>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="../ProfilesBeta/tvOS_14_Beta_Profile.mobileconfig" download class="btn btn-primary">Download</a><a  onClick={() => setTvShow(true)} class="btn btn-secondary ml-1">IPSW </a>
  </div>

</div>


<div class="card box mx-3 mb-3" style={{ width: '20rem' }} >
<div class="inner">
<img src={watchos}className=" card-img-top" alt='faheem ali ' height='260rem' /> 
</div>
  <div class="card-body">
    <h2 class="card-title">WatchOS</h2>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="../ProfilesBeta/watchOS_7_Beta_Profilemobileconfig.mobileconfig" downlaod class="btn btn-primary">Download</a>
  </div>
  </div>
  

  <div class="card box  mx-3 mb-3" style={{ width: '20rem' }} >
  <div class="inner">
<img src={ipad}className=" card-img-top" alt='faheem ali ' height='260rem' /> 
</div>
  <div class="card-body">
  <h2 class="card-title">HomePod</h2>
  <span class="rounded-lg d-inline-block pr-2 my-3"><strong class="px-2 mr-2 d-inline-block">iOS 14.5</strong>beta 2</span>
   
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="../ProfilesBeta/HomePOD.mobileconfig" download class="btn btn-primary">Download</a>
  </div>
  </div>
  
 

</div>





</div>

<div>

<Modal
        size="lg"
        show={TVShow}
        onHide={() => setTvShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Download Firmware iPad 
          </Modal.Title>
         
        </Modal.Header>
        <Modal.Body><Accordion defaultActiveKey="0">
  <Card>
  <div class="alert alert-warning" role="alert">
  Check Out of offical Website ! <a href="https://ioslift.com" class="alert-link">iOSlift</a>
</div>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      <strong> <strong>Apple TvOS</strong></strong> 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <table class="table table-striped mb-0">
<tbody><tr>
<td class="col-11">TvOS 14.5 Beta 2</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2021WinterSeed/fullrestores/071-03699/A29EEB5A-D08B-4892-8A99-5DB5A27513BA/AppleTV5,3_14.5_18L5163d_Restore.ipsw">Download</a></td>
</tr><tr>

</tr><tr>

</tr> </tbody>
</table>
</Card.Body>
    </Accordion.Collapse>
  </Card>

</Accordion>

<h1>Frequently Asked Questions </h1>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>How do I install this?
</th>
    
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Just search for it on Google, you'll find every post you need.

</td>
      
     
    </tr>
    <tr>
      <td>What if I download the wrong file?</td>
      
     
    </tr>
    <tr>
      <td>iTunes will stop the process if it detects that you have the wrong file for your device.

</td>
     
    </tr>
  </tbody>
</Table>

</Modal.Body>
      </Modal>


</div>


<div>
{/* Yahan Pay IPad k OS ki Data Ayegi  */}
<Modal
        size="lg"
        show={ipadShow}
        onHide={() => setipadShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Download Firmware iPad 18E5140k (iPhone11,2)
          </Modal.Title>
         
        </Modal.Header>
        <Modal.Body><Accordion defaultActiveKey="0">
  <Card>
  <div class="alert alert-warning" role="alert">
  Check Out of offical Website ! <a href="https://ioslift.com" class="alert-link">iOSlift</a>
</div>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      <strong> iPad Air</strong> 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <table class="table table-striped mb-0">
<tbody><tr>
<td class="col-11">iPad Air 2</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03413/6CE556A6-A06B-4AA8-BE1B-5C2627FFF658/iPad_64bit_TouchID_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPad Air (3rd generation)</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-02862/437B4B13-BDFC-423B-849B-7B1E34C0A695/iPad_Spring_2019_14.5_18E5140j_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPad Air (4th generation)</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03493/7601C8DD-16EC-41CE-BAC8-D864B828706A/iPad_Fall_2020_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr> </tbody>
</table>
</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      <strong>iPad</strong>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <table class="table table-striped mb-0">
<tbody><tr>
<td class="col-11">iPad (5th generation)</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03602/35731C4B-3B18-4D0D-B5EA-08327E116987/iPad_64bit_TouchID_ASTC_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPad (6th generation)</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03602/35731C4B-3B18-4D0D-B5EA-08327E116987/iPad_64bit_TouchID_ASTC_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPad (7th generation)</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03491/102C3AE8-3408-466B-B927-5555F44B3E3D/iPad_Educational_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPad (8th generation)</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03536/49154FEF-B597-418D-8C4E-9900A185ECC7/iPad_Educational_2020_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr> </tbody>
</table>

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
      <strong>iPad Pro</strong>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>

      <table class="table table-striped mb-0">
<tbody><tr>
<td class="col-11">iPad Pro (12.9-inch)</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03447/1C3BF6AA-3165-4E14-B20C-2A3D62043A64/iPadPro_12.9_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPad Pro (9.7-inch)</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03430/358D45B1-5DFF-4EA7-A49A-303238FEB2CD/iPadPro_9.7_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPad Pro (12.9-inch) (2nd generation)</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03541/355B4A5F-8217-4701-B196-25328F97FBF6/iPad_Pro_HFR_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPad Pro (10.5-inch)</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03541/355B4A5F-8217-4701-B196-25328F97FBF6/iPad_Pro_HFR_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPad Pro (11-inch)</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03628/AB6CBDB9-DF99-4ADF-86F9-3C5E780C54B8/iPad_Pro_A12X_A12Z_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPad Pro (12.9-inch) (3rd generation)</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03628/AB6CBDB9-DF99-4ADF-86F9-3C5E780C54B8/iPad_Pro_A12X_A12Z_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPad Pro (11-inch) (2nd generation)</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03628/AB6CBDB9-DF99-4ADF-86F9-3C5E780C54B8/iPad_Pro_A12X_A12Z_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPad Pro (12.9-inch) (4th generation)</td>
 <td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03628/AB6CBDB9-DF99-4ADF-86F9-3C5E780C54B8/iPad_Pro_A12X_A12Z_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr> </tbody>
</table>

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
    <strong>iPad Mini</strong>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body> 
        

        <table class="table table-striped mb-0">
<tbody><tr>
<td class="col-11">iPad mini 4</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03413/6CE556A6-A06B-4AA8-BE1B-5C2627FFF658/iPad_64bit_TouchID_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPad mini (5th generation)</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-02862/437B4B13-BDFC-423B-849B-7B1E34C0A695/iPad_Spring_2019_14.5_18E5140j_Restore.ipsw">Download</a></td>
</tr> </tbody>
</table>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

<h1>Frequently Asked Questions </h1>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>How do I install this?
</th>
    
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Just search for it on Google, you'll find every post you need.

</td>
      
     
    </tr>
    <tr>
      <td>What if I download the wrong file?</td>
      
     
    </tr>
    <tr>
      <td>iTunes will stop the process if it detects that you have the wrong file for your device. The only thing it will cost you is another download, so please read carefully.

</td>
     
    </tr>
  </tbody>
</Table>
</Modal.Body>
      </Modal>


</div>



</div>

<Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Download Firmware iOS 18E5140k (iPhone11,2)
          </Modal.Title>
         
        </Modal.Header>
        <Modal.Body><Accordion defaultActiveKey="0">
  <Card>
  <div class="alert alert-warning" role="alert">
  A simple warning alert—check it out! <a href="#" class="alert-link">an example link</a>
</div>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      iPhone
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body><table class="table table-striped mb-0">
<tbody><tr>
<td class="col-11">iPhone 6s</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03443/96BB4453-DE8C-4629-BC44-4BA68D0AF458/iPhone_4.7_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPhone 6s Plus</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03600/D3AD3CBA-970F-434F-B2A5-020585940F91/iPhone_5.5_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPhone SE (1st generation)</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03548/F70579DA-F079-4C53-BDE1-0CCA2B16817F/iPhone_4.0_64bit_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPhone 7</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03626/33EDB5F2-EF85-4A2A-AA58-33740BB9E295/iPhone_4.7_P3_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPhone 7 Plus</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03608/271C52B7-1441-46E3-ACC1-5F5A0CD92D59/iPhone_5.5_P3_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPhone 8</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03626/33EDB5F2-EF85-4A2A-AA58-33740BB9E295/iPhone_4.7_P3_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPhone 8 Plus</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03608/271C52B7-1441-46E3-ACC1-5F5A0CD92D59/iPhone_5.5_P3_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPhone X</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03490/A7EB47FC-6289-4F34-9ED1-2CE13DEAB723/iPhone10,3,iPhone10,6_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPhone XR</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03420/7436B7CA-1677-4FD6-A7D3-CB5B1C8492C7/iPhone11,8,iPhone12,1_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPhone XS</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03570/77792549-99D5-4057-922A-45E31232D52E/iPhone11,2,iPhone11,4,iPhone11,6,iPhone12,3,iPhone12,5_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPhone XS Max</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03570/77792549-99D5-4057-922A-45E31232D52E/iPhone11,2,iPhone11,4,iPhone11,6,iPhone12,3,iPhone12,5_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPhone 11</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03420/7436B7CA-1677-4FD6-A7D3-CB5B1C8492C7/iPhone11,8,iPhone12,1_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPhone 11 Pro</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03570/77792549-99D5-4057-922A-45E31232D52E/iPhone11,2,iPhone11,4,iPhone11,6,iPhone12,3,iPhone12,5_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPhone 11 Pro Max</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03570/77792549-99D5-4057-922A-45E31232D52E/iPhone11,2,iPhone11,4,iPhone11,6,iPhone12,3,iPhone12,5_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPhone SE (2nd generation)</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03538/9758FD69-27B5-4844-BCA7-A6F5B43B6798/iPhone12,8_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPhone 12 mini</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03564/A4BEBA89-493D-45A7-A192-F6E8C6C8106A/iPhone13,1_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPhone 12</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03381/349E5D1F-3B45-47CC-B8A3-33958DB9856F/iPhone13,2,iPhone13,3_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPhone 12 Pro</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03381/349E5D1F-3B45-47CC-B8A3-33958DB9856F/iPhone13,2,iPhone13,3_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr><tr>
<td class="col-11">iPhone 12 Pro Max</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03451/B0A9BEAE-E530-4B55-B4E2-40D26327BDA2/iPhone13,4_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr> </tbody>
</table>
</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      iPod
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body><table class="table table-striped mb-0">
<tbody><tr>
<td class="col-11">iPod touch (7th generation)</td>
<td class="col-1"> <a class="ipsw-button-down rounded-sm text-nowrap" href="https://updates.cdn-apple.com/2020WinterSeed/fullrestores/071-03521/08322A69-756E-4898-9CF3-C02FB7C1CB38/iPodtouch_7_14.5_18E5140k_Restore.ipsw">Download</a></td>
</tr> </tbody>
</table></Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

<h1>Frequently Asked Questions </h1>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>How do I install this?
</th>
    
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Just search for it on Google, you'll find every post you need.

</td>
      
     
    </tr>
    <tr>
      <td>What if I download the wrong file?</td>
      
     
    </tr>
    <tr>
      <td>iTunes will stop the process if it detects that you have the wrong file for your device. The only thing it will cost you is another download, so please read carefully.

</td>
     
    </tr>
  </tbody>
</Table>
</Modal.Body>
      </Modal>


<div>

</div>
    
</>


)

}
export default MainPage;