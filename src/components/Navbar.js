import { Button } from "primereact/button";

import styles from "../styles/Navbar.module.css"

export function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                Logo
            </div>
            <div className={styles.menu}>
                <ul className={styles.linkOptions}>
                    <li>Home</li>
                    <li>Dashboard</li>
                    <li>Notifications</li>
                    <li>Account</li>
                </ul>
                <Button label="Sign In" icon="pi pi-user" style={{ maxHeight: "50px" }} />
            </div>
        </div>
    )
}