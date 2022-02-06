import styled, { css } from "styled-components"
import { ModalProps } from "../../../interfaces"


const MainModalContainer = styled.div<ModalProps>`
    min-width: 300px;
    min-height: 150px;
    border: 1px solid blue;
    position: absolute;
    background-color: grey;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    ${props => (!props.visible && css`display: none`)};
`
const ButtonsContainer = styled.div`
    display: flex;
    width: auto;
    flex-direction: row-reverse;
`
const InputClose = styled.button`
    margin: 16px;
`
export { MainModalContainer, ButtonsContainer, InputClose }