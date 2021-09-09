import s from'./News.module.css';
import Label from '../label/Label';
import Time from '../time/Time';


function News(props) {
    return (
        <article className={s.news}>
            <img className={s.imgNews} src={props.newsimg} alt="" />
            <div className={s.wrapper}>
                <h1 className={s.title}>{props.title}</h1>
                <div className={s.rightdlock}>
                    <Label label={props.label}/>
                    <Time time={props.time} />
                </div>
            </div>
        </article>
    );
  }
  
  export default News;