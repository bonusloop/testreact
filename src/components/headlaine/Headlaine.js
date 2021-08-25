import React from 'react';
import './Headlaine.css';
import thumbnail from '../assets/image/image1.jpg';
import like from '../assets/image/like.svg';
import dislike from '../assets/image/dislike.svg';
import time from '../assets/image/time.svg';

function Headlaine() {
  return (
    <article className="headline">
        <img className="thumbnail-img" src={thumbnail} alt="" />
          <div className="info">
            <h1 className="title" >Hate speech vs free speech</h1>
            <div className="rating">
              <div className="like">
                <img className="like-icon" src={like} alt="" />
                <span className="text" >10.8k</span>
              </div>
              <div className="dislike">
                <img className="dislike-icon" src={dislike} alt="" />
                <span className="text" >1.4k</span>
              </div>
            </div>
          
            <div className="wrapper">
              <span className="label" >BBC NEWS</span>
                <div className="time">
                  <img className="time-icon" src={time} alt="" />
                  <span className="time-text" >2:00 pm</span>
                </div>
            </div>
          </div>
    </article>
  );
}

export default Headlaine;