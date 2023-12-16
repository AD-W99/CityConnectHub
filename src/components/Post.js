
export function Post({ data, setSelectedListing }) {
    const { title, companyName, location } = data

    return (
        <div onClick={() => setSelectedListing(data)}>
            <div>{title}</div>
            <div>{companyName}</div>
            <div>{location}</div>
        </div>
    )
}