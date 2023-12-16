import { Searchbar } from "./Searchbar"
import { JobSearchContainer } from "./containers/JobSearchContainer"
import { Button } from "primereact/button"

import styles from "../styles/JobSearch.module.css"

export function JobSearch() {
    return (
        <JobSearchContainer>
            <div className={styles.searchbarContainer}>
                <Searchbar floatLabel="Job Title" />
                <Searchbar floatLabel="Location" icon="pi pi-compass" />
                <Button label="Search" />
            </div>
        </JobSearchContainer>
    )
}