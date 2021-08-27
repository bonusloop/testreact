import s from'./Headlaine.module.css';

import like from '../assets/image/like.svg';
import dislike from '../assets/image/dislike.svg';

import Label from '../label/Label';
import Time from '../time/Time';

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
              <Label label={props.label}/>
                <Time time={props.time}/>
            </div>
          </div>
    </article>
  );
}

export default Headlaine;