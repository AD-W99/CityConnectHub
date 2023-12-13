import styles from "../../styles/containerStyles/JobSearchContainer.module.css";

export function JobSearchContainer({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}