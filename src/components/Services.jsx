import React from 'react'
import '../styles/Services.scss'
import { useEffect } from 'react'


import Carousel from 'react-elastic-carousel'
import Websites from '../datas/Websites'

const breakPoints = [
    {width: 1,itemsToShow:1},
    {width: 550,itemsToShow:2},
    {width: 768,itemsToShow:3},
    {width: 1000,itemsToShow:4},
];
function Services() {
    
       

    
 return(
    <div className="services" id="services">
        <h1>Szolgáltatásaink ↴</h1>
   
        <Carousel className="carousel" breakPoints={breakPoints}>
            {Websites.map((website) => 
           
           <div className="website" key={website.id} >
          

     
              <img className="image" src={website.image} alt="" />
                 <p className="title">{website.title} </p>
                 <p className="description">{website.description}</p>
                
              </div>
             
            )}
          
           
            

        </Carousel>
        </div>
  
 )
}

export default Services