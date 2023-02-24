import React from 'react'
import '../styles/About.scss'
import Carousel from 'react-elastic-carousel'
import Data from '../datas/Datas'

function About() {
    
    return(
        <div className="about" id="about">
            <h1>[ Miért a melwebs? ]</h1>

            <div className="pros">

                <div className="item">
                    <div className="feature">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.5.5A.5.5 0 016 0h4a.5.5 0 010 1H9v1.07a7.002 7.002 0 013.537 12.26l.817.816a.5.5 0 01-.708.708l-.924-.925A6.967 6.967 0 018 16a6.967 6.967 0 01-3.722-1.07l-.924.924a.5.5 0 01-.708-.708l.817-.816A7.002 7.002 0 017 2.07V1H5.999a.5.5 0 01-.5-.5zM.86 5.387A2.5 2.5 0 114.387 1.86 8.035 8.035 0 00.86 5.387zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 013.527 3.527A2.5 2.5 0 0013.5 1zm-5 4a.5.5 0 00-1 0v3.882l-1.447 2.894a.5.5 0 10.894.448l1.5-3A.5.5 0 008.5 9V5z" clip-rule="evenodd"></path></svg>
            <p>Hatékonyság</p>
            </div>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad reiciendis velit minus.</p>
            </div>

            <div className="item">

            <div className="feature">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"></path><path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"></path></svg>
            <p>Minőség</p>
            </div>
            <p className="description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad reiciendis velit minus.</p>
            </div>


            <div className="item">
            <div className="feature">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.213 1.018a.572.572 0 01.756.05.57.57 0 01.057.746C15.085 3.082 12.044 7.107 9.6 9.55c-.71.71-1.42 1.243-1.952 1.596-.508.339-1.167.234-1.599-.197-.416-.416-.53-1.047-.212-1.543.346-.542.887-1.273 1.642-1.977 2.521-2.35 6.476-5.44 7.734-6.411z"></path><path d="M7 12a2 2 0 01-2 2c-1 0-2 0-3.5-.5s.5-1 1-1.5 1.395-2 2.5-2a2 2 0 012 2z"></path></svg>
            <p>Egyediség</p>
            </div>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad reiciendis velit minus.!</p>
            </div>
        </div>
         <div className="other-infos">
            <div className="left-side">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, dolore! Explicabo harum necessitatibus consequatur molestias facere.</h3>
            <ul>
               <li>Lorem ipsum dolor sit amet.</li>
               <li>Lorem ipsum dolor sit amet.</li>
               <li>Lorem ipsum dolor sit. </li>
               <li>Lorem, ipsum dolor.</li>
            </ul>
            </div>
        
            <div className="right-side">
                 
                 <div >
                   
                        
                 
                 <div>
                     <div  className="first-line">
                <div className="image">
 <img className="logo" src={Data[0].logo} alt=""></img>
 </div>
 <div className="right">
 <p className="name">{Data[0].name}</p>
 <p className="website">{Data[0].website}</p>
 </div>
 </div>


 <p className="comment">„<i>{Data[0].comment}</i>”</p>
 </div>
              
           
                </div>
                </div>
               
         </div>
        </div>   
    )
    
    }
    
    export default About
    