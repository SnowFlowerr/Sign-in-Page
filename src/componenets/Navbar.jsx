import React from 'react'
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.menu}>
                <span className={styles.item}><Link to='/'>Home</Link></span>
                <span className={styles.item}><Link to='/about'>About</Link></span>
                <span className={styles.item}><Link to='/contact'>Contact</Link></span>
                <span className={styles.item}><Link to='/signin'>Signin</Link></span>
            </div>
        </div>
    )
}
