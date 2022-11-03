import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 300px 0px;
`

export const ErrorCode = styled.div`
    font-weight: 500;
    font-size: 100px;
`

export const ErrorContent = styled.div`
    font-weight: 300;
    margin: 20px 0px;
`

export const Button = styled(Link)`
    width: 100px;
    height: 40px;
    background-color: gray;
    border-radius: 5px;
    border: 0;
    color: white;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`