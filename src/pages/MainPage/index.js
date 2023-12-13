import { JobSearch } from "../../components/JobSearch";
import { Map } from "../../components/Map";
import { MainPageContainer } from "../../components/containers/MainPageContainer";

import { useState, useEffect } from "react";

function MainPage() {
    const [mapIsVisible, setMapIsVisible] = useState(window.innerWidth < 500 ? false : true)

    useEffect(() => {
        const handleResize = () => {
            setMapIsVisible(window.innerWidth < 500 ? false : true);
        }

        window.addEventListener('resize', handleResize)

        return () => {
          window.removeEventListener('resize', handleResize)
        }
    
    }, [])

    return (
        <MainPageContainer>
            <JobSearch />
            {mapIsVisible && <Map />}
        </MainPageContainer>
    )
}

export default MainPage