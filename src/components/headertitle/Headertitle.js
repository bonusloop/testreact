import s from'./Headertitle.module.css';
import icon from'../assets/image/Icon.svg'


function Headertitle(props) {
    return (
        <div className={s.headertitle}>
            <h2 className={s.title}>{props.title}</h2>
            <a href="https://aliexpress.ru/" className={s.icon}>{props.icon}
                <img src={icon} className={s.iconImg} alt=""/>
            </a>
        </div>
    );
}
export default Headertitle;