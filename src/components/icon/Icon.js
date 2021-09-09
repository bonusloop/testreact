import s from'./Icon.module.css';


function Icon(props) {
    return (
        <div className={s.items}>
            <img className={s.iconSidebar} src={props.thumbnail} alt="" />
            <h2 className={s.title}>{props.title}</h2>
        </div>
    );
  }
  
  export default Icon;