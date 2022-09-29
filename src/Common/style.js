import styled from "styled-components";

export const MarginTopWrapper = styled.div`
    max-width: 1600px;
    margin: ${props => {
        return props.margin ? "80px auto 0 auto" : "0 auto"
    }};
`