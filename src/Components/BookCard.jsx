import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

import styles from '../Components/BookCard.module.css'
const BookCard = ({Data,likedHandlerList}) => {
    const {title, image ,author ,pages, language}=Data;
    const [Like , setLike]=useState(false);
    const likeHandler=()=>{
        likedHandlerList(Data , Like)
        setLike((like) =>!like)
    }
    return (
        <div className={styles.Card}>
            <img src={image} alt={title} />
            <div className={styles.Info}>
                <h1>{title}</h1>
                <p>{author}</p>
                <div>
                    <span>{language}</span>
                    <span>{pages} pages</span>
                </div>
            </div>

            <button onClick={likeHandler}><AiFillHeart color={Like ? "red" : "#e0e0e0"} fontSize="1.8rem"/></button>
        </div>
    );
};

export default BookCard;