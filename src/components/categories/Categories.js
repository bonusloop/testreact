import s from'./Categories.module.css';


function Categories(props) {
    return (
        <div className={s.categoriesCard}>
            <img style={props.style} className={s.cardName} src={props.thumbnail} alt="" />
            <h2 className={s.cardTitle}>{props.cardTitle}</h2>
        </div>
    );
  }
  
  export default Categories;