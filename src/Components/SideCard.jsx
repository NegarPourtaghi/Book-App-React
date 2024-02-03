import styles from './SideCard.module.css'
const SideCard = ({Data:{image , title}}) => {
    return (
        <div className={styles.SideCard}>
            <img src={image} alt={title} />
            <p>{title}</p>
        </div>
    );
};

export default SideCard;