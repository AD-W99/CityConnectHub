import { Post } from "./Post"
import { SelectedPost } from "./SelectedPost"
import { PostContainer } from "./containers/PostContainer"

import { useState } from "react"

import styles from "../styles/Feed.module.css"

export function Feed({ listings }) {
    const [selectedListing, setSelectedListing] = useState({})

    return (
        <div className={styles.container}>
            <SelectedPost selectedPost={selectedListing} />
            <PostContainer>
                {
                    listings ? 
                    listings.map((listing, index) => <Post key={index} data={listing} setSelectedListing={setSelectedListing} />) 
                    : null
                }
            </PostContainer>
        </div>
    )
}