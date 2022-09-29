import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`

export const Video = styled.video`
    z-index: -1;
    position: absolute;
    width: auto;
    height: auto;
    min-height: 100%;
    min-width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`