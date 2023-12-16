import styles from "../styles/SelectedPost.module.css"

export function SelectedPost({ selectedPost }) {
    const { title, companyName, location, postedTime, description, workType, contractType, experienceLevel, salary } = selectedPost

    return selectedPost && Object.keys(selectedPost).length > 0 ? 
        <div className={styles.container}>
            <div className={styles.topPostContainer}>
                <h3 style={{ margin: "0" }}>{title}</h3>
                <label>{companyName}</label>
                <label>{location}</label>
                <label>{contractType}</label>
            </div>
            <div>
                <label className={styles.label}>Work Type: </label>
                <span>{workType}</span>
            </div>
            <div>
                <label className={styles.label}>Experience Level: </label>
                <span>{experienceLevel}</span>
            </div>
            <div>
                <label className={styles.label}>Salary: </label>
                <span>{salary}</span>
            </div>
            <div>
                <label className={styles.label}>Last Posted: </label>
                <span>{postedTime}</span>
            </div>
            <div style={{marginTop: "20px"}}>
                <label className={styles.label}>Description</label>
                <div>
                    {description}
                </div>
            </div>
        </div> 
        : <></>
}