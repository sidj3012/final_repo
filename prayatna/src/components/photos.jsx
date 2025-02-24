// import React, { useState } from 'react';
import "./styles/photos.css";
import photos1 from "./assets/photos1.jpeg"
import photos2 from "./assets/photos2.jpeg"
import photos3 from "./assets/photos3.jpeg"
import photos4 from "./assets/photos4.jpeg"
import photos5 from "./assets/photos5.jpeg"
import photos6 from "./assets/photos6.jpeg"
import photos7 from "./assets/photos7.jpeg"
import photos8 from "./assets/photos8.jpeg"
import photos9 from "./assets/photos9.jpeg"
import photos10 from "./assets/photos10.jpeg"
import photos11 from "./assets/photos11.jpeg"
import photos12 from "./assets/photos12.jpeg"
import photos13 from "./assets/photos13.jpeg"
import photos14 from "./assets/photos14.jpeg"
import photos15 from "./assets/photos15.jpeg"
const photos = [
  {
    id: 1,
    src: "",
  },
  {
    id: 2,
    src: "/Images/2.jpg",
  },
  // Add more photos here...
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 4,
    src: "https://images.unsplash.com/photo-1562307534-a03738d2a81a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

function PhotosGallery() {
  return (
    <>
    <h1 className="title_photo">Get a glimpse of fire in our Veins</h1>
    <div class="container_photo">
      <div class="column_photo">
        <div class="small-image_photo"><img src={photos1} alt="" className="image_ins" /></div>
        <div class="big-image_photo"><img src={photos2} alt="" className="image_ins" /></div>
      </div>
      <div class="column_photo">
        <div class="big-image_photo"><img src={photos3} alt="" className="image_ins" /></div>
        <div class="small-image_photo"><img src={photos4} alt="" className="image_ins" /></div>
      </div>
      <div class="column_photo">
        <div class="small-image_photo"><img src={photos5} alt="" className="image_ins" /></div>
        <div class="big-image_photo"><img src={photos6} alt="" className="image_ins" /></div>
      </div>
      <div class="column_photo">
        <div class="big-image_photo"><img src={photos7} alt="" className="image_ins" /></div>
        <div class="small-image_photo"><img src={photos8} alt="" className="image_ins" /></div>
      </div>
    </div>
    <div class="container_photo">
      <div class="column_photo">
        <div class="small-image_photo"><img src={photos9} alt="" className="image_ins" /></div>
        <div class="big-image_photo"><img src={photos10} alt="" className="image_ins" /></div>
      </div>
      <div class="column_photo">
        <div class="big-image_photo"><img src={photos11} alt="" className="image_ins" /></div>
        <div class="small-image_photo"><img src={photos12} alt="" className="image_ins" /></div>
      </div>
      <div class="column_photo">
        <div class="small-image_photo"><img src={photos13} alt="" className="image_ins" /></div>
        <div class="big-image_photo"><img src={photos14} alt="" className="image_ins" /></div>
      </div>
      <div class="column_photo">
        <div class="big-image_photo"><img src={photos15} alt="" className="image_ins" /></div>
        <div class="small-image_photo"><img src={photos8} alt="" className="image_ins" /></div>
      </div>
    </div>
    </>
  );
}

export default PhotosGallery;
