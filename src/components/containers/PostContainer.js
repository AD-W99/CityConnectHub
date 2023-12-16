import styles from "../../styles/containerStyles/PostContainer.module.css"

export function PostContainer({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}