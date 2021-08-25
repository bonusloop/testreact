import React from 'react';
import s from'./Headlaine.module.css';

import like from '../assets/image/like.svg';
import dislike from '../assets/image/dislike.svg';
import time from '../assets/image/time.svg';

function Headlaine(props) {
  return (
    <article className={s.headline}>
        <img className={s.thumbnailImg} src={props.thumbnail} alt="" />
          <div className={s.info}>
            <h1 className={s.title}>{props.title}</h1>
            <div className={s.rating}>
              <div className={s.like}>
                <img className={s.likeIcon} src={like} alt="" />
                <span className={s.text}>{props.like}</span>
              </div>
              <div className={s.dislike}>
                <img className={s.dislikeIcon} src={dislike} alt="" />
                <span className={s.text}>{props.dislake}</span>
              </div>
            </div>
          
            <div className={s.wrapper}>
              <span className={s.label}>{props.label}</span>
                <div className={s.time}>
                  <img className={s.timeIcon} src={time} alt="" />
                  <span className={s.timeText}>{props.time}</span>
                </div>
            </div>
          </div>
    </article>
  );
}

export default Headlaine;