import styles from "../../styles/containerStyles/MainPageContainer.module.css"

export function MainPageContainer({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}