import styles from './Layout.module.css'
const Layout = ({children}) => {
    return (
       <>
       <header className={styles.Header}>
        <h1>Book App</h1>
        <p><a href="Botostart.com">Botostart</a> | React.js Full Course</p>
       </header>

        {children}

        
       <footer className={styles.Footer}>
        <p>Develope by Negar with ❤️</p>
       </footer>
       </>
    );
};

export default Layout;