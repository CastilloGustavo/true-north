import React from "react"
import { useDispatch } from "react-redux";
import styled, { css } from 'styled-components';
import { ModalProps, setVisibleModalParamsRedures } from "../../interfaces";
import { setVisibleModal } from "../../redux/actions";
import { ButtonsContainer, DescriptionLabel, InputClose, MainModalContainer, ModalOverlayContainer, TitleLabel } from "./styled";


const TextClose = 'Close';

const ModalTask = (props: ModalProps) => {

    const dispatch = useDispatch()

    const onClickClose = () => {
        const paramReducer: setVisibleModalParamsRedures = {
            showModal: false,
            infoModal: {
                title: "none",
                description: "none",
            }
        }
        dispatch(setVisibleModal(paramReducer));
    }

    return (
        <ModalOverlayContainer  {...props}>
            <MainModalContainer>
                <TitleLabel>{props.title}</TitleLabel>
                <DescriptionLabel>{props.description}</DescriptionLabel>
                <ButtonsContainer>
                    <InputClose onClick={onClickClose}>
                        {TextClose}
                    </InputClose>
                </ButtonsContainer>
            </MainModalContainer>

        </ModalOverlayContainer>
    )
}

export default ModalTask; 