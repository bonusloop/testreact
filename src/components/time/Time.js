import s from'./Time.module.css';
import time from '../assets/image/time.svg';


function Time(props) {
    return (
        <div className={s.time}>
                  <img className={s.timeIcon} src={time} alt="" />
                  <span className={s.timeText}>{props.time}</span>
                </div>
    );
  }
  
  export default Time;