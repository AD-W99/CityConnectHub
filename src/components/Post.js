import styles from "../styles/Post.module.css"

export function Post({ data, setSelectedListing }) {
    const { title, companyName, location, description } = data

    return (
        <div className={styles.post} onClick={() => setSelectedListing(data)}>
            <div className={styles.topPostContainer}>
                <h3 className={styles.title}>{title}</h3>
                <div>{companyName}</div>
                <div>{location}</div>
            </div>
            <div className={styles.description}>{description}</div>
        </div>
    )
}