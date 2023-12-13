import styles from "../../styles/containerStyles/MapContainer.module.css"

export function MapContainer({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}