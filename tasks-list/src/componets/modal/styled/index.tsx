import styled, { css } from "styled-components"
import { blueSecundary, blueTerc } from "../../../config/colors"
import { ModalProps } from "../../../interfaces"


const ModalOverlayContainer = styled.div<ModalProps>`
    position: fixed; 
    z-index: 100; 
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; 
    overflow: auto;
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.9);
    ${props => (!props.visible && css`display: none`)}
`

const MainModalContainer = styled.div`
    min-width: 300px;
    min-height: 150px;
    position: absolute;
    background-color: ${blueTerc};
    top: 50%;
    left: 50%;
    border-radius: 16px;
    transform: translate(-50%, -50%);
   
`
const ButtonsContainer = styled.div`
    display: flex;
    width: auto;
    flex-direction: row-reverse;
`
const InputClose = styled.button`
    margin: 16px;
`

const TitleLabel = styled.h1({
    marginLeft: '16px'
})

const DescriptionLabel = styled.span({
    marginLeft: '16px'
})


export { MainModalContainer, ButtonsContainer, InputClose , ModalOverlayContainer, TitleLabel, DescriptionLabel}