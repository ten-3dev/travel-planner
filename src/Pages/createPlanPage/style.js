import styled from "styled-components";
import Modal from 'react-modal';

export const ModalCustom = styled(Modal)`
    width: 300px;
    height: 300px;
    background-color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0;
    outline: 0;
`