import s from'./Navigation.module.css';

import iconup from'../assets/image/Iconup.svg';
import icondown from'../assets/image/Icondown.svg';


function Navigation(props) {
    return (
        <div className={s.navigation}>
            <img className={s.navImg} src={props.thumbnail}/>
            <h2 className={s.title} >{props.title}</h2>
            <div className={s.navIcon}>
                <img className={s.iconup} src={iconup}/>
                <img className={s.icondown} src={icondown}/>
            </div>
        </div>
    );
}

export default Navigation;