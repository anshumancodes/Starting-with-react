import styles from './nav.module.css';

const Nav = () => {
    console.log(styles);
    
    return (
        <header className={`${styles.header}`}>
            <nav className={styles.navigation}>
                <div className="logo">
                    <img src="/images/logo.png" alt="Logo" />
                </div>

                <div className={styles.links}>
                    <a href="#"className={styles.link}>home</a>
                    <a href="#"className={styles.link}>about</a>
                    <a href="#"className={styles.link}>contact</a>
                </div>
            </nav>
        </header>
    )
}

export default Nav;
