import { Searchbar } from "./Searchbar"
import { JobSearchContainer } from "./containers/JobSearchContainer"
import { Button } from "primereact/button"
import { Feed } from "./Feed"

import styles from "../styles/JobSearch.module.css"

export function JobSearch() {
    const tempArr = [
        {
          title: "Software Engineer",
          companyName: "TechCo",
          location: "San Francisco, CA",
          postedTime: "2 days ago",
          description: "We are seeking a skilled software engineer to join our dynamic team...",
          workType: "Full-time",
          contractType: "Permanent",
          experienceLevel: "Mid-level",
          salary: "$90,000 - $110,000 per year"
        },
        {
          title: "Marketing Specialist",
          companyName: "MarketingHub",
          location: "New York, NY",
          postedTime: "1 week ago",
          description: "Join our marketing team and drive innovative campaigns to promote our products...",
          workType: "Part-time",
          contractType: "Contract",
          experienceLevel: "Entry-level",
          salary: "$50,000 - $60,000 per year"
        },
        {
          title: "Data Scientist",
          companyName: "Data Insights Inc.",
          location: "Seattle, WA",
          postedTime: "3 days ago",
          description: "Exciting opportunity for a data scientist to analyze and interpret complex data sets...",
          workType: "Full-time",
          contractType: "Permanent",
          experienceLevel: "Senior-level",
          salary: "$120,000 - $150,000 per year"
        },
        {
          title: "Graphic Designer",
          companyName: "DesignStudio",
          location: "Los Angeles, CA",
          postedTime: "4 days ago",
          description: "Create visually stunning designs for print and digital media in a collaborative environment...",
          workType: "Full-time",
          contractType: "Permanent",
          experienceLevel: "Mid-level",
          salary: "$70,000 - $80,000 per year"
        },
        {
          title: "Customer Support Specialist",
          companyName: "SupportPro",
          location: "Chicago, IL",
          postedTime: "1 day ago",
          description: "Provide exceptional customer support through various channels, resolving issues and inquiries...",
          workType: "Full-time",
          contractType: "Permanent",
          experienceLevel: "Entry-level",
          salary: "$45,000 - $55,000 per year"
        }
    ]

    return (
        <JobSearchContainer>
            <div className={styles.searchbarContainer}>
                <Searchbar floatLabel="Job Title" />
                <Searchbar floatLabel="Location" icon="pi pi-compass" />
                <Button label="Search" />
            </div>
            <div className={styles.feedsContainer}>
                <Feed listings={tempArr} />
                <Feed listings={tempArr} />
            </div>
        </JobSearchContainer>
    )
}