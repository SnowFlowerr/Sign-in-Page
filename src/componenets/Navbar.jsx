import React from 'react'
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul className={styles.menu}>
                <li className={styles.item}><Link to='/'>Home</Link></li>
                <li className={styles.item}><Link to='/about'>About</Link></li>
                <li className={styles.item}><Link to='/contact'>Contact</Link></li>
                <li className={styles.item}><Link to='/signin'>Signin</Link></li>
            </ul>
        </div>
    )
}
