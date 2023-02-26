import React from 'react'
import '../styles/Intro.scss'

import intro2 from '../images/intro2.png'
import AnchorLink from "react-anchor-link-smooth-scroll"
function Intro() {
    return(
<div className="intro" id="intro">

    <div className="left-side">
 <h1>Weboldalak jó minőségben és jó áron.</h1>
 <h3>Évente mintegy 200 weblap készül nálunk.</h3>

 <div className="purchase">
    <div className="choose" >
<button ><AnchorLink className="link" href="#contacts">Választás</AnchorLink></button>
<p>(Többféle weblap közül választhatsz)</p>
</div>
</div>

</div>
<div className="right-side">
    <img src={intro2} alt="" />
</div>
</div>
    )
    
}

export default Intro