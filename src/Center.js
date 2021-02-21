
import React from 'react';
import { Row } from 'react-bootstrap';
import img8 from './img/img8.jpg';
import {Badge,Image} from 'react-bootstrap'
function Center() {
    return(

        <div style={{backgroundColor: '#F8F8F8'}}>
<h1>Download Profiles Beta</h1>
<h3>Get what is New.</h3>

{/* imgage yahan Ayegi  */}
<div>
<Image src={ img8}fluid />
</div>

<div >


     

</div>
<div>

<div class="alert alert-info" role="alert">
These Are <strong> Developers Beta Profiles</strong>  if you Want the Public Beta You Can Donwload it form Apples Offical <a href="https://beta.apple.com" class="alert-link">Website</a>
</div>

</div>

        </div>


    )
}

export default Center;