import { useState } from 'react';
import {books } from '../Constants/mockData'
import BookCard from './BookCard';
import SideCard from './SideCard';
import { AiOutlineSearch } from "react-icons/ai";
import styles from './Books.module.css'
const Books = () => {
    const [Liked , setLiked]=useState([])
    const [Search , setSearch]=useState("")
    const [BooksList , setBooksList]=useState(books)
    const likedHandlerList= (book , status) =>{
        if(status){
            const newItems=Liked.filter(item => item.id !== book.id);
            setLiked(newItems);
        }else{
            
            setLiked(liked => [...liked , book ])


        }

    }
    const SearchHandler=()=>{
       if(Search){
        const newSearch=BooksList.filter(item => item.title.toLowerCase().includes(Search))
        setBooksList(newSearch)
       }else{
        setBooksList(books)
       }

    }
    
    return (
        <>
        <div className={styles.Search}>
        <input type='text' value={Search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
        <button onClick={SearchHandler}><AiOutlineSearch/></button>
        </div>

        <div className={styles.Container}>
           <div className={styles.Cards}>
           {
                BooksList.map(Book => (<BookCard  Data={Book} key={Book.id} likedHandlerList={likedHandlerList} />))
            }
           </div>
           <div > 
            {
                !!Liked.length && <div className={styles.Favorites}>
                               <h4>Favorites</h4>

                    {Liked.map(item => <SideCard key={item.id} Data={item} />)}</div>
            }
           </div>
        </div>
        </>
    );
};

export default Books;