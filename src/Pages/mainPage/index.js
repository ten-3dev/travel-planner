import React from "react";
import * as Styles from './style';

const MainPage = () => {
    return(
        <Styles.Wrapper>
            <Styles.Video controls={false} muted autoPlay loop>
                <source src="http://localhost:8000/video" type="video/mp4" />
            </Styles.Video>
        </Styles.Wrapper>
    )
}

export default MainPage;