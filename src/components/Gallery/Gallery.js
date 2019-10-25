import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons"

 class Gallery extends Component {
     handleClickImgDetails = () =>{
         console.log("made it to click dtails")
     }
    render() {
        const images= [
            {title: "Random Title", description:"random image", src:"https://source.unsplash.com/mgaS4FlsYxQ"},
            {title: "Random Title", description:"random image",src:"https://source.unsplash.com/Ve8yy0Oi1rE"},
            {title: "Random Title", description:"random image",src:"https://source.unsplash.com/UNGw3QD3DIA"},
            {title: "Random Title", description:"random image",src:"https://source.unsplash.com/WvvDPMBD8Eg"},
            {title: "Random Title", description:"random image",src:"https://source.unsplash.com/NhlKx6Uvm3E"},
            {title: "Random Title", description:"random image",src:"https://source.unsplash.com/jGAWr8wPeh0"},
            {title: "Random Title", description:"random image",src:"https://source.unsplash.com/OdvNB15f7Uo"},
            {title: "Random Title", description:"random image",src:"https://source.unsplash.com/sV5JQ1ICrrg"},
            {title: "Random Title", description:"random image",src:"https://source.unsplash.com/Kr_RijTa0kg"}
        ]
        const image = images.map(function(el){
            return (
                 <div className="image">
                     <img src={el.src} />
                     <span >
                     <FontAwesomeIcon icon={faHeart} className="pin" size="lg"/>
                     </span>
                     <Link to="/image-details">
                        <button className="btn">See more</button>
                    </Link>
                     <h2>{el.title}</h2>
                     
                 </div>
             );
         });
        return (
           <div class="grid-gallery">
               {image}
           </div>
        )
    }
}

export default Gallery;