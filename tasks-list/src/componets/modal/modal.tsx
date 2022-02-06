import React from "react"
import { useDispatch } from "react-redux";
import styled, { css } from 'styled-components';
import  {ModalProps, setVisibleModalParamsRedures} from "../../interfaces";
import { setVisibleModal } from "../../redux/actions";
import { ButtonsContainer, InputClose, MainModalContainer } from "./styled";


const TextClose = 'Close';

const ModalTask = ( props: ModalProps) =>{

    const dispatch = useDispatch()

    const onClickClose = () =>{
        const paramReducer: setVisibleModalParamsRedures ={
            showModal: false,
            infoModal: {
                title: "none",
                description: "none",        
            }
        }
        dispatch(setVisibleModal(paramReducer));
    }

    return(<MainModalContainer {...props}>
            <h1>{props.title}</h1>
            <span>{props.description}</span>
            <ButtonsContainer>
                 <InputClose onClick={onClickClose}>
                    {TextClose}
                 </InputClose>
            </ButtonsContainer>
    </MainModalContainer>)
}

export default ModalTask; 